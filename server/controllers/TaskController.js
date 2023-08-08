const database = require("../database/connection");
const path = require("path");
const basePath = path.join(__dirname, '../templates');

class TaskController {
    visualizarDestaques(request, response) {
        let query = "SELECT * FROM posts WHERE highlight = 1 ORDER BY id DESC LIMIT 0,2";
        database.query(query, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log({result});
                response.send(result);
            }
        });
    }
    
    visualizarPosts(request, response) {
        let query = "SELECT * FROM posts WHERE highlight = 0 ORDER BY id DESC LIMIT 0,10";
        database.query(query, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log({result});
                response.send(result);
            }
        });
    }

    visualizarPost(request, response) {
        const { id } = request.params;
        console.log(`O ID é ${id}`);
        let query = "SELECT * FROM posts WHERE id = ?";
        database.query(query, [id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log({result});
                response.send(result);
            }
        })
    }
}

module.exports = new TaskController();