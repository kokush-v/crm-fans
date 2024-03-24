import { Sequelize } from 'sequelize';
import { SQ } from 'src/config/config';
import User from 'src/models/user.seq.model';

class DatabaseService {
  constructor(
    private sequelize = new Sequelize(SQ.DATABASE, SQ.USERNAME, SQ.PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      logging: true,
    }),
  ) {}

  start() {
    this.initModels();
    this.sequelize
      .sync({ alter: true })
      .then(() => {
        console.log('Database synced');
      })
      .catch((err) => {
        console.error('Error syncing database:', err);
      });
  }

  getSequelize() {
    return this.sequelize;
  }

  initModels() {
    User.sync();
  }
}

export default new DatabaseService();
