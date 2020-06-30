import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    price: number;

    @Column({ nullable: true })
    img: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ nullable: true })
    category: string;

    @Column({ nullable: true })
    country: string;

}