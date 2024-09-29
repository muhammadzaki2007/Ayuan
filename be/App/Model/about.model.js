module.exports = (sequelize, DataTypes) => {

    const aboutme = sequelize.define("aboutme", {
  
          id: {
  
            autoIncrement: true,
  
            type: DataTypes.BIGINT,
  
            allowNull: false,
  
            primaryKey: true
  
          },  
  
         name: {
  
            type: DataTypes.STRING(50),
  
            allowNull: true
  
          },
  
          description: {
  
            autoIncrement: false,
  
            type: DataTypes.TEXT,
  
            allowNull: false,
  
            primaryKey: false
  
          },
    }, {
  
      sequelize,
  
      tableName: 'aboutme',
  
      timestamps: true,
  
      indexes: [
  
        {
  
          name: "PRIMARY",
  
          unique: true,
  
          using: "BTREE",
  
          fields: [
  
            { name: "id" },
  
          ]
  
        },
  
      ]
  
    });
  
  
  
    return aboutme;
  
  }; 
  
  //blom tau