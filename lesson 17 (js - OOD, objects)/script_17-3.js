let tv = {};

tv.currentChannel = 1;

tv.nextChannel = () => {
  tv.currentChannel += 1;
  };

tv.previousChannel = () => {
  tv.currentChannel -= 1;
  };

tv.setChannel = (number) => {
  tv.currentChannel = number;
  };
