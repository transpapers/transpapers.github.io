# How to contribute

Thank you for your interest in contributing to Transpapers. By so doing, you
are accelerating the onset of [fully automated luxury gay space
communism](https://en.wiktionary.org/wiki/Fully_Automated_Luxury_Gay_Space_Communism).

Higher-level instructions are forthcoming.

## To add a PERSONAL DATA FIELD...

The model commit for this process is eae7d3d.

1. Add the field, including type and documentation comment, to
   `src/types/person.ts`.
2. Edit the appropriate maps under `src/jurisdiction/` to use the added field.
   _(Fields should not be added unless they are needed somewhere, i.e.,
   required by some form or required in order to determine which forms should
   be filed and how.)_
3. Fix any errors that arise upon running `npm run tsc`.

## To add a FORMFILL...

We have two ways to add a new formfill, depending on whether the PDF in
question supports [fillable forms](https://en.wikipedia.org/wiki/Acroforms#Forms).

### If the PDF has fillable forms...

The model commit for this process is forthcoming.

First, obtain the name of the PDF field.

1. Open the PDF in a metadata viewer. We use
   [PDFYeah](https://www.pdfyeah.com/view-pdf-metadata/). If you desire a
   _libre_ solution, we recommend
   [pdftk](https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/), which has
   been ported to most Linux distributions.
2. Record the PDF field's internal name. This appears under the metadata tag
   `FieldName`. This may be set to a sensible value by the author of the PDF,
   or it may be automatically generated from the nearest text element. _Nota
   bene: the field name is case- and whitespace-sensitive. It must be entered
   exactly as it appears in the document._
3. Add the formfill as follows:

```javascript
{
    text: YOUR_FUNCTION,
    field: YOUR_PDF_FIELD_NAME,
},
```

### If the PDF does not have fillable forms...

The model commit for this process is 03b4cc4.

First, obtain the needed XY coordinates.

1. Open the PDF in your image editor of choice at **100 DPI.** (Photoshop will
   do fine if you have it. If you desire a _libre_ solution, the [GNU Image
   Manipulation Program](https://gimp.org) or [Krita](https://krita.org) are
   good choices; we use the former.)
2. Type some dummy text (asdfasdfasdf, etc.) where the filled text should
   appear.
3. Record the pixel coordinates `(YOUR_X_COORDINATE, YOUR_Y_COORDINATE)` of the
   top-left corner of this text layer.
4. Add the formfill as follows:

```javascript
{
    text: YOUR_FUNCTION,
    loc: { x: YOUR_X_COORDINATE, y: YOUR_Y_COORDINATE },
},
```
