import pymupdf
import tkinter
from tkinter import filedialog
import os
import sys

script_directory = os.path.dirname(os.path.abspath(sys.argv[0]))
tkinter.Tk().withdraw()
source = filedialog.askopenfilename(initialdir = script_directory)

doc = pymupdf.open(source)
for page in doc: # iterate the document pages
    for field in page.widgets(): # get every fillable form object
        print(field.field_name, field.field_type_string, field.button_states())
        # #2F is "/", #20 is " ", #28 is "(", #29 is ")"
        # see ASCII table for more
        
        # if it spits out just a number for a radio button state add the
        # word "Choice" before it, example: '0' -> 'Choice0'.
