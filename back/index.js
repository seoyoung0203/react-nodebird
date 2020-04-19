const express = require('express');
const morgan = require('morgan');
const db = require('./models');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
const passportConfig = require('./passport');

const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');

dotenv.config();
const app = express();
db.sequelize.sync(); // 코드에 따라 테이블 생성
passportConfig();

/*app.get('/', (req, res) => {
   res.send('Hello server');
});

app.get('/about', (req, res) => {
    res.send('Hello about');
});*/

app.use(morgan('dev')); // 요청에 대해서 로그를 찍음.
app.use(cors({
   origin: true,
   credentials: true
})); // 서버와 프론트의 주소가 다를경우에도 허락해주는 역할

// form으로 넘어온 데이터를 처리하기 위해 필요한 코드
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser('process.env.COOKIE_SECRET'));
app.use(expressSession({
   resave: false, // 매번 새션 강제 저장
   saveUninitialized: false, // 빈 값도 저장
   secret: process.env.COOKIE_SECRET,
   cookie: {
      httpOnly: true, // 자바스크립트로 쿠키에 접근을 못함
      secure: false, // https를 쓸 때 true
   },
   name: 'grrfg',
}));
// 로그인 정보
app.use(passport.initialize());
app.use(passport.session()); // 순서 중요

// API : 다른 서비스가 내 서비스의 기능을 실행 할 수 있게 열어둔 창구.
app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);

app.listen(8081, () => {
   console.log('server is running on localhost: 8081');
});