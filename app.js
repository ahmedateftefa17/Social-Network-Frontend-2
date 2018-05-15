/**
 *
 *
 *
 */
const
  express       = require('express'),
  bodyParser    = require('body-parser'),
  cookieParser  = require('cookie-parser')
  path          = require('path'),
  config        = require('./config'),
  app           = express();


/**
 *
 *
 *
 */
  app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(cookieParser())
    .listen(config.port, () => {
      console.log(`App Is Running in Port ${config.port}`)
    });

/**
 *
 *
 *
 */
const publicRoute = require('./routes/public');
const userRoute = require('./routes/user');
const postRoute = require('./routes/post');
const groupRoute = require('./routes/group');

app.use('/users', userRoute);
app.use('/public', publicRoute);
app.use('/posts', postRoute);
app.use('/groups', groupRoute);
