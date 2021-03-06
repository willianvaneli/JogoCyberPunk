import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { Personagem } from './Personagem.entity'

@Entity()
export class Jogador {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  nome: string;

  @Column()
  sexo: string;

  @Column()
  apelido: string;

  @OneToOne(type => Personagem, personagem => personagem.jogador)
  personagem: Personagem;

}