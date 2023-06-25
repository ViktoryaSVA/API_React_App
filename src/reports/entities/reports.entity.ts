import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ReportsEntity {
    @PrimaryGeneratedColumn('identity', {
        generatedIdentity: 'ALWAYS'
    })
    id: number;

    @Column()
    userAgent: string;

    @Column()
    category: string;

    @Column()
    countryid: string;

    @Column()
    creationdate: string;

    @Column()
    clientid: string;

    @Column()
    subcategory: string;
}