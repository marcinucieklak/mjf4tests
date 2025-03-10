import {
  BelongsTo,
  Column,
  CreatedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Group } from './group.model';
import { User } from './user.model';

@Table({ tableName: 'user-groups' })
export class UserGroup extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  public id: number;

  @ForeignKey(() => Group)
  @Column({ allowNull: false })
  groupId: number;

  @ForeignKey(() => User)
  @Column({ allowNull: false })
  userId: number;

  @BelongsTo(() => Group, 'groupId')
  group: Group;

  @BelongsTo(() => User, 'userId')
  user: User;

  @CreatedAt public createdAt: Date;
  @UpdatedAt public updatedAt: Date;
}
