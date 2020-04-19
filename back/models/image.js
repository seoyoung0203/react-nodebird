module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image' , {
     ImageId: {
         type: DataTypes.STRING(20),
         allowNull: false,
         unique: true,
     },
      imagePath: {
         type: DataTypes.STRING(200),
          allowNull: false,
      },
  }, /*{
      charset: 'utf8',
      collate: 'utf8-general_ci',
  }*/);

  Image.associate = (db) => {
      db.Image.belongsTo(db.Post);
  };

  return Image;

};