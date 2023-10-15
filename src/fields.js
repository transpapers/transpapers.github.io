const fields = {
	legalName: {
		title: 'Full legal name',
		subtitle: 'as it appears on your ID',
		name: 'legal-name',
		type: 'Name',
	},
	chosenName: {
		title: 'Full chosen name',
		subtitle: 'as it will appear on your ID',
		name: 'chosen-name',
		type: 'Name',
	},
	reasonForNameChange: {
		title: 'Reason for name change',
		name: 'name-change-reason',
		type: 'string',
		default: 'Gender transition',
	},
	sealBirthCertificate: {
		title: 'Would you like to <a href="https://en.wikipedia.org/wiki/Sealed_birth_records">seal your previous birth certificate?</a>',
		name: 'seal-birth-certificate',
		type: 'boolean',
		default: true,
	},
	birthplace: {}, // FIXME
	dateOfBirth: {
		title: 'Date of birth',
		name: 'birthdate',
		type: 'Date',
	},
	age: {
		title: 'Age at time of filing',
		subtitle: 'Fill only if you are under 23.',
		name: 'age',
		type: 'number',
	},
	assignedSex: {
		title: 'Sex assigned at birth',
		name: 'birth-sex',
		type: 'option',
		options: ['M', 'F', 'X'],
	},
	gender: {
		title: 'Gender',
		subtitle: 'as it will appear on your ID',
		name: 'gender',
		type: 'option',
		options: ['M', 'F', 'X'],
	},
	doNotPublish: {
		title: 'Do you have good cause not to publish notice of your name change proceeding?',
		subtitle: 'such as a known stalker or another such credible, specific threat',
		name: 'do-not-publish',
		type: 'boolean',
	},
	parentsAreOkay: {}, // FIXME
	mothersBirthName: {
		title: 'Mother\'s name',
		subtitle: 'at her birth',
		name: 'mothers-name',
		type: 'Name',
	},
	mothersDateOfBirth: {
		title: 'Mother\'s date of birth',
		name: 'mothers-birthdate',
		type: 'date',
	},
	fathersBirthName: {
		title: 'Father\'s name',
		subtitle: 'at his birth',
		name: 'fathers-name',
		type: 'Name',
	},
	fathersDateOfBirth: {
		title: 'Father\'s date of birth',
		name: 'fathers-birthdate',
		type: 'date',
	},
	areaCode: {}, phone: {}, // FIXME
	streetAddress: {
		title: 'Street address',
		subtitle: 'including apartment/PO box/"line 2"',
		name: 'street-address',
		type: 'string',
	},
	city: {
		title: 'City',
		name: 'city',
		type: 'string',
	},
	county: {
		title: 'County',
		name: 'county',
		type: 'option',
	},
	zip: {},
	email: {
		title: 'Email address',
		subtitle: 'We will not email you.',
		name: 'email',
		type: 'string',
	},
	representativeName: {
		title: 'Name of your legal representative',
		subtitle: 'Fill only if you are a legal minor. Enter the name of the adult that will appear with you in court.',
		name: 'representative-name',
		type: 'Name',
	},
};

export default fields;
