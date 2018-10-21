import express from 'express';
import http from 'http';
import io from 'socket.io';

const app = express();
const server = app.listen(5000);
const _http = http.Server(app);
const _io = io.listen(server);

// // cors, json, static, urlencoded
app.use(express.static(__dirname + '/client'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8100");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

//app.get('/', (req, res) => res.redirect('./snake'))


/* SOCKET IO CONNECTION TEST*/
_io.on('connection', socket => {
    console.log('connectedddd!!!');
    socket.on('disconnect', () => {
        console.log('disconnectedd')
        _io.emit('disconnect bitch');
    });

    socket.on('hello', () => {
        console.log('hello mofockers')
        _io.emit('hello from socket.io :)');
    })
});



/*const server = app.listen((process.env.PORT || 5000), () => {
    let port = server.address().port;
    console.log(`Server is listenning on port ${port}`);
});*/