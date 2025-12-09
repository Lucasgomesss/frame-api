module.exports = (app) => {
    app.get('/noticias', async (req, res) => {
        await app.DBClient.connect(); //realizar a conexão com o banco 
      res.send("ola");
    })

}


