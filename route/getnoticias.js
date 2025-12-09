module.exports = (app) => {
    app.get('/noticias', async (req, res) => {
      app.send("ola");
    })

}
