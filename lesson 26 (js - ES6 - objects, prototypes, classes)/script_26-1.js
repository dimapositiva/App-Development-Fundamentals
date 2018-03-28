let tv = {};

tv.currentChannel = 1;

tv.nextChannel = () => tv.currentChannel++;

tv.previousChannel = () => {
  if (tv.currentChannel <= 1) {
    return tv.currentChannel;
  } else {
    tv.currentChannel--
  }
};

tv.setChannel = (num) => {
  if (typeof num === 'string')
    throw new TypeError('Argument must be a number, not string or letter.');

  if (num === undefined || num === null) {
    return tv.currentChannel;
  } else if (num > 0) {
    return tv.currentChannel = num;
  }
}
