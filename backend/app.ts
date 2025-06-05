import express from 'express';
import session from 'express-session';
import cors from 'cors';
import FoodsRouter from './routes/foods';
import UsersRouter from './routes/users';
import EventsRouter from './routes/events';
import AuthRouter from './routes/auth';
import { connectToDb } from './dbConfig';
import {errorHandler} from "./middleware/error";
import passport from './auth/passport';

connectToDb();

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'https://grubguru.vercel.app'],
    credentials: true
}));
app.use(
    session({
        secret: 'supersecret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: Boolean(process.env.SECURE_COOKIE || 'false') ,
            httpOnly: true,
            sameSite: 'lax',
        }
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/foods', FoodsRouter);
app.use('/users', UsersRouter);
app.use('/events', EventsRouter);
app.use('/auth', AuthRouter);

app.get('/', (req, res) => {
    res.send({ message: 'server is worsadjasdjking' })
})

app.use(errorHandler);

app.listen(3001, () => {})
export default app;