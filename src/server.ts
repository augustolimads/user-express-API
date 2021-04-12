import express from 'express';
import routes from './routes';
import cors from 'cors';
import path from 'path';

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes);

app.listen(port,() => {
    console.log(`Server running on port: http://localhost:${port}`)
});
