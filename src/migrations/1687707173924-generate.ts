import { MigrationInterface, QueryRunner } from "typeorm";

export class Generate1687707173924 implements MigrationInterface {
    name = 'Generate1687707173924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_f92b3d839b53b5c4ff75bec5945"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "bossId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "role" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "bossId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_f92b3d839b53b5c4ff75bec5945" FOREIGN KEY ("bossId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_f92b3d839b53b5c4ff75bec5945"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "bossId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "bossId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD "role" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_f92b3d839b53b5c4ff75bec5945" FOREIGN KEY ("bossId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
