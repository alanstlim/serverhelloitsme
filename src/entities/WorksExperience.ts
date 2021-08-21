import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('works_exp')
export class WorksExperience {
  @PrimaryColumn()
  readonly id: string

  @Column()
  role: string

  @Column()
  enterprise: string

  @Column()
  admission: Date

  @Column()
  demission: Date

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
