var userFeed = new Instafeed({
  get: 'user',
  userId: '52618018197',
  target: "instafeed",
  resolution: 'standard_resolution',
  accessToken: 'IGQVJVVXJrbHpqUnZASM1BZAZA3gwQzRQd09yalpzWGhjcDhEQk5GcG1Oekh0Y0dzeVlTZAGVnUnY3d0RfdHdSTVZAKek9sNDd5M21FLVgtV25IeTdzemNVdlRmOHZAvb1Q2QUVKOWZA5bkdpbUduQ1RhLVphTgZDZD',
  template: '<a href="{{link}}" target="_blank"><img class="insta_post" src="{{image}}" /></a>'
});
userFeed.run();
