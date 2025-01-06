class Util {
  static arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  static objectsIsEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) return false;
    }
    return true;
  }

  static includesObjectInArray(mainArray, objToFind) {
    for (const element of mainArray) {
      if (Util.areObjectsEqual(element, objToFind)) {
        return true;
      }
    }
    return false;
  }

  static includesObjects(objectsToFind, mainArray) {
    if (Array.isArray(objectsToFind)) {
      // Se for um array, use a lógica anterior
      return objectsToFind.every(obj1 => mainArray.some(obj2 => Util.areObjectsEqual(obj1, obj2)));
    } else {
      // Se for um único objeto, use some diretamente
      return mainArray.some(obj2 => Util.areObjectsEqual(objectsToFind, obj2));
    }
  }

  static areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    return keys1.every(key => {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object' && obj1[key] !== null && obj2[key] !== null) {
        return Util.areObjectsEqual(obj1[key], obj2[key])
      } else {
        return obj1[key] === obj2[key] || (obj1[key] === null && obj2[key] === null)
      }
    })
  }
}

export default Util;