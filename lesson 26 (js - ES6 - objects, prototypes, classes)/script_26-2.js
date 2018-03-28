let player = {
  tracks: [],
  currentTrack: 0,
  volume: 50,
  maxVolume: 100,
  minVolume: 0,
  addTrack: (track) => {
    player.tracks.push(track);
  },

  deleteTrack: (track) => {
    let i = player.tracks.indexOf(track);
    player.tracks.splice(i, 1);
  },

  displayAllTracks: () => {
    for (let i = 0; i < player.tracks.length; i++) {
      console.log('Track ' + (i + 1) + '. ' + player.tracks[i]);
    }
  },

  displayCurrentTrack: () => {
    console.log(player.tracks[player.currentTrack]);
  },

  nextTrack: () => {
    if (player.currentTrack < player.tracks.length - 1) {
      player.currentTrack += 1;
    } else {
      return player.currentTrack;
    }
  },

  previousTrack: () => {
    if (player.currentTrack !== 0) {
      player.currentTrack -= 1;
    } else {
      return player.currentTrack;
    }
  },

  random: () => {
    let j = parseInt(Math.random() * 100);
    if (j <= player.tracks.length - 1 && j !== player.currentTrack) {
      player.currentTrack = j;
    } else {
      return player.random();
    }
  },

  increaseVolume: () => {
    if (player.volume < player.maxVolume) {
      player.volume += 5;
    } else {
      return player.volume;
    }
    player.displayVolume();
  },

  decreaseVolume: () => {
    if (player.volume > player.minVolume) {
      player.volume -= 5;
    } else {
      return player.volume;
    }
    player.displayVolume();
  },

  displayVolume: () => {
    console.log('Current volume is ' + player.volume);
  }
}
