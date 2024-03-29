const dir = {
  w: 'up', ArrowUp: 'up',
  s: 'down', ArrowDown: 'down',
  a: 'left', ArrowLeft: 'left',
  d: 'right', ArrowRight: 'right',
  ' ': 'pause', Enter: 'pause',
  r: 'restart',
};

const getDirection = (input) => dir[input];

export default getDirection;
