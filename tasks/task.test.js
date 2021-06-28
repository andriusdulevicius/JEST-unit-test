const {
  returnDrivers,
  allPeople,
  noSexNameSurname,
  nameSurnameArr,
  malesOnly,
  youngFemales,
  marriedPeople,
  sexIfHasCar,
  sexAndIncome,
  renameIncome,
} = require('./task');

const testArr = [
  { hasCar: false, sex: 'male' },
  {
    hasCar: true,
    sex: 'female',
  },
  {
    hasCar: false,
    sex: 'female',
  },
  {
    hasCar: true,
    sex: 'male',
  },
];
it('should give back the count', () => {
  testArr.forEach((p) => {
    expect(Object.keys(p)).toContain('sex');
  });
  expect(returnDrivers(testArr)).toEqual({ male: 1, female: 1 });
});

const people = allPeople();
test('should check if age is a number', () => {
  expect(people.length).toBeGreaterThan(0);
  people.forEach((p) => {
    expect(typeof p.age).toBe('number');
  });
});

it('should return person with no sex , name,surname ', () => {
  expect(noSexNameSurname(people[0])).toEqual({
    id: 'it53',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
    devices: ['laptop', 'tablet', 'phone', 'drone'],
  });
});

it('should check if name, surname keys ar combined', () => {
  expect(nameSurnameArr[0]).toEqual({
    id: 'it51',
    fullname: 'Jonas Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
    devices: ['laptop', 'phone'],
  });
});
//kitas budas to paties testo
it('should check if name, surname keys ar combined', () => {
  nameSurnameArr.forEach((p) => {
    expect(Object.keys(p).includes('fullname')).toBe(true);
    expect(Object.keys(p).includes('name')).toBe(false);
    expect(Object.keys(p).includes('surname')).toBe(false);
  });
});

it('should return males only', () => {
  malesOnly.forEach((p) => {
    expect(p.sex).toBe('male');
  });
});

it('should return young females only', () => {
  youngFemales.forEach((p) => {
    expect(p.sex).toBe('female');
    expect(p.age < 35).toBe(true);
  });
});

it('should return married people only', () => {
  marriedPeople.forEach((p) => {
    expect(p.married).toBe(true);
  });
});
it('should return sex if has car', () => {
  sexIfHasCar.forEach((p) => {
    expect(Object.keys(p).length).toEqual(1);
  });
});

it('should return sex and icome', () => {
  expect(sexAndIncome[0].sex).toEqual('male');
  expect(sexAndIncome[0].income).toBeGreaterThan(0);
});

it('should rename icome', () => {
  expect(Object.keys(renameIncome(people[0]))).toContain('salary');
  expect(Object.keys(renameIncome(people[0]))).not.toContain('income');
});
