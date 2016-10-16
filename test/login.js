var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
client
    .init()
    .url('http://localhost:8000/')
    .setValue('[name="email"]', 'invalid@user.com')
    .setValue('[name="password"]', 'hunter2')
    .submitForm('form')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    .setValue('[name="email"]', 'valid@user.com')
    .setValue('[name="password"]', 'hunter2')
    .submitForm('form')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    .end();