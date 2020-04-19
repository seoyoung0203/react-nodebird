module.exports = (sequelize, DataTypes) => {
   const Comment = sequelize.define('Comment', {
      commentId: {
          type: DataTypes.STRING(20),
          allowNull: false,
          unique: true,
      },
       commentText: {
          type: DataTypes.STRING(100),
           allowNull: false,
       },
   },/*{
       charset: 'utf8', // 한글 + 이모티콘
       collate: 'utf8-general_ci',
   }*/);

   Comment.associate = (db) => {
       db.Comment.belongsTo(db.User);
       db.Comment.belongsTo(db.Post);
   };

   return Comment;
};