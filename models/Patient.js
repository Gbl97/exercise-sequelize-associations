module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    fullname: DataTypes.STRING
  });

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, {
      foreignKey: "plan_id", as: "plans"
    });
  };

  return Patient;
};