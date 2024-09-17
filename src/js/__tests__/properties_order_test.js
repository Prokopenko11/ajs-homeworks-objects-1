import orderByProps from '../properties_order';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

test('order array is empty', () => {
  const order = [];
  const result = orderByProps(obj, order);
  expect(result).toStrictEqual([{ key: 'attack', value: 80 }, { key: 'defence', value: 40 }, { key: 'health', value: 10 }, { key: 'level', value: 2 }, { key: 'name', value: 'мечник' }]);
});

test('order array has not existing strings', () => {
  const order = ['level', 'age'];
  const result = orderByProps(obj, order);
  expect(result).toStrictEqual([{ key: 'level', value: 2 }, { key: 'attack', value: 80 }, { key: 'defence', value: 40 }, { key: 'health', value: 10 }, { key: 'name', value: 'мечник' }]);
});
