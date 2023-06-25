import { MigrationInterface, QueryRunner } from "typeorm";

export class Generate1687604524459 implements MigrationInterface {
    name = 'Generate1687604524459'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reports_entity" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "userAgent" character varying NOT NULL, "category" character varying NOT NULL, "countryid" character varying NOT NULL, "creationdate" character varying NOT NULL, "clientid" character varying NOT NULL, "subcategory" character varying NOT NULL, CONSTRAINT "PK_f8a2f1636fabb658e47bb430c71" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "reports_entity"`);
    }

}
