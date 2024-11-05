import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Chat } from '../../chats/entity/chat.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Chat, (message) => message.user)
  chats: Chat[];
}