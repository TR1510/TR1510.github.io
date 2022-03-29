var userFeed = new Instafeed({
  get: 'user',
  userId: '52618018197',
  target: "instafeed",
  resolution: 'standard_resolution',
  limit: 9,
  accessToken: 'IGQVJYMlpTdzZAxTXl5WTQtRFNEdUF4UDRvTHFZATGhNeDQxS2VMVGxEUUFESHhtVV9fdVRsaGFOTTRPUFB1MnFlOEoyQVBud1ZAJT09WdGdmUElNOWpNMTFyUTczUGEzWU1jemY4ejVvcFBkYmVOUUhDaAZDZD',
  template: '<a href="{{link}}" target="_blank"><div class="insta_block"><div class="insta_overlay"><img class="insta_profile" src="images/PNG/profile_picture.png"><p class="h13">{{caption}}</p></div><img class="insta_post" src="{{image}}" /></div></a>'
});
userFeed.run();
