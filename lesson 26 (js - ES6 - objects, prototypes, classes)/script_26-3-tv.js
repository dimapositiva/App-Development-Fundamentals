class TV {
  constructor(name) {
    this.name = name || 'New TV';
    this.currentChannel = 1;
  };

  nextChannel() {
    this.currentChannel++;
  };

  previousChannel() {
    if (this.currentChannel <= 1) {
      return tv.currentChannel;
    } else {
      this.currentChannel--;
    }
  };

  setChannel(num) {
    if (typeof num === 'string')
      throw new TypeError('Argument must be a number, not string or letter.');

    if (num === undefined || num === null) {
      return this.currentChannel;
    } else if (num > 0) {
      return this.currentChannel = num;
    }
  };
}
