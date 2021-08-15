import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('projects')
export class Projects {
  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @Column({ name: 'url_img' })
  urlImg: string

  @Column()
  about: string

  @Column()
  functionalities: string

  @Column()
  technologies: string

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
