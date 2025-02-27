module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        email: {
            type: DataTypes.STRING,
            allowNull: false // Corrected from allowNULL to allowNull
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Users.associate = (models)=>{
        Users.hasMany(models.Likes,{
            onDelete:"cascade",
        });
    }
    return Users;
};
