import express from 'express';
import FoodsRouter from './routes/foods';
import { connectToDb } from './dbConfig';

connectToDb();

const app = express();

app.use(express.json());
app.use('/foods', FoodsRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server listening on port ${port}.`));

export default app;