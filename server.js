import config from './config';
import express from 'express';
import apiRouter from "./api";

const server = express();

server.get('/', (req,res) => {
    res.render("index",{
        content: 'Hello express from EJS!'
    });
});

server.set("view engine", 'ejs');
server.use('/api',apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port)
})
