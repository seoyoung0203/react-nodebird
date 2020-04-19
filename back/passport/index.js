const passport = require('passport');
const db = require('../models');
const local = require('./local');

module.exports = () => {

    // 쿠키랑 연관된 아이디만 찾고
    passport.serializeUser((user, done) => { // 서버쪽에 [{ id : 3 , cookie: 'dldkf' }]
        return done(null, user.id);
    });

    // 그 id를 가지고 유저 정보를 찾는 것
    passport.deserializeUser(async (id, done) => {
       try {
           const user = await db.User.findOne({
               where: { id },
           });
           return done(null, user); // req.user 에 저장됨
       } catch (e) {
           console.error(e);
           return done(e);
       }
    });

    local();
};