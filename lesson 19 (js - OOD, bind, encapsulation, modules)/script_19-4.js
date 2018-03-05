class Player {
  constructor(name) {
    this.name = name;
    this.tracks = [];
    this.currentTrack = 0;
    this._volume = 50;
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

  setVolume(arg) {
    if (0 > arg || arg > 100) {
      console.log('Set the volume in the range from 0 to 100.')
    } else {
      let value = Number(arg);
      if (!isNaN(value)) {
        this._volume = value;
      } else {
        console.log('Please enter value from 0 to 100.');
      }
    }
  };

  getVolume() {
    console.log('Current volume is ' + this._volume);
  };

  vol(value) {
    if (value) {
      return this.setVolume(value);
    } else {
      return this.getVolume();
    }
  };
}
