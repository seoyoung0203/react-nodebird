const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../models');
const passport = require('passport');

const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    // 내 정보 가져오기
});
router.post('/', async (req, res, next) => {
   try{
       console.log('회원 가입');

       const exUser = await db.User.findOne({
           where: {
               userId: req.body.userId,
           },
       });
       if(exUser) {
           // 200 : 성공, 300 : 리다이렉션 , 400 : 요청 오류 , 500 : 서버 오류
           return res.status(403).send('이미 사용중인 아이디 입니다.');
       }
       // 비밀번호 암호화 숫자가 커질 수록 해킹하기가 힘들어짐 -> 하지만 시간도 오래걸리므로 10 - 13사이를 많이 씀
       const hashedPassword = await bcrypt.hash(req.body.password, 12);
       const newUser = await db.User.create({
          nickname: req.body.nickname,
          userId: req.body.userId,
          password: hashedPassword,
       });
       console.log(newUser);
       return res.status(200).json(newUser); // send는 문자열을 보내는 것 json데이터를 보냄 ( 자바스크립트 객체 데이터 )
   } catch (e) {
       console.log(e);
       // return res.status(403).send(e);
       return next(e);
   }
});

router.get('/:id', (req, res) => {
    // 다른 사람의 정보 가져오기 , :id는 req.params.id로 가져올 수 있다. => /api/user/3
});
router.post('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('logOut 성공');
});
router.post('/login', (req, res, next) => {
    // local 파일의 done(null, false, {}) 에 들어가는 인자
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            // 비밀번호가 틀립니다. 정보가 옴
           return res.status(401).send(info.reason);
        }
        console.log('개박ㅂ가지라너라ㅓ아ㅣ러ㅣㄹ', req.login);
        return req.login(user, async (loginErr) => { // passport/index 의 serializeUser 가 실행됨
           if (loginErr) {
               return next(loginErr);
           }
           const filterUser = Object.assign({}, user.toJSON());
           delete filterUser.password;
           return res.json(filterUser);
        });
    })(req, res, next);
});
router.get('/:id/follow', (req, res) => {

});
router.post('/:id/follow', (req, res) => {

});
router.delete('/:id/follow', (req, res) => {

});
router.get('/:id/following', (req, res) => {

});
router.delete('/:id/following', (req, res) => {

});
router.get('/:id/posts', (req, res) => {

});