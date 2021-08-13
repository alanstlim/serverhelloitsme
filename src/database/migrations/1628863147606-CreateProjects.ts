import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateProjects1628863147606 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'projects',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'url_img',
            type: 'varchar',
          },
          {
            name: 'about',
            type: 'varchar',
          },
          {
            name: 'functionalities',
            type: 'varchar',
          },
          {
            name: 'technologies',
            type: 'varchar',
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
    await queryRunner.dropTable('projects')
  }
}
