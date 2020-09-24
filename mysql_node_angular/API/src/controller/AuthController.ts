import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { User } from './../entity/User';
// import { config } from 'process';
import * as jwt from 'jsonwebtoken';
import config from '../conf/conf';
import { validate } from 'class-validator';

class AuthController{
    static login = async(req: Request, res: Response)=>{
        const {username, password} = req.body;

        if (!(username && password)) {
            return res.status(400).json({message: 'username & password are required'});
        }

        const userRepository = getRepository(User);
        let user: User;

        try{
            user = await userRepository.findOneOrFail({where:{username}});
        }catch(e){
            return res.status(400).json({message:'Username or password incorrect'});
        }

        // CHECK PASSWORD
        if (!user.checkPassword(password)) {
            return res.status(400).json({message:'Username or password incorrect!'});
        }
        //TOKEN
        const token = jwt.sign({userId: user.id, username: user.username},config.jwtSecret,{expiresIn:'1h'});

        // res.send(user);  EN VEZ DE ENVIAR EL USUARIO COMPLETO ENVIAMOS SOLAMENTE EL TOKEN
        res.json({message: 'OK',token});
    }

    static changePassword = async(req:Request, res: Response)=>{
        const {userId} = res.locals.jwtPayload;
        const {oldPassword, newPassword} = req.body; // password antiguo, Nuevo

        if (!(oldPassword && newPassword)) {
            res.status(400).json({message:'Antigua o Nueva Password son requeridos'});
        }
        const userRepository = getRepository(User);
        let user:User;

        try {
            user = await userRepository.findOneOrFail(userId);
        } catch (e) {
            res.status(400).json({message:'somenthing goes wrong'});
        }
        // EN CASO QUE SI SE PUEDE RECUPERAR EL USUARIO DEL ANTERIO TRY CATCH
        if (!user.checkPassword(oldPassword)) {
            return res.status(401).json({message:'Problemas de autenticacion de la password anterior, por favor revisar'});
        }
        // EN CASO QUE SI CUMPLE LA CONDICIONAL ANTERIOR
        user.password=newPassword;
        const validation1 = {validationError:{target:false,value:false}};
        const errors = await validate(user,validation1);

        if (errors.length>0) {
            return res.status(400).json(errors);
        }
        // EN CASO QUE TODO VA BIEN REALICE LO SIGUIENTE
        user.hashPassword();
        userRepository.save(user);

        res.json({message:'Password change'});
    }
}
export default AuthController;
