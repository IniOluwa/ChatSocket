// Initilize Dependencies
const
  express = require('express'),
  app = express();
  http = require('http').Server(app);
  path = require('path'),
  bodyParser = require('body-parser');
  logger = require('morgan');


// View Engine & Views
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

// Static Files
app.use(express.static(__dirname + '/public'));

// Server Port
app.set('port', process.env.PORT || 3000);

// Body Parser To Enable Getting Post Data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Server Logs
app.use(logger('dev'));

// Landing
app.get('/', (req, res) => {
  res.render('login.html');
});

// Server Listening
app.listen(app.get('port'), () => {
  console.log("Server Listening At Port " + app.get('port'));
});
