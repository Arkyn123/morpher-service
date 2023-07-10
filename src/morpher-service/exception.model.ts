import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'exceptions' })
export class exceptionService extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  exception: string;
}
