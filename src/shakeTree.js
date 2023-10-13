import { sampleData } from './person.js';

export default function shakeTree(object, accessed = []) {
  const recursePropertyNames = [ 'documents', 'map' ]

  const functionPropertyNames = [ 'include', 'text', 'check' ]

  const handler = {
    get(_target, prop) {
      if (!accessed.includes(prop)) {
        accessed.push(prop)
      }

      return Reflect.get(...arguments)
    }
  }

  recursePropertyNames.forEach(name => {
    if (object.hasOwnProperty(name)) {
      const subobject = object[name]
      if (Array.isArray(subobject)) {
        subobject.forEach( item => shakeTree(item, accessed))
      } else {
        shakeTree(subobject, accessed)
      }
    }
  })

  functionPropertyNames.forEach(name => {
    if (object.hasOwnProperty(name)) {
      const func = object[name]
      const proxiedDummy = new Proxy(sampleData, handler)

      func(proxiedDummy)
    }
  })

  return accessed
}
