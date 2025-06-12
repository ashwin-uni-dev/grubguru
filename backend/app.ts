import express from 'express';
import session from 'express-session';
import cors from 'cors';
import FoodsRouter from './routes/foods';
import UsersRouter from './routes/users';
import EventsRouter from './routes/events';
import AuthRouter from './routes/auth';
import ReviewsRouter from './routes/reviews';
import { connectToDb } from './dbConfig';
import {errorHandler} from "./middleware/error";
import passport from './auth/passport';

connectToDb();

const isProd = process.env.NODE_ENV === 'production';
const app = express();

app.set('trust proxy', 1);
const allowedOrigins = ['http://localhost:3000', 'https://grubguru.vercel.app'];

const corsOptions = {
    origin: function (origin: any, callback: any) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, origin);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};

app.use(cors(corsOptions));
app.options(/(.*)/, cors(corsOptions));

app.use(express.json());
app.use(
    session({
        secret: process.env.SESSION_SECRET || 'supersecret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: isProd,
            httpOnly: true,
            sameSite: isProd ? 'none' : 'lax',
        },
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/foods', FoodsRouter);
app.use('/users', UsersRouter);
app.use('/events', EventsRouter);
app.use('/auth', AuthRouter);
app.use('/reviews', ReviewsRouter);

app.get('/', (req, res) => {
    res.send({ message: 'server is worsadjasdjking' })
})

app.use(errorHandler);

app.listen(3001, () => {})
export default app;