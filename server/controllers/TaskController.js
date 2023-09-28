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
        const tagID = request.params.tagID ? Number(request.params.tagID) : null;
      
        console.log(`Offset: ${offset}, Limit: ${limit}, TagID: ${tagID}`);
      
        let query = `
          SELECT *
          FROM posts`;
      
        if (tagID !== null && !isNaN(tagID)) {
          // Use EXISTS para verificar a existência de registros na tabela post_tags
          query += `
            WHERE EXISTS (
              SELECT 1
              FROM post_tags
              WHERE post_tags.postID = posts.postID AND post_tags.tagID = ?
            )`;
        } else {
            query += `
                WHERE postHIGHLIGHT = 0`;
        }
      
        query += ` ORDER BY postID DESC LIMIT ?,?`;
      
        const queryParams = tagID !== null && !isNaN(tagID) ? [tagID, offset, limit] : [offset, limit];
      
        database.query(query, queryParams, (err, result) => {
          if (err) {
            console.error(err);
            response.status(500).send(`Erro ao buscar posts: ${err.message}`);
          } else {
            if (result.length === 0) {
                response.status(404).json({ mensagem: "Nenhum post foi encontrado." });
                console.log("Erro 404");
            } else {
                response.send(result);
            }
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

    // Tags
    visualizarTags(request, response) {
        const { id } = request.params;
        console.log(`O ID é ${id}`);
        let query = `SELECT t.tagNAME, t.tagID
                     FROM tags t
                         JOIN post_tags pt ON t.tagID = pt.tagID
                     WHERE pt.postID = ?`;
        database.query(query, [id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log({result});
                response.send(result);
            }
        })
    }

    visualizarTagPosts(request, response) {
        const { id } = request.params;
        const offset = Number(request.params.offset);
        const limit = Number(request.params.limit);

        let query = `SELECT *
                     FROM posts p
                        JOIN post_tags pt ON p.postID = pt.postID
                        JOIN tags t ON pt.tagID = t.tagID
                    WHERE t.tagID = ?
                    ORDER BY p.postDATE DESC
                    LIMIT ?,?`;
        database.query(query, [id, offset, limit], (err, result) => {
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

    visualizarTagNome(request, response) {
        const { id } = request.params;
        let query = `SELECT *
                    FROM tags t
                    WHERE t.tagID = ?`;
        database.query(query, [id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log({result});
                response.send(result);
            }
        })
    }

    pesquisarPosts(request, response) {
        const { content } = request.params;
        const offset = Number(request.params.offset);
        const limit = Number(request.params.limit);

        const words = content.split(" ");
        const wordsLike = words.map(word => `%${word}%`);

        const queryLike = wordsLike.join(" ");
        console.log("Consulta ficou assim: " + queryLike);

        let query = `SELECT *
                    FROM posts p
                    WHERE postCONTENT LIKE ?
                    ORDER BY p.postDATE DESC
                    LIMIT ?,?`;
        database.query(query, [queryLike, offset, limit], (err, result) => {
            if (err) {
                console.error(err);
                response.status(500).send(`Erro ao buscar posts: ${err.message}`);
            } else {
                if (result.length === 0) {
                    response.status(404).json({ mensagem: "Nenhum post foi encontrado." });
                    console.log("Erro 404");
                } else {
                    response.send(result);
                }
            }
        });
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