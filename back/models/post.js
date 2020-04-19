module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
       postId: {
           type: DataTypes.STRING(20),
           allowNull: false,
           unique: true,
       },
        content: {
           type: DataTypes.STRING(200), // 매우 긴 글
            allowNull: false,
        },

    },/*{
        charset: 'utf8',
        collate: 'utf8-general_ci',
    }*/);

    Post.associate = (db) => {
        db.Post.belongsTo(db.User); // Post 테이블에 userId를 저장
        db.Post.hasMany(db.Image);
        db.Post.hasMany(db.Comment);
        db.Post.belongsTo(db.Post, { as: 'Reply' });
        db.Post.belongsToMany(db.User, { through: 'Likers' });
    };

    return Post;
};