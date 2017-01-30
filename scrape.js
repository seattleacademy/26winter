var Xray = require('x-ray');
var x = Xray();

x('https://news.google.com/', '.esc-lead-snippet-wrapper')(function(err, result) {
    console.log(result);
});
