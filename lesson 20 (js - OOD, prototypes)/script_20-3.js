function TV(name) {
  this.name = name;
  this.currentChannel = 1;
}

function nextChannel() {
  this.nextChannel = () => {
    if (this.currentChannel === undefined) {
      this.currentChannel = 1;
    } else {
      this.currentChannel += 1;
    }
  }
};

function previousChannel() {
  this.previousChannel = () => {
    if (this.currentChannel === undefined) {
      this.currentChannel = 1;
    } else {
      this.currentChannel -= 1;
    }
  }
};

function setChannel(number) {
  this.setChannel = () => {
    this.currentChannel = number;
  }
};

TV.prototype.nextChannel = nextChannel;
TV.prototype.previousChannel = previousChannel;
TV.prototype.setChannel = setChannel;
