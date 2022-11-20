export const testMembers = [
  { name: 'Команда 1', id: 1, steps: 0 },
  { name: 'Команда 2', id: 2, steps: 0 },
  { name: 'Команда 3', id: 3, steps: 0 },
  { name: 'Команда 4', id: 4, steps: 0 },
]

export const cards = {
  usuall: [
    {
      number: 1,
      img: require('../assets/images/cards/usuall/1.png')
    },
    {
      number: 2,
      img: require('../assets/images/cards/usuall/2.png')
    },
    {
      number: 3,
      img: require('../assets/images/cards/usuall/3.png')
    },
    {
      number: 4,
      img: require('../assets/images/cards/usuall/4.png')
    },
    {
      number: 5,
      img: require('../assets/images/cards/usuall/5.png')
    },
    {
      number: 6,
      img: require('../assets/images/cards/usuall/6.png')
    },
    {
      number: 7,
      img: require('../assets/images/cards/usuall/7.png')
    },
    {
      number: 8,
      img: require('../assets/images/cards/usuall/8.png')
    }
  ],
  ekivoki: [
    {
      number: 1,
      img: require('../assets/images/cards/ekivoki/1.png')
    },
    {
      number: 2,
      img: require('../assets/images/cards/ekivoki/2.png')
    },
    {
      number: 3,
      img: require('../assets/images/cards/ekivoki/3.png')
    },
    {
      number: 4,
      img: require('../assets/images/cards/ekivoki/4.png')
    },
    {
      number: 5,
      img: require('../assets/images/cards/ekivoki/5.png')
    },
    {
      number: 6,
      img: require('../assets/images/cards/ekivoki/6.png')
    }
  ]
}

export const positions = [
  {
    special: false
  },
  {
    special: false
  },
  {
    special: true,
    mode: 'auction',
    preview: require('../assets/images/common/frame.png')
  },
  {
    special: false
  },
  {
    special: true,
    mode: 'harmful',
    preview: require('../assets/images/common/harmful.png')
  },
  {
    special: true,
    mode: 'karma',
    preview: require('../assets/images/common/karma.png')
  },
  {
    special: false
  },
  {
    special: true,
    mode: 'entropy',
    preview: require('../assets/images/common/entropy.png')
  },
  {
    special: false
  },
  {
    special: false
  },
  {
    special: false
  },
  {
    special: true,
    mode: 'auction',
    preview: require('../assets/images/common/frame.png')
  },
  {
    special: false
  },
  {
    special: true,
    mode: 'harmful',
    preview: require('../assets/images/common/harmful.png')
  },
  {
    special: true,
    mode: 'karma',
    preview: require('../assets/images/common/karma.png')
  },
  {
    special: false
  },
  {
    special: true,
    mode: 'entropy',
    preview: require('../assets/images/common/entropy.png')
  },
  {
    special: false
  },
  {
    special: false
  },
  {
    special: false
  },
  {
    special: true,
    mode: 'auction',
    preview: require('../assets/images/common/frame.png')
  },
  {
    special: false
  },
  {
    special: true,
    mode: 'harmful',
    preview: require('../assets/images/common/harmful.png')
  },
  {
    special: true,
    mode: 'karma',
    preview: require('../assets/images/common/karma.png')
  },
  {
    special: false
  },
  {
    special: true,
    mode: 'entropy',
    preview: require('../assets/images/common/entropy.png')
  },
  {
    special: false
  },
  {
    special: false
  },
  {
    special: false
  },
  {
    special: true,
    mode: 'auction',
    preview: require('../assets/images/common/frame.png')
  },
  {
    special: false
  },
  {
    special: true,
    mode: 'harmful',
    preview: require('../assets/images/common/harmful.png')
  },
  {
    special: true,
    mode: 'karma',
    preview: require('../assets/images/common/karma.png')
  },
  {
    special: false
  },
  {
    special: true,
    mode: 'entropy',
    preview: require('../assets/images/common/entropy.png')
  },
  {
    special: false
  },
  {
    special: false
  },
  {
    special: false
  },
  {
    special: true,
    mode: 'auction',
    preview: require('../assets/images/common/frame.png')
  },
  {
    special: false
  },
  {
    special: true,
    mode: 'harmful',
    preview: require('../assets/images/common/harmful.png')
  },
  {
    special: true,
    mode: 'karma',
    preview: require('../assets/images/common/karma.png')
  },
  {
    special: false
  },
  {
    special: true,
    mode: 'entropy',
    preview: require('../assets/images/common/entropy.png')
  },
  {
    special: false
  },
  {
    special: false
  },
  {
    special: false
  },
  {
    special: true,
    mode: 'auction',
    preview: require('../assets/images/common/frame.png')
  },
  {
    special: false
  },
  {
    special: true,
    mode: 'harmful',
    preview: require('../assets/images/common/harmful.png')
  },
  {
    special: false
  }
]


export const defaultState = {
  status: 'intro',
  members: [],
  cube: 1,
  queuePosition: 1,
  positions: positions,
  cards: cards,
  displayCard: true,
  card: null
}