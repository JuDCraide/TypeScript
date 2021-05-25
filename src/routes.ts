import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
    const user = createUser({
        name: 'Diego',
        email: 'diego@rocketseat.com.br',
        password: '123456',
        techs: [
            'Node.js',
            'ReactJS',
            { title: 'Javascript', experience: 100 },
            { title: 'React Native', experience: 50 }
        ]
    });

    return res.json({ message: 'Hello World' });
}