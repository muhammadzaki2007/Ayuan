module.exports = (sequelize, DataTypes) => {

    const overview = sequelize.define("overview", {
  
          id: {
  
            autoIncrement: true,
  
            type: DataTypes.BIGINT,
  
            allowNull: false,
  
            primaryKey: true
  
          },  
  
         overview: {
  
            type: DataTypes.STRING(100),
  
            allowNull: true
  
          },
    }, {
  
      sequelize,
  
      tableName: 'overview',
  
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
  
  
  
    return overview;
  
  }; 
  
  //blom tau