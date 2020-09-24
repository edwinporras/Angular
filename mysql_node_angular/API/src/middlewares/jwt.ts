import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { STATUS_CODES } from 'http'; // ESTO SE GENERA AUTOMATICAMENTE
import config from '../conf/conf';
import conf from '../conf/conf';

export const checkJwt =(req: Request, res: Response, next: NextFunction)=>{
    const token = <string>req.headers['auth']; // auth --> puede ser llamado como quiera
    let jwtPayload;

    try{
        jwtPayload = <any>jwt.verify(token, conf.jwtSecret); // MODIFICACION 1
        res.locals.jwtPayload = jwtPayload;
    }catch(e){
        return res.status(401).json({message:'No autorizado'});
    }

    const {userId, username}=  jwtPayload;

    const newtoken = jwt.sign({userId,username},conf.jwtSecret); // MODIFICACION 2 
    res.setHeader('token',newtoken);
    // LLAMAR EL SIG TOKEN
    next();
}