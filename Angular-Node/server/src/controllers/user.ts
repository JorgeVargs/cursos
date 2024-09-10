import { Request, Response } from "express";
import bcrytp from 'bcrypt';
import { User } from "../models/user";
import jwt from 'jsonwebtoken';

export const newUser = async(req: Request, res: Response) => {
    const { username, password } = req.body

    const hashedPassword = await bcrytp.hash(password,10);

    //validamos si el usuario ya existe en la base de datos
    const user = await User.findOne({
        where: { username:username }
    });

    if(user){
        return res.status(400).json({
            msg:`Ya existe un usuario con el nombre ${username}`
        })
    }

    try {
        //guardamos usuario en la base de datos
        await User.create({
            username:username,
            password:hashedPassword
        })
    
        res.json({
            msg:`Usuario ${username} creado exitosamente`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Error al crear usuario',
            error:error
        })
    }
}



export const loginUser = async (req: Request, res: Response) => {
    const {username,password} = req.body;

   //Validar si el usuario existe en la base de datos
   const user:any = await User.findOne({
    where:{
        username:username
    }
   })

   if(!user){
    return res.status(400).json({
        msg:`No existe un usuario con el nombre ${username}`
    })
   }

   //Validamos password
   const passwordValid = await bcrytp.compare(password,user.password);

   if(!passwordValid){
    return res.status(400).json({
        msg:`La contraseña no es correcta`
    })
   }

   //Generamos token
   const token = jwt.sign({
    username:username,
   }, process.env.SECRET_KEY || 'pepito123',{
    expiresIn:'10000'
   });

   res.json(token)
}