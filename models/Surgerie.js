module.exports = (sequelize, DataTypes) => {
  const Surgerie = sequelize.define('Surgerie', {
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING
  });

  return Surgerie;
};