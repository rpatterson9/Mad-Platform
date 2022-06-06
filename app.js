const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash');
const csrf = require('csurf');
const helmet = require('helmet');
const compression = require('compression');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

dotenv.config();

const mainRoutes = require('./routes/main');
// const detailRoutes = require('./routes/detail');
const dashboardRoutes = require('./routes/dashboard');
const charitiesController = require('./routes/charities');
// const commentRoutes = require('./routes/comment');
// const authRoutes = require('./routes/auth');
const errorController = require('./controllers/error');

const PORT = process.env.PORT || 80;
const MONGODB_URI = process.env.MONGO_URL;
const SECRET = process.env.SECRET;

const app = express();
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    store: store // store sessions in MongoDB with connect-mongodb-session
}));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static('public'));
app.use('/admin',express.static('public/admin'));
app.use(flash());
app.use(csrf({}));

app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    res.locals.isAuthenticated = req.session.isLoggedIn;
    next();
});

app.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    }
});

app.use(mainRoutes);
app.use(dashboardRoutes);
app.use(charitiesController);

app.get('/error/500', errorController.get500);

app.get('/error/404', errorController.get404);

// app.use((error, req, res, next) => {
//     res.status(500).render('500', {
//         pageTitle: 'Error',
//         isAuthenticated: req.session.isLoggedIn
//     });
// });

mongoose
    .connect(MONGODB_URI)
    .then(result => {
        app.listen(PORT, process.env.IP, () => {
            console.log(`App listening on port ${PORT}.`);
        });
    })
    .catch(err => console.log(err));
