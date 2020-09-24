import {Entity, PrimaryGeneratedColumn, Unique, CreateDateColumn, UpdateDateColumn, Column} from "typeorm"; //add 1
import {MinLength, IsNotEmpty, IsEmail} from 'class-validator'; // se agregan validaciones
import * as bcrypt from 'bcryptjs'; // encriptador password

@Unique(['username']) // add 2
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    // CON ESTO SE CORRIGUE EL PRIMER ERROR
    @Column()
    @IsNotEmpty()
    username: string;

    // CON ESTO SE CORRIGUE EL SEGUNDO ERROR
    @Column()
    @MinLength(6)
    @IsNotEmpty()
    password: string;

    // CON ESTO SE CORRIGUE EL TERCER ERROR
    @Column()
    @IsNotEmpty()
    role: string;


    @Column()
    @IsNotEmpty()
    apellidos: string;

    @Column()
    @IsNotEmpty()
    telefono: number;

    @Column()
    correo: string;

    @Column()
    @IsNotEmpty()
    direccion: string;

    // CUANDO SE CREO EL USUARIO
    @Column()
    @CreateDateColumn()
    createAt: Date;

    // CUANDO SE MODIFICO EL USUARIO
    @Column()
    @UpdateDateColumn()
    updateAt: Date;

    //ENCRIPTAR Y DESENCRIPTAR PASSWORD
    hashPassword():void{
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password,salt);
    }

    checkPassword(passw:string):boolean{
        return bcrypt.compareSync(passw,this.password)
    }
}
