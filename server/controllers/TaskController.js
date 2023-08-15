const database = require("../database/connection");
const path = require("path");
const basePath = path.join(__dirname, '../templates');

class TaskController {
    // Feed
    visualizarDestaques(request, response) {
        let query = `SELECT *
        FROM posts
        INNER JOIN categories ON posts.postCATEGORY = categories.categoryID
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
        let query = `SELECT p.*, COUNT(v.postID) AS num_views
                    FROM posts AS p
                        LEFT JOIN post_views AS v ON p.postID = v.postID
                    GROUP BY p.postID
                    ORDER BY num_views DESC
                    LIMIT 5;`;
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

    // Posts relacionados
    visualizarPostsRelacionados(request, response) {
        const { id } = request.params;
        let query = `SELECT DISTINCT p.postID, p.postTITLE, p.postTHUMBNAIL, c.categoryNAME
                    FROM posts p
                        JOIN post_tags pt ON p.postID = pt.postID
                        JOIN tags t ON pt.tagID = t.tagID
                        INNER JOIN categories c ON p.postCATEGORY = c.categoryID
                    WHERE t.tagID IN (
                        SELECT tagID
                        FROM post_tags
                        WHERE postID = ?
                        )
                    AND p.postID <> ?
                    ORDER BY p.postDATE DESC
                    LIMIT 0,6`;
        database.query(query, [id, id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log({result});
                response.send(result);
            }
        })
    }




    // Registro
    async registrarVisualizacao(request, response) {
        const { id } = request.params;

        try {
            await registerView(id);
            return response.status(200).json({message: 'View registered'});
        } catch (err) {
            console.error(err);
            return response.status(500).json({message: 'Error ocurred'});
        }
    }
}

const registerView = (id) => {
    return new Promise((resolve, reject) => {
        let query = `INSERT INTO
                     post_views
                        (postID)
                     VALUES
                        (?)`;
        database.query(query, [id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = new TaskController();