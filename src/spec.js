/**
 * @typedef {Object} Process - Procedural information for filing.
 * @property {string} state - State or territory.
 * @property {string} target - The object of filing the documents; e.g., birth
 *     record, primary identification, passport, etc.
 * @property {Document[]} documents - An ordered list of documents to attach.
 *
 * How to generate the form fields?
 */

/**
 * @typedef {Object} Document - A single document to be filed.
 * @property {string} name - Human-readable name of document.
 * @property {string} id - State or federal document ID, if one exists.
 * @property {string} filename - Location of PDF file.
 * @property {function(Person): boolean} include - Criterion for inclusion; defaults to () => true.
 * @property {Formfill[]} map - List of form fields to fill.
 */

const mockProcess = {
	state: 'MI',
	target: 'birth-record',
	documents: [
		{
			name: 'Petition to Change Name',
			id: 'PC 51',
			filename: 'mi/pc51.pdf',
			map: nameChangeMap,
		},
	],
};
