function GenericField(field, innards) {
  return (<label key={field.name}>
            <div>
                <span className='title'>{ field.title }</span>
              { field.hasOwnProperty('subtitle') ?
                <span className='subtitle'>{ field.subtitle }</span> :
                ""
              }
            </div>
            { innards }
          </label>);
}

export function StringField({ field }) {
  const innards = <input
                    id={field.name}
                    type='text'
                    defaultValue={field.hasOwnProperty('default') ? field.default : ''}/>;

  return GenericField(field, innards);
}

export function CheckboxField({ field }) {
  const innards = <input
                    id={field.name}
                    type='checkbox'
                    defaultChecked={field.hasOwnProperty('default') && field.default}
                  />;

  return GenericField(field, innards);
}

export function OptionField({ field }) {
  return <fieldset>
        <legend>{field.title}</legend>

		{field.options.map(value =>
            <label>
                <input
                  id={`${field.name}-${value}`}
                  name={field.name}
                  type='radio'
                />
              { value }
            </label>
		)}
    </fieldset>;
}

export function SelectField({ field }) {
  const innards = <select
                    name={field.name}
                    id={field.name}>
                    <option defaultValue=''></option>
                    {field.options.map(value =>
                      <option key={value} value={value}>{value}</option>
                    )}
                  </select>;

  return GenericField(field, innards);
}

export function NameField({ field }) {
  // FIXME Do this automatically, Sasha, you slut.
  const keys = ['first', 'middle', 'last', 'suffix'];
  const innards = <div
                    className='name'
                  >
                    {keys.map(key => <div key={key} className='subfield'>
                        <input
                          id={`${field.name}-${key}}`}
                          name={`${field.name}-${key}}`}
                          size='1'/>
                        <label htmlFor={`${field.name}-${key}`}>{key}</label>
                    </div>
                    )}
                  </div>;

  return GenericField(field, innards);
}

export function NumberField({ field }) {
  const innards = <input
                    id={field.name}
                    type='number'
                    defaultValue={field.hasOwnProperty('default') ? field.default : ''}/>;

  return GenericField(field, innards);
}

export function EmailField({ field }) {
  const innards = <input
                    id={field.name}
                    type='email'
                    defaultValue={field.hasOwnProperty('default') ? field.default : ''}/>;

  return GenericField(field, innards);
}

export function DateField({ field }) {
  const innards = <input
                    id={field.name}
                    type='date'
                    defaultValue={field.hasOwnProperty('default') ? field.default : ''}/>;

  return GenericField(field, innards);
}

export function TelField({ field }) {
  const innards = <input
                    id={field.name}
                    type='tel'
                    defaultValue={field.hasOwnProperty('default') ? field.default : ''}/>;

  return GenericField(field, innards);
}
