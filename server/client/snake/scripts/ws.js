const socket = io('http://192.168.1.5:5000');

socket.on('up', data => {
    console.log(data);
    if (backtracking('dy')) {
        snake.dy = -grid;
        snake.dx = 0;
    }
});
 
socket.on('down', data => {
    console.log(data);
    if (backtracking('dy')) {
        snake.dy = grid;
        snake.dx = 0;
    }
});

socket.on('left', data => {
    console.log(data);
    if (backtracking('dx')) {
        snake.dx = -grid;
        snake.dy = 0;
    }
}); 

socket.on('right', data => {
    console.log(data);
    if (backtracking('dx')) {
        snake.dx = grid;
        snake.dy = 0;
    }
});

const backtracking = axis => snake[axis] === 0 ? true : false;