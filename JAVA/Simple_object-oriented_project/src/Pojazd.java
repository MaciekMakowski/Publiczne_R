package  pl.edu.uwm.obiektowe.s162460.kolo1;
import java.time.*;
import java.util.*;

import javafx.scene.input.DataFormat;

import javax.xml.crypto.Data;

public class Pojazd{

    private String marka;
    private String model;
    protected LocalDate dataProdukcji;
    private double cenaBazowa;
    private String Vin;
    private ArrayList<Wyposazenie> Wyposazenie = new ArrayList<Wyposazenie>();

    public Pojazd(String marka, String model, String dataProdukcji, double cenaBazowa){
        this.marka = marka;
        this.model = model;
        this.dataProdukcji=LocalDate.parse(dataProdukcji);
        this.cenaBazowa = cenaBazowa;
    }

    public String getMarka(){
        return marka;
    }
    public String getModel(){
        return model;
    }
    public LocalDate getDataProdukcji(){
        return dataProdukcji;
    }
    public double getCenaBazowa(){
        return cenaBazowa;
    }
    public String getVin(){
        return Vin;
    }
    public void setMarka(String marka_new){
        this.marka=marka_new;
    }
    public void setModel(String model_new){
        this.model=model_new;
    }
    public void setCenaBazowa(double cena_new){
        this.cenaBazowa=cena_new;
    }
    public boolean isVin(String Vin){
        if(Vin.length()!=17){
            return false;
        }
        if(Vin.contains("I") || Vin.contains("O") || Vin.contains("Q")){
            return false;
        }
        return true;
    }
    public void setVin(String Vin_new){
        if(!isVin(Vin_new)){
            System.out.println("Błędny kod Vin");
        }else {
            this.Vin = Vin_new;
        }
    }

    public int wiekAuta(){
        return LocalDate.now().getYear()-dataProdukcji.getYear();
    }

    public String toString(){
        return "Pojazd marki: "+marka+", model: "+model+" wyprodukowany "+dataProdukcji;
    }

    public void dodajWyposazenie(Wyposazenie item){
        Wyposazenie.add(item);
    }

    public double getCenaFinalna(){
        double wynik=cenaBazowa;
        if(Wyposazenie.isEmpty()==false) {
            for (Wyposazenie x : Wyposazenie) {
                wynik += x.cena;
            }
        }
        return wynik;
    }
    public void listWyposazenie(){
        if(Wyposazenie.isEmpty()) {
            System.out.println("Nie posiada wyposażenia.");
        }else{
            for(Wyposazenie x: Wyposazenie){
                System.out.println("Wyposazenie: "+x.nazwa+" cena: "+x.cena+".");
            }
        }
    }
}
class Wyposazenie {
    String nazwa;
    double cena;

    public Wyposazenie(String nazwa, double cena) {
        this.nazwa = nazwa;
        this.cena = cena;
    }
}

class Test{

    public static void main(String[] args)
    {
        Pojazd auto1 = new Pojazd("Audi","B5","1998-10-11",115000.0);
        Pojazd auto2 = new Pojazd("BMW","A6","1978-10-30",340000.0);
        Pojazd auto3 = new Pojazd("Audi","A1","2006-02-15",211100.0);

        Wyposazenie item1 = new Wyposazenie("GPS", 250.0);
        Wyposazenie item2 = new Wyposazenie("Radio", 350.0);
        Wyposazenie item3 = new Wyposazenie("Wycieraczki", 55.0);
        Wyposazenie item4 = new Wyposazenie("Tapicerka", 1300.0);
        Wyposazenie item5 = new Wyposazenie("Dotykowy Ekran", 850.0);

        auto1.dodajWyposazenie(item1);
        auto1.dodajWyposazenie(item2);
        auto1.dodajWyposazenie(item3);
        auto1.dodajWyposazenie(item4);
        auto1.dodajWyposazenie(item5);

        auto2.dodajWyposazenie(item1);
        auto2.dodajWyposazenie(item3);
        auto2.dodajWyposazenie(item5);

        ArrayList<Pojazd> garaz = new ArrayList<Pojazd>();
        garaz.add(auto1);
        garaz.add(auto2);
        garaz.add(auto3);

        for(Pojazd x: garaz){
            System.out.println(x.toString()+" Cena: "+x.getCenaBazowa());
            x.listWyposazenie();
            System.out.println("Cena Finalna: "+x.getCenaFinalna());
            System.out.println();
            System.out.println('\n');

        }

    }
}