import tkinter
from tkinter import filedialog
import os
import sys
from pypdf import PdfReader

script_directory = os.path.dirname(os.path.abspath(sys.argv[0]))
tkinter.Tk().withdraw()
source = filedialog.askopenfilename(initialdir = script_directory)

doc = PdfReader(source)
count = 0
for page in doc.pages: # iterate the document pages
    mediaBox = doc.pages[count].mediabox #grap media box object to get size
    count = count + 1
    
    print('Raw Width: ' + str(mediaBox.width))
    widthInch = (mediaBox.width * (1/72)) * 100
          
    print('Raw Height: ' + str(mediaBox.height))
    heightInch = (mediaBox.height * (1/72)) * 100
          
    print('Page: ' + str(count) + ' Width: ' + str(widthInch) + ' Height: ' + str(heightInch))
    print ('')
    
