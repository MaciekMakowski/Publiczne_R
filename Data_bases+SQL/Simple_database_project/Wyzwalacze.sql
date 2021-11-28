/*Trigger 1 SPRAWDZA CZY ISTNIEJE JUZ PODOBNA REZERWACJA*/
DELIMITER //
CREATE TRIGGER RezerwacjaStolikow_after_insert
AFTER INSERT ON RezerwacjaStolikow
FOR EACH ROW
BEGIN
    DECLARE custom_message VARCHAR(256);
	IF (SELECT count(*) FROM RezerwacjaStolikow as rsa 
		JOIN Rezerwacja as ra ON rsa.Rezerwacja_idRezerwacji=ra.idRezerwacji
		JOIN RezerwacjaStolikow as rsb ON rsa.Stolik_NrStolika=rsb.Stolik_NrStolika 
		JOIN Rezerwacja as rb ON rsb.Rezerwacja_idRezerwacji = rb.idRezerwacji
		where rsa.Stolik_NrStolika=NEW.Stolik_NrStolika and ra.Data=rb.Data and time(abs(ra.Godzina-rb.Godzina))<time('02:00') and rsa.Rezerwacja_idRezerwacji != rsb.Rezerwacja_idRezerwacji) > 0
			THEN
				set custom_message="Istnieje zbliżona rezerwacja na tę godzine proszę wybrać inny stolik";
				signal sqlstate '13500'
				set message_text = custom_message;
	END IF;
END
//
DELIMITER ;
/*Trigger 2 DODAJE USUNIETYCH PRACOWNIKOW DO ARCHIWUM*/
DELIMITER //
CREATE TRIGGER Pracownik_before_delete
BEFORE DELETE ON Pracownik
FOR EACH ROW
BEGIN
  CREATE TABLE IF NOT EXISTS Archiwum_pracownikow LIKE Pracownik;
  INSERT INTO Archiwum_pracownikow SELECT * FROM Pracownik WHERE idPracownik=OLD.idPracownik;
  END
//
DELIMITER ;

/*PROCEDURA WYSWIETLA REZERWACJE NA DZIS*/
DELIMITER $$
CREATE PROCEDURE RezerwacjeDzis()
BEGIN
SELECT * FROM Rezerwacja WHERE Data = DATE(now());
END
$$
DELIMITER ;

/*FUNCKJA SPRAWDZA ILOSC ZAREZERWOWANYCH STOLIKOW do rezerwacji*/
DELIMITER //
CREATE FUNCTION Ile_stolikow(idRezerwacji INT)
    RETURNS INTEGER
BEGIN
	DECLARE ile INT;
	SELECT COUNT(*)  INTO ile FROM RezerwacjaStolikow WHERE Rezerwacja_idRezerwacji = idRezerwacji;
    RETURN ile;
END //
DELIMITER
