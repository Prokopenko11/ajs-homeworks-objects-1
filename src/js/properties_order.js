export default function orderByProps(object, order) {
  const sortedObjects = [];
  /* eslint-disable no-restricted-syntax */
  for (let i = 0; i < order.length; i += 1) {
    for (const key in object) {
      if (key === order[i]) {
        sortedObjects.push({ key, value: object[key] });
        delete object[key];
      }
    }
  }
  /* eslint-enable no-restricted-syntax */

  const keysInAlphabetOrder = Object.keys(object).sort();
  keysInAlphabetOrder.forEach((key) => {
    sortedObjects.push({ key, value: object[key] });
  });

  return sortedObjects;
}
