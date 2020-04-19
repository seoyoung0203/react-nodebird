module.exports = (sequelize, DataTypes) => {

    // 테이블 명 -> 대문자로 , 자동으로 데이터 생성일과 수정일을 저장해줌
    const User = sequelize.define('User', { // 테이블 명은 자동으로 users로 바뀜
        nickname: {
            type: DataTypes.STRING(20),
            allowNull: false, // 필수 값
        },
        userId: {
          type: DataTypes.STRING(20),
          allowNull: false,
          unique: true, // 고유한 값 겹치면 x
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, /*{
        charset: 'utf8',
        collate: 'utf8-general_ci',
        // 한글 저장 가능
    }*/);

    User.associate = (db) => {
        // 관계를 적어주는 곳 ex) 다대다, 일대다 등등
        db.User.hasMany(db.Post, { as: 'Post' }); // 사람 한명이 여러개 게시글 가능, as를 통해 구별
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' }); // belongsToMany는 되도록 as를 넣어주면 좋음
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers' }); // through는 다대다의 중간테이블 역할
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings' });
    };

    return User;
};