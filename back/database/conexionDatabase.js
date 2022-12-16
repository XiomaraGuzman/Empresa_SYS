import {Sequelize} from 'sequelize'


const dataBase = new Sequelize('empresasys', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

 export default dataBase