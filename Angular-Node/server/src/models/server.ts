import express, { Application } from 'express';
import routesProduct from '../routes/product';
import routesUser from '../routes/user';
import { Product } from './product';
import { User } from './user';
import cors from 'cors';

export class Server{
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '30001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
        console.log(process.env.PORT);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        })
    }


    routes(){
        this.app.use('/api/products', routesProduct);
        this.app.use('/api/users',routesUser);
    }

    middlewares(){
        //parseo body
        this.app.use(express.json())

        //cors
        this.app.use(cors())
    }

    async dbConnect(){
        try{
            await Product.sync();
            await User.sync();

            console.log('Conexión exitosa')
        }catch(error){
            console.error('No se puede conectar a la base de datos: ',  error)
        }
    }
}