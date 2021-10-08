module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE
  },
  {
    timesstamps: false 
  }
  );

  return Plan;
};