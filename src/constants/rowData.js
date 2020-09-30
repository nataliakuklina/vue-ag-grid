export default [
  {
    employee: 'Ivanov Ivan',
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
    discuss: {
      comments: [
        {
          id: 1,
          author: 'Tomas',
          datetime: '2020-11-11 12:11',
          text: 'Привет! Думаю тут нужно увеличить, оценка хорошая, мау!'
        }
      ]
    }
  },
  {
    employee: 'Smirnova Svetlana',
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
    discuss: {
      comments: [
        {
          id: 1,
          author: 'Tomas',
          datetime: '2020-11-11 12:11',
          text: 'Привет! Думаю тут нужно увеличить, оценка хорошая, мау!'
        }
      ]
    }
  },
  {
    employee: '@tomas_mister_cat',
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
    discuss: {
      comments: [
        {
          id: 1,
          author: 'Tomas',
          datetime: '2020-11-11 12:11',
          text: 'Привет! Думаю тут нужно увеличить, оценка хорошая, мау!',
          status: 'accept',
        },
        {
          id: 2,
          author: 'Top manager',
          datetime: '2020-11-11 12:20',
          text: 'Привет! Надо подумать!',
          status: '',
        },
        {
          id: 3,
          author: 'Top manager',
          datetime: '2020-11-11 12:20',
          text: 'Подумал, посмотрел оценочки, действительно надо увеличить',
          status: '',
        },
        {
          id: 4,
          author: 'Top manager',
          datetime: '2020-11-11 12:20',
          text: 'в 3 раза',
          status: '',
        },
        {
          id: 4,
          author: 'Top manager',
          datetime: '2020-11-11 12:20',
          text: 'в 10 раз!',
          status: '',
        },
        {
          id: 5,
          author: 'Tomas',
          datetime: '2020-11-11 12:20',
          text: 'Ура-мурмя!',
          status: '',
        },
      ]
    }
  },
]
