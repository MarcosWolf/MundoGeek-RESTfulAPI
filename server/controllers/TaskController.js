const database = require("../database/connection");
const path = require("path");
const basePath = path.join(__dirname, '../templates');

class TaskController {
    // Feed
    visualizarDestaques(request, response) {
        let query = `SELECT *
        FROM posts
           INNER JOIN categories ON posts.postCATEGORY = categories.categoryID
           INNER JOIN authors ON posts.postAUTHOR = authors.authorID
        WHERE postHIGHLIGHT = 1
        ORDER BY postID DESC
        LIMIT 0,2`;
        database.query(query, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log({result});
                response.send(result);
            }
        });
    }
    
    visualizarUltimosPosts(request, response) {
        const offset = Number(request.params.offset);
        const limit = Number(request.params.limit);

        console.log(`O Offset é: ${offset} e Limit: ${limit}`);
        let query = `SELECT *
                     FROM posts
                        INNER JOIN categories ON posts.postCATEGORY = categories.categoryID
                        INNER JOIN authors ON posts.postAUTHOR = authors.authorID
                    WHERE postHIGHLIGHT = 0
                    ORDER BY postID DESC
                    LIMIT ?,?`;
        database.query(query, [offset, limit], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log({result});
                response.send(result);
            }
        });
    }

    visualizarTopViews(request, response) {
        let query = `SELECT *
                     FROM posts
                        INNER JOIN categories ON posts.postCATEGORY = categories.categoryID
                        INNER JOIN authors ON posts.postAUTHOR = authors.authorID
                    ORDER BY postID DESC
                    LIMIT 0,5`;
        database.query(query, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log({result});
                response.send(result);
            }
        });
    }

    visualizarUltimosReviews(request, response) {
        let query = `SELECT *
                     FROM posts
                        INNER JOIN categories ON posts.postCATEGORY = categories.categoryID
                        INNER JOIN authors ON posts.postAUTHOR = authors.authorID
                    WHERE postSECTION = 1
                    ORDER BY postID DESC
                    LIMIT 0,5`;
        database.query(query, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log({result});
                response.send(result);
            }
        });
    }


    // Post
    visualizarPost(request, response) {
        const { id } = request.params;
        console.log(`O ID é ${id}`);
        let query = `SELECT *
                     FROM posts
                        INNER JOIN categories ON posts.postCATEGORY = categories.categoryID
                        INNER JOIN authors ON posts.postAUTHOR = authors.authorID
                     WHERE postID = ?`;
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