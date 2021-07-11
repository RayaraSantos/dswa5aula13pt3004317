var http = require('http');
var app = require('./config/express')();
const url = 'mongodb+srv://rayara:Acessomongo123@cluster0.dw3ny.mongodb.net/test';
require('./config/database.js')(url);
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});