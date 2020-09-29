export default [
  {
    employee: 'Ivanov Ovan',
    position: 'Programmer',
    manager: 'Nimov Nimovich',
    city: 'Vologda',
    salary: {
      currency: 'RUB',
      value: 200000,
    },
    new_salary: {
      currency: 'RUB',
      value: 201000,
      status: 'discussion',
    },
    delta: 0.3,
    comment: 'text',
    tags: [],
  },
  {
    employee: 'Ivanov Ovan',
    position: 'Programmer',
    manager: 'Nimov Nimovich',
    city: 'Saint-Peterburg',
    salary: {
      currency: 'USD',
      value: 2000,
    },
    new_salary: {
      currency: 'USD',
      value: 3000,
      status: 'agreed',
    },
    delta: 0.3,
    comment: 'Рыбатекст используется дизайнерами',
    tags: ['риск ухода'],
  },
  {
    employee: 'Ivanov Ovan',
    position: 'Programmer',
    manager: 'Nimov Nimovich',
    city: 'Msk',
    salary: {
      currency: 'USD',
      value: 2000,
    },
    new_salary: {
      currency: 'EUR',
      value: 6000,
      status: 'agreed',
    },
    delta: 0.3,
    comment: '',
    tags: ['пересмотр в августе'],
  },
]
