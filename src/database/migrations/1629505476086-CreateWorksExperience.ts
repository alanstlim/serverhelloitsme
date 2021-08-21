import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateWorksExperience1629505476086 implements MigrationInterface {
  name = 'CreateWorksExperience1629505476086'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'works_exp',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'role',
            type: 'varchar',
          },
          {
            name: 'enterprise',
            type: 'varchar',
          },
          {
            name: 'admission',
            type: 'timestamp',
          },
          {
            name: 'demission',
            type: 'timestamp',
            default: null,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('works_exp')
  }
}
