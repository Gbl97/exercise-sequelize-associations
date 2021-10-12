module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE
  },
  {
    timesstamps: false 
  }
  );

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient, {
      foreignKey: "plan_id", as: "patients"
    });
  };

  return Plan;
};