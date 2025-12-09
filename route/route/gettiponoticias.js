const { ObjectId } = require("mongodb");
module.exports = (app) => {
    app.get('/noticias/tipo/:tiponoticia', async (req, res) => {
        try {
            const tiponoticias = req.params.tiponoticias
            await app.DBClient.connect(); //realizar a conexão com o banco 
            const noticias = await app.DBClient.db('portalnoticias')
                .collection('noticias').find({tiponoticia: new RegExp(tiponoticias, 'i')}).toArray();
            res.json(noticias)
        } finally {
            // Ensures that the client will close when you finish/error
            await app.DBClient.close();
        }
    })
}