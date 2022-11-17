import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'games' })
export class GameEntity {
  @PrimaryGeneratedColumn()
  gameId: number;

  @Column()
  title: string;

  @Column()
  platform: string;

  @Column()
  score: number;

  @Column()
  genre: string;

  @Column()
  editors_choice: string;
}
