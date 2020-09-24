import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {User} from "../entity/User";
import {validate} from 'class-validator'; // SE AGREGA ESTA LIBRERIA

export class UserController {
    static getAll = async (req: Request, res: Response)=>{
        const userRepository = getRepository(User);
        let users;
        try {
           users = await userRepository.find();
        } catch (e) {
           res.status(400).json({message: 'No hay resultado'});
        }

        if (users.length > 0) {
            res.send(users);
        }else{
            res.status(400).json({message: 'No hay resultado'});
        }
    }

    static getById = async(req: Request, res: Response) => {
        const {id} = req.params;
        const userRepository = getRepository(User);

        try{
            const user = await userRepository.findOneOrFail(id);
            res.send(user);
        }catch(e){
            res.status(404).json({message: 'No hay resultado'});
        }
    }

    static newUser = async(req: Request, res: Response) => {
        const {username, password, apellidos, role, correo, telefono, direccion} = req.body;
        const user = new User();
        // SE GENERA ERROR POR QUE EN LA INSTANCIA NO SE DEFINIDO ESA VARIABLE
        user.username = username; // el primer es que esta declarando aca y el segundo es el que llega de front
        user.password = password;
        user.role = role;
        user.apellidos = apellidos;
        user.correo = correo;
        user.telefono = telefono;
        user.direccion = direccion;

        // VALIDATE
        const validation1 = {validationError:{target: false, value: false}};
        const errors = await validate(user, validation1);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }
        // TODO: HASH PASSWORD
        const userRepository = getRepository(User);
        try{
            user.hashPassword(); // SE AGREGA ESTE
            await userRepository.save(user);
        }catch(e){
            return res.status(409).json({message: 'Usuario ya existe'});
        }
        // Todo OK
        res.send('Usuario Creado');
    }

    static editUser = async(req: Request, res: Response) => {
        let user;
        const {id} = req.params;
        const {username, role, nombres, password, apellidos, correo, telefono, direccion} = req.body;

        const userRepository = getRepository(User);
        // try get user
        try{
            user = await userRepository.findOneOrFail(id);
            user.username = username;
            user.role = role;
            user.nombres = nombres;
            user.password = password;
            user.apellidos = apellidos;
            user.email = correo;
            user.telefono = telefono;
            user.direccion = direccion;
        }catch (e){
            return res.status(404).json({message: 'Usuario No encontrado'});
        }
        const validation1 = {validationError: {target: false, value: false}};
        const errors = await validate(user, validation1);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }
        // try to SAVE user
        try{
            await userRepository.save(user);
        }catch(e){
            return res.status(409).json({message: 'Usuario ya existe'});
        }
        res.status(201).json({message: 'Usuario Actualizado'});
    }

    static deleteUser = async (req: Request, res: Response) => {
        const {id} = req.params;
        const userRepository = getRepository(User);
        let user: User;

        try{
            user = await userRepository.findOneOrFail(id);
        }catch(e){
            return res.status(404).json({message: 'Usuario no Encontrado'});
        }
        // Eliminar de la BD
        userRepository.delete(id);
        res.status(201).json({message: 'Usuario Eliminado'});
    }
}
export default UserController;
