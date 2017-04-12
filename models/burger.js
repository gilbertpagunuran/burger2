module.exports = function(sequelize, DataTypes) {

	var Burger = sequelize.define("Burger", {
	  burger_name: DataTypes.STRING,
	  create_tmstmp: DataTypes.DATE,
	  devoured: { type: DataTypes.BOOLEAN,
	      		  defaultValue: false   
				}

	},{timestamps: false});
	return Burger; 
};
