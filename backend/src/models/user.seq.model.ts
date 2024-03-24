import { DataTypes, Model } from 'sequelize';
import sequelize from 'src/db/sequelize';
import { CreateUserDto } from 'src/users/user.dto';

class User extends Model implements CreateUserDto {
  id!: number;
  email!: string;
  userName!: string;
  password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    userName: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: sequelize.getSequelize(),
    modelName: 'User',
  },
);

export default User;
