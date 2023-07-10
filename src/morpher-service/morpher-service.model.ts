import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'words' })
export class morpherService extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  im: string;
  @Column({ type: DataType.STRING, allowNull: false })
  rod: string;
  @Column({ type: DataType.STRING, allowNull: false })
  dat: string;
  @Column({ type: DataType.STRING, allowNull: false })
  vin: string;
  @Column({ type: DataType.STRING, allowNull: false })
  tvor: string;
  @Column({ type: DataType.STRING, allowNull: false })
  predl: string;
}
