class TV {
  constructor(name) {
    this.name = name
    this.currentChannel = 1;
  }

  nextChannel() {
    this.currentChannel += 1;
  };

  previousChannel() {
    this.currentChannel -= 1;
  };

  setChannel(number) {
    this.currentChannel = number;
  };
}


class Player {
  constructor(name) {
    this.name = name;
    this.tracks = [];
    this.currentTrack = 0;
    this.volume = 50;
    this.maxVolume = 100,
      this.minVolume = 0;
  }

  addTrack(track) {
    this.tracks.push(track);
  };

  deleteTrack(track) {
    let i = this.tracks.indexOf(track);
    this.tracks.splice(i, 1);
  };

  displayAllTracks() {
    for (let i = 0; i < this.tracks.length; i++) {
      console.log('Track ' + (i + 1) + '. ' + this.tracks[i]);
    }
  };

  displayCurrentTrack() {
    console.log(this.tracks[this.currentTrack]);
  };

  nextTrack() {
    if (this.currentTrack < this.tracks.length - 1) {
      this.currentTrack += 1;
    } else {
      return this.currentTrack;
    }
  };

  previousTrack() {
    if (this.currentTrack !== 0) {
      this.currentTrack -= 1;
    } else {
      return this.currentTrack;
    }
  };

  random() {
    let j = parseInt(Math.random() * 100);
    if (j <= this.tracks.length - 1 && j !== this.currentTrack) {
      this.currentTrack = j;
    } else {
      return this.random();
    }
  };

  increaseVolume() {
    if (this.volume < this.maxVolume) {
      this.volume += 5;
    } else {
      return this.volume;
    }
  };

  decreaseVolume() {
    if (this.volume > this.minVolume) {
      this.volume -= 5;
    } else {
      return this.volume;
    }
  };

  displayVolume() {
    console.log('Current volume is ' + this.volume);
  };
}
