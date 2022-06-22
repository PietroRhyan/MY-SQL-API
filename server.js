const { send } = require('express/lib/response')
const http    = require('http')
const port    = process.env.PORT || 3000
const app     = require('./app')
const client  = require('./Database')
const server  = http.createServer(app)


server.listen(port)

client.connect()

app.get('/login', (req, res)=>{
   const email = req.body.email
   const pass  = req.body.pass

    client.query("Select id from login where email ='"+email+"' and senha='"+pass+"'", (err, result)=>{
        if(!err){
            if (result.rows.length != 1){
                res.send(false)
            }
            else{
                res.send(true)
            }
        }
        else{
            console.log(err.message)

        }
    })
    client.end
})

app.get('/livros', (req, res)=>{

    client.query("select * from catalogo_livros order by id", (err, result)=>{
        if(!err){
            res.send(result.rows)
        }
        else{
            res.send(console.log(err.message))
        }
    })
    client.end
})

app.post('/cadastro_livros', (req, res)=>{

    const titulo  = req.body.titulo
    const autor   = req.body.autor
    const editora = req.body.editora
    const link    = req.body.link

    client.query("INSERT INTO catalogo_livros (titulo, autor, editora, link) VALUES ( '"+titulo+"' , '"+autor+"' , '"+editora+"', '"+link+"' )", (err, result)=>{
        if(!err){
            res.send(true)
        }
        else{
            console.log(err.message)
            res.send(false)
        }
    })
    client.end
})

app.delete('/delete_livro', (req, res)=>{

    const livro = req.body.titulo

    client.query("delete from catalogo_livros where titulo = '"+livro+"'", (err, result)=>{
        if(!err){
            res.send(true)
        }
        else{
            console.log(err.message)
            res.send(false)
        }
    })
    client.end
})

app.put('/update_link', (req, res)=>{

    const new_link = req.body.new_link
    const cond = req.body.titulo

    client.query("update catalogo_livros set link = '"+new_link+"' where titulo = '"+cond+"'", (err, result)=>{
        if(!err){
            res.send(true)
        }
        else{
            console.log(err.message)
            res.send(false)
        }
    })
    client.end
})

app.put('/update_editora', (req, res)=>{

    const new_editora = req.body.new_editora
    const cond2 = req.body.titulo

    client.query("update catalogo_livros set editora = '"+new_editora+"' where titulo = '"+cond2+"'", (err, result)=>{
        if(!err){
            res.send(true)
        }
        else{
            console.log(err.message)
            res.send(false)
        }
    })
    client.end
})

app.put('/update_autor', (req, res)=>{

    const new_autor = req.body.new_autor
    const cond3 = req.body.titulo

    client.query("update catalogo_livros set autor = '"+new_autor+"' where titulo = '"+cond3+"'", (err, result)=>{
        if(!err){
            res.send(true)
        }
        else{
            console.log(err.message)
            res.send(false)
        }
    })
    client.end
})

app.put('/update_titulo', (req, res)=>{

    const new_titulo = req.body.new_titulo
    const cond4 = req.body.link

    client.query("update catalogo_livros set titulo = '"+new_titulo+"' where link = '"+cond4+"'", (err, result)=>{
        if(!err){
            res.send(true)
        }
        else{
            console.log(err.message)
            res.send(false)
        }
    })
    client.end
})

app.post('/cadastro_usuario', (req, res)=>{

    const nome   = req.body.nome
    const email  = req.body.email
    const senha  = req.body.senha

    client.query("INSERT INTO login (nome, email, senha) VALUES ( '"+nome+"' , '"+email+"' , '"+senha+"' )", (err, result)=>{
        if(!err){
            res.send(true)
        }
        else{
            console.log(err.message)
            res.send(false)
        }
    })
    client.end
})