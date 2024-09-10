import { Sequelize } from "sequelize";

const sequelize = new Sequelize('angular-express-jwt','root','mysql',{
    host: 'localhost',
    dialect: 'mysql',
})


export default sequelize;