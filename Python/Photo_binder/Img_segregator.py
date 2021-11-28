import os
import datetime
import shutil
from tqdm import tqdm
from PIL import Image

#segregate by years

PATH = '' #Path to files
EXTENSIONS = ('jpg', 'png', 'bmp', 'gif', 'jpeg', 'rav', 'heif', 'tiff', 'tif')
DESTINATION_PATH = '' #Destiation to copied files


def check_if_exist(file_name, new_destination_dir):
    f_path = os.path.join(new_destination_dir, file_name)
    if os.path.isfile(f_path):
        return True
    return False


def make_dir(new_destination_dir):
    if not os.path.isdir(new_destination_dir):
        os.mkdir(new_destination_dir)


def copy_to_destination_path(file_name, full_path, DESTINATION_PATH, image_year):
    new_destination_dir = os.path.join(DESTINATION_PATH, image_year)
    file_split = os.path.splitext(file_name)
    new_file_name = file_name
    make_dir(new_destination_dir)
    i: int = 1
    i_size: int = len(str(i))
    while check_if_exist(new_file_name, new_destination_dir):
        new_file_split = os.path.splitext(new_file_name)
        if new_file_split[0][-i_size - 1: -i_size] == '_':
            new_file_name = new_file_split[0][: -i_size] + str(i) + new_file_split[1]
            i += 1
        else:
            new_file_name = file_split[0] + '_1' + file_split[1]
    new_destination_dir = os.path.join(new_destination_dir, new_file_name)
    shutil.copy(full_path, new_destination_dir, follow_symlinks=True)


def get_metadata(path_of_image):
    try:
        image_data = Image.open(path_of_image)
        exif = image_data.getexif()
        if exif.get(36867):
            year: str = exif.get(36867)[:4]
        else:
            year: str = str(datetime.datetime.fromtimestamp(os.stat(path_of_image).st_mtime).year)
        return year
    except:
        return 0

PATH = input('Type path to files:')
DESTINATION_PATH = input('Type path to destination:')

for root, dirs, files in os.walk(PATH, topdown=True):
    print(root)
    for file_name in tqdm(files):
        if file_name.lower().endswith(EXTENSIONS):
            full_path = os.path.join(root, file_name)
            image_year = get_metadata(full_path)
            if image_year != 0:
                copy_to_destination_path(file_name, full_path, DESTINATION_PATH, image_year)
