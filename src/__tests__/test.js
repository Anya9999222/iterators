import Team from '../js/iterator';

const defaultCharacter = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

test('should return objects', () => {
  const team = new Team();
  const hero = { ...defaultCharacter, name: 'anna' };
  const hero2 = { ...defaultCharacter, name: 'nina' };
  team.add(hero);
  team.add(hero2);

  const correct = [
    'anna',
    'nina',
  ];
  const arr = [];
  for (const char of team) {
    arr.push(char.name);
  }
  expect(arr).toEqual(correct);
});
