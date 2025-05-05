const someone = {
  legalName: {
    first: "Vitia",
    middle: "Leonardo",
    last: "Top",
  },
  chosenName: { first: "Zachariah", middle: "Sibylla", last: "Critcher" },
  reasonForNameChange: "Duis bibendum. Morbi non quam nec dui luctus rutrum.",
  sealBirthCertificate: true,
  birthCity: "Grand Rapids",
  birthJurisdiction: "Michigan",
  birthdate: "1992-09-14",
  age: null,
  assignedSex: "M",
  gender: "X",
  doNotPublish: true,
  parentsAreOkay: true,
  mothersName: {
    first: "Mead",
    middle: "Emlynn",
    last: "Zealy",
  },
  mothersBirthdate: "1999-01-28",
  fathersName: {
    first: "Scottie",
    middle: "Anatole",
    last: "Tugwell",
  },
  fathersBirthdate: null,
  phone: "(407) 6822846",
  streetAddress: "3790 Fulton Street",
  city: "Detroit",
  residentJurisdiction: "Michigan",
  residentCounty: "Allegan",
  zip: "32118",
  email: "atouret0@biblegateway.com",
  representativeName: {
    first: "Timmy",
    middle: "Fergus",
    last: "Touret",
  },
};

describe("template spec", () => {
  it("passes", () => {
    // Visit Transpapers.
    cy.visit("localhost:5173");

    // Click on "Ready to get started?".
    cy.document().find('input[type="submit"]').click();

    // STEP 1: Resident jurisdiction.
    const { residentJurisdiction } = someone;

    cy.document()
      .find(
        `input[name="residentJurisdiction"][value="${residentJurisdiction}"]`,
      )
      .click();

    cy.document().find('input[type="submit"]').click();

    // STEP 2: County.
    const { residentCounty } = someone;

    cy.document()
      .find(`input[name="residentCounty"][value="${residentCounty}"]`)
      .click();

    cy.document().find('input[type="submit"]').click();

    // STEP 3: Birth jurisdiction.
    const { birthJurisdiction } = someone;

    cy.document()
      .find(`input[name="birthJurisdiction"][value="${birthJurisdiction}"]`)
      .click();

    cy.document().find('input[type="submit"]').click();

    // STEP 4: Birthdate.
    const { birthdate } = someone;

    cy.document().find(`input[name="birthdate"]`).type(birthdate);

    cy.document().find('input[type="submit"]').click();

    // STEP 5: Processes.
    // All checked to begin with. Leave them alone.
    cy.document().find('input[type="submit"]').click();

    // STEP 6: All other personal data.

    // Normal inputs.
    cy.document()
      .find(
        'input:not([type="submit"]):not([type="radio"]):not([type="checkbox"])',
      )
      .each((input) => {
        const path = input.attr("name").split(":");
        const dirs = path.slice(0, -1);
        const name = path.at(-1);

        let pointer = someone;
        dirs.forEach((dirname) => {
          if (!pointer.hasOwnProperty(dirname)) {
            pointer[dirname] = {};
          }
          pointer = pointer[dirname];
        });

        const value = pointer[name];
        if (value) {
          cy.get(input).type(value);
        }
      });

    // And <select>.
    cy.document()
      .find("select")
      .each((select) => {
        const path = select.attr("name").split(":");
        const dirs = path.slice(0, -1);
        const name = path.at(-1);

        let pointer = someone;
        dirs.forEach((dirname) => {
          if (!pointer.hasOwnProperty(dirname)) {
            pointer[dirname] = {};
          }
          pointer = pointer[dirname];
        });

        const value = pointer[name];
        if (value) {
          cy.get(select).select(value);
        }
      });

    // And radio.
    cy.document()
      .find('input[type="radio"]')
      .each((radio) => {
        const path = radio.attr("name").split(":");
        const dirs = path.slice(0, -1);
        const name = path.at(-1);

        let pointer = someone;
        dirs.forEach((dirname) => {
          if (!pointer.hasOwnProperty(dirname)) {
            pointer[dirname] = {};
          }
          pointer = pointer[dirname];
        });

        const value = pointer[name];
        if (value == radio.value) {
          cy.get(radio).check();
        }
      });

    // And checkboxes.
    cy.document()
      .find('input[type="checkbox"]')
      .each((checkbox) => {
        const path = checkbox.attr("name").split(":");
        const dirs = path.slice(0, -1);
        const name = path.at(-1);

        let pointer = someone;
        dirs.forEach((dirname) => {
          if (!pointer.hasOwnProperty(dirname)) {
            pointer[dirname] = {};
          }
          pointer = pointer[dirname];
        });

        const value = pointer[name];
        if (value === true) {
          cy.get(checkbox).check();
        }
      });

    cy.document().find('input[type="submit"]').click();
  });
});
