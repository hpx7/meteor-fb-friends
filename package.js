Package.describe({
  name: 'hpx7:fb-friends',
  version: '0.0.1',
  summary: 'Get a user\'s facebook friends',
  git: 'https://github.com/hpx7/meteor-fb-friends.git',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['underscore', 'http']);
  api.addFiles('fb-friends.js');
  api.export('FriendIDs');
});
