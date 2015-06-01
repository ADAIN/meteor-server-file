Package.describe({
  name: 'adain:meteor-server-file',
  summary: 'Meteor server side file manager.',
  version: '0.0.1',
  git: 'https://github.com/ADAIN/meteor-server-file.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.addFiles('ServerFileManager.js', 'server');
  api.export('ServerFileManager', 'server');
});