import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
    @PrimaryGeneratedColumn('identity', {
        generatedIdentity: 'ALWAYS'
    })
    id: number;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;
}