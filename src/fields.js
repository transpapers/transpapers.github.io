export const fields = {
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
		title: 'I would like to <a href="https://en.wikipedia.org/wiki/Sealed_birth_records">seal my previous birth certificate</a>.',
		subtitle: 'This prevents third parties from accessing your deadname and AGAB.',
		name: 'seal-birth-certificate',
		type: 'boolean',
		default: true,
	},
	birthCity: {
		title: 'City of birth',
		name: 'birth-city',
		type: 'string',
	},
	birthState: {
		// FIXME This needs to be handled up above.
		title: 'State of birth',
		subtitle: 'or foreign country',
		name: 'birth-state',
		type: 'string',
		default: 'Michigan',
	},
	dateOfBirth: {
		title: 'Date of birth',
		name: 'birthdate',
		type: 'Date',
	},
	age: {
		// FIXME This should only appear if minor is set
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
		title: 'I have good cause not to publish notice of my name change proceeding.',
		subtitle: 'such as a known stalker or another such credible, specific threat',
		name: 'do-not-publish',
		type: 'boolean',
	},
	parentsAreOkay: false,
	mothersBirthName: {
		title: 'Mother\'s name',
		subtitle: 'at her birth',
		name: 'mothers-name',
		type: 'Name',
	},
	mothersDateOfBirth: {
		title: 'Mother\'s date of birth',
		name: 'mothers-birthdate',
		type: 'Date',
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
		type: 'Date',
	},
	phone: {
		title: 'Daytime phone',
		name: 'phone',
		type: 'tel',
	},
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
	state: {
		title: 'State',
		name: 'state',
		type: 'string',
	},
	county: {
		title: 'County',
		name: 'county',
		// Type: 'select',
		type: 'option',
		options: ['Kent', 'Charlevoix', 'Wayne'],
	},
	zip: {
		title: 'ZIP code',
		name: 'zip',
		type: 'string',
	},
	email: {
		title: 'Email address',
		subtitle: 'We will not email you.',
		name: 'email',
		type: 'email',
	},
	representativeName: {
		// FIXME Should appear for minors only.
		title: 'Name of your legal representative',
		subtitle: 'Fill only if you are a legal minor. Enter the name of the adult that will appear with you in court.',
		name: 'representative-name',
		type: 'Name',
	},
};

export function renderField(field) {
	if (!field || !Object.prototype.hasOwnProperty.call(field, 'type')) {
		return null;
	}

	const label = document.createElement('label');
	const text = document.createElement('div');
	const title = document.createElement('strong');
	title.innerHTML = field.title;
	text.append(title);

	if (Object.prototype.hasOwnProperty.call(field, 'subtitle')) {
		const subtitle = document.createElement('span');
		subtitle.className = 'subtitle';
		subtitle.innerHTML = field.subtitle;

		text.append(subtitle);
	}

	label.append(text);

	if (field.type === 'string') { // Input.
		const input = document.createElement('input');
		input.setAttribute('id', field.name);
		input.setAttribute('type', 'text');

		if (Object.prototype.hasOwnProperty.call(field, 'default')) {
			input.setAttribute('value', field.default);
		}

		label.append(input);
	} else if (field.type === 'boolean') { // Checkbox.
		const input = document.createElement('input');
		input.setAttribute('id', field.name);
		input.setAttribute('type', 'checkbox');

		if (Object.prototype.hasOwnProperty.call(field, 'default') && field.default) {
			input.setAttribute('checked', '');
		}

		label.className = 'checkbox';
		label.prepend(input);
	} else if (field.type === 'option') {
		label.remove();
		const fieldset = document.createElement('fieldset');

		const legend = document.createElement('legend');
		legend.textContent = field.title;

		fieldset.append(legend);

		field.options.forEach(value => {
			const radioLabel = document.createElement('label');
			const input = document.createElement('input');
			input.setAttribute('id', `${field.name}-${value}`);
			input.setAttribute('name', field.name);
			input.setAttribute('type', 'radio');
			radioLabel.append(input, value);
			fieldset.append(radioLabel);
		});

		return fieldset;
	} else if (field.type === 'number') {
		const input = document.createElement('input');
		input.setAttribute('type', 'number');
		input.setAttribute('id', field.name);
		label.append(input);
	} else if (field.type === 'Name') { //
		const first = document.createElement('input');
		const middle = document.createElement('input');
		const last = document.createElement('input');
		const suffix = document.createElement('input');

		first.setAttribute('id', `${field.name}-first`);
		middle.setAttribute('id', `${field.name}-middle`);
		last.setAttribute('id', `${field.name}-last`);
		suffix.setAttribute('id', `${field.name}-suffix`);

		for (const element of [first, middle, last, suffix]) {
			element.setAttribute('size', 1);
		}

		const nameWrapper = document.createElement('div');
		nameWrapper.className = 'name';
		nameWrapper.append(first, middle, last, suffix);
		label.append(nameWrapper);
	} else if (field.type === 'Date') {
		const input = document.createElement('input');
		input.setAttribute('id', field.name);
		input.setAttribute('type', 'date');
		label.append(input);
	} else if (field.type === 'email') {
		const input = document.createElement('input');
		input.setAttribute('id', field.name);
		input.setAttribute('type', 'email');
		label.append(input);
	} else if (field.type === 'tel') {
		const input = document.createElement('input');
		input.setAttribute('id', field.name);
		input.setAttribute('type', 'tel');
		label.append(input);
	}

	return label;
}
