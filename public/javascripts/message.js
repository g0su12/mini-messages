// Default the messages

const moment = require('moment');
let date = moment().startOf('day').fromNow();
let date2 = moment().startOf('hour').fromNow();

const messages = [
  {
    title: 'Last love',
    description:
      'Relationships are like glass. Sometimes it’s better to leave them broken than try to hurt yourself putting it back together.',
    username: 'g0su12',
    date: date2,
  },
  {
    title: 'First love',
    description:
      'Even more, I had never meant to love him. One thing I truly knew – knew it in the pit of my stomach, in the center of my bones, knew it from the crown of my head to the soles of my feet, knew it deep in my empty chest – was how love gave someone the power to break you',
    username: 'Min min',
    date: date,
  },
];

module.exports = messages;
