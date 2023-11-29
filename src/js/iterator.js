export default class Team {
  constructor() {
    this.team = [];
  }

  add(character) {
    this.team.push(character);
  }

  [Symbol.iterator]() {
    let index = 0;
    const arr = this.team;

    return {
      next() {
        if (index >= arr.length) {
          return {
            value: undefined,
            done: true,
          };
        }
        return {
          value: arr[index++],
          done: false,
        };
      },
    };
  }
}
