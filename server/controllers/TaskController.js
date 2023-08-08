const database = require("../database/connection");
const path = require("path");
const basePath = path.join(__dirname, '../templates');

class TaskController {
    visualizarDestaques(request, response) {
        let query = "SELECT * FROM posts WHERE postHIGHLIGHT = 1 ORDER BY postID DESC LIMIT 0,2 INNER JOIN categories ON posts.postCATEGORY=categories.categoryID";
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
        let query = "SELECT * FROM posts WHERE postHIGHLIGHT = 0 ORDER BY postID DESC LIMIT 0,10 INNER JOIN categories ON posts.postCATEGORY=categories.categoryID";
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
        let query = "SELECT * FROM posts WHERE postID = ? INNER JOIN categories ON posts.postCATEGORY=categories.categoryID";
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