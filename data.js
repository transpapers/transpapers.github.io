 let zips;

 // This should come in handy for documentation purposes.
 let sampleData = {
     legalName: {
         first: "Jane",
         middle: "Michelle",
         last: "Doe",
     },
     chosenName: {
         first: "John",
         middle: "Michael",
         last: "Doe",
     },
     maritalStatus: "Single",
     reasonForNameChange: "Gender transition",
     sealBirthCertificate: true,
     birthplace: {
         city: "New York",
         state: "New York",
         foreignCountry: "",
     },
     dateOfBirth: {
         day: 1,
         month: 1,
         year: 1970,
     },

     ethnicity: "",
     race: "",

     assignedSex: "F",
     gender: "X",
     mothersBirthName: {
         first: "Jane",
         middle: "Michelle",
         last: "Doe",
     },
     mothersDateOfBirth: {
         day: 1,
         month: 1,
         year: 1970
     },

     fathersBirthName: {
         first: "John",
         middle: "Michael",
         last: "Doe",
     },
     fathersDateOfBirth: {
         day: 1,
         month: 1,
         year: 1970
     },

     phone: "313-555-1234",

     streetAddress: "20 Monroe Street NW",

     city: "Grand Rapids",
     state: "Michigan",
     zip: "49503",
 };

 let ssnMap = {
     "chosenName.first": "firstname[0]",
     "chosenName.middle": "Middlename[0]",
     "chosenName.last": "LastName[0]",
     "legalName.first": "firstdiffname[0]",
     "legalName.middle": "Middlediffname[0]",
     "legalName.last": "Lastdiffname[0]",
     "birthplace.city": "cityofbirth[0]",
     "birthplace.state": "stateatbirth[0]",
     "mothersBirthName.first": "mothersfirstname[0]",
     "mothersBirthName.middle": "mothersmiddlename[0]",
     "mothersBirthName.last": "motherslastname[0]",
     "fathersBirthName.first": "fathersfirstname[0]",
     "fathersBirthName.middle": "fathersmiddlename[0]",
     "fathersBirthName.last": "fatherslastname[0]",
 };

 function SSNFormData(doc, rawData) {
     let form = doc.getForm();
     let fields = form.getFields();

     for (const [fromKey, toKey] of Object.entries(ssnMap)) {
         let fieldName = `topmostSubform[0].Page5[0].${toKey}`;
         let field = form.getFieldMaybe(fieldName);
        let text = fromKey.split('.').reduce((a,v) => a[v], rawData);

         console.log(fieldName, field != undefined, text);

         if (field && text) {
             field.setText(text);
         }
     }

     return doc;
 }

 fetch("./forms/ss-5-decrypted.pdf")
     .then(response => response.arrayBuffer())
     .then(PDFLib.PDFDocument.load)
     .then(doc => doc.getForm())
     .then(form => form.getFields())
     .then(fields => fields.forEach(field => {
         const type = field.constructor.name;
         const name = field.getName();
         console.log(`${type}: ${name}`);
     })
     );
/*
     .then(doc => SSNFormData(doc, sampleData))
     .then(doc => doc.save())
     .then(array => {
        let url = URL.createObjectURL(new Blob([array], {type: 'application/pdf'}));
        let link = document.createElement('a');
        link.download = "result.pdf";
        link.href = url;
        link.click();
        URL.revokeObjectURL(link.href);
     });
*/
