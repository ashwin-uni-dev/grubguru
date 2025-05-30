import express from 'express';
import cors from 'cors';
import FoodsRouter from './routes/foods';
import UsersRouter from './routes/users';
import { connectToDb } from './dbConfig';
connectToDb();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/foods', FoodsRouter);
app.use('/users', UsersRouter)

app.get('/', (req, res) => {
    res.send({ message: 'server is worsadjasdjking' })
})

export default app;