const { send, status } = require('express/lib/response')
const http    = require('http')
const { connect } = require('http2')
const { Field } = require('pg-protocol/dist/messages')
const port    = process.env.PORT || 3030
const app     = require('./app')
const mysql  = require('./Database').pool
const server  = http.createServer(app)


server.listen(port)

app.post('/cadastro_fornecedor', (req, res)=>{
    mysql.getConnection((error, conn) =>{
        conn.query("INSERT INTO fornecedor (nome, email, cnpj, telefone) VALUES (?,?,?,?)",
        [req.body.nome, req.body.email, req.body.cnpj, req.body.telefone],
        (error, resultado, field) =>{
            conn.release()
            if(error){
                return res.status(500).send({
                    errror: error,
                    response:null
                })
            }
            return res.status(201).send({
                mensagem: 'fornecedor inserido',
                id_fornecedor: resultado.insertId
            })
        }
        )
    }
    )
})


app.post('/cadastro_produtos', (req, res)=>{
    mysql.getConnection((error, conn) =>{
        conn.query("INSERT INTO produto (nome, valor, id_categoria, id_fornecedor, link) VALUES (?,?,?,?,?)",
        [req.body.nome, req.body.valor, req.body.IDcategoria, req.body.IDfornecedor, req.body.link],
        (error, resultado, field) =>{
            conn.release()
            if(error){
                return res.status(500).send({
                    errror: error,
                    response:null
                })
            }
            return res.status(201).send({
                mensagem: 'produto inserido',
                id_fornecedor: resultado.insertId
            })
        }
        )
    }
    )
})

app.post('/cadastro_estoque', (req, res)=>{
    mysql.getConnection((error, conn) =>{
        conn.query("INSERT INTO estoque (quantidade, id_produto) VALUES (?,?)",
        [req.body.quantidade, req.body.IDproduto],
        (error, resultado, field) =>{
            conn.release()
            if(error){
                return res.status(500).send({
                    errror: error,
                    response:null
                })
            }
            return res.status(201).send({
                mensagem: 'estoque inserido',
                id_fornecedor: resultado.insertId
            })
        }
        )
    }
    )
})

app.post('/cadastro_pedido', (req, res)=>{
    mysql.getConnection((error, conn) =>{
        conn.query("INSERT INTO pedido (id_pedido, id_estoque, valor_unitario) VALUES (?,?,?)",
        [req.body.IDpedido, req.body.IDestoque, req.body.valor],
        (error, resultado, field) =>{
            conn.release()
            if(error){
                return res.status(500).send({
                    errror: error,
                    response:null
                })
            }
            return res.status(201).send({
                mensagem: 'pedido inserido',
                id_fornecedor: resultado.insertId
            })
        }
        )
    }
    )
})

app.put('/update_produto', (req, res)=>{
    mysql.getConnection((error, conn)=>{
        conn.query("UPDATE produto SET nome = ?, valor = ?, id_categoria = ?, id_fornecedor = ?, link = ? WHERE (id = ?);",
        [req.body.nome, req.body.valor, req.body.id_categoria, req.body.id_fornecedor, req.body.link, req.body.id],
        (error, resultado, field)=>{
            conn.release()
            if(error){
                return res.status(500).send({
                    error: error,
                    response:null
                })
            }
            return res.status(201).send({
                mensagem: 'produto atualizado',
            })
        }
        )
    })
})    


app.put('/update_fornecedor', (req, res)=>{
    mysql.getConnection((error, conn)=>{
        conn.query("UPDATE fornecedor SET nome = ?, email = ?, cnpj = ?, telefone = ? WHERE (id = ?);",
        [req.body.nome, req.body.email, req.body.cnpj, req.body.telefone, req.body.id],
        (error, resultado, field)=>{
            conn.release()
            if(error){
                return res.status(500).send({
                    error: error,
                    response:null
                })
            }
            return res.status(201).send({
                mensagem: 'fornecedor atualizado',
            })
        }
        )
    })
})

app.put('/update_quantidade', (req, res)=>{
    mysql.getConnection((error, conn)=>{
        conn.query("UPDATE estoque SET quantidade = ? WHERE (id = ?);",
        [req.body.quantidade, req.body.id],
        (error, resultado, field)=>{
            conn.release()
            if(error){
                return res.status(500).send({
                    error: error,
                    response:null
                })
            }
            return res.status(201).send({
                mensagem: 'fornecedor atualizado',
            })
        }
        )
    })
})

app.put('/update_estoque', (req, res)=>{
    mysql.getConnection((error, conn)=>{
        conn.query("UPDATE estoque SET quantidade = ?, id_produto = ? WHERE (id = ?);",
        [req.body.quantidade,req.body.IDproduto, req.body.id],
        (error, resultado, field)=>{
            conn.release()
            if(error){
                return res.status(500).send({
                    error: error,
                    response:null
                })
            }
            return res.status(201).send({
                mensagem: 'fornecedor atualizado',
            })
        }
        )
    })
})


app.delete('/delete_produto', (req, res)=>{
    mysql.getConnection((error, conn)=>{
        conn.query("DELETE FROM produto WHERE id=?;",
        [req.body.id],
        (error, resultado, field)=>{
            conn.release()
            if(error){
                return res.status(500).send({
                    error: error,
                    response:null
                })
            }
            return res.status(201).send({
                mensagem: 'Produto deletado',
            })
        }
        )
    })
})

app.delete('/delete_fornecedor', (req, res)=>{
    mysql.getConnection((error, conn)=>{
        conn.query("DELETE FROM fornecedor WHERE id=?;",
        [req.body.id],
        (error, resultado, field)=>{
            conn.release()
            if(error){
                return res.status(500).send({
                    error: error,
                    response:null
                })
            }
            return res.status(201).send({
                mensagem: 'Produto deletado',
            })
        }
        )
    })
})

app.delete('/delete_estoque', (req, res)=>{
    mysql.getConnection((error, conn)=>{
        conn.query("DELETE FROM estoque WHERE id=?;",
        [req.body.id],
        (error, resultado, field)=>{
            conn.release()
            if(error){
                return res.status(500).send({
                    error: error,
                    response:null
                })
            }
            return res.status(201).send({
                mensagem: 'Produto deletado',
            })
        }
        )
    })
})

app.delete('/delete_pedido', (req, res)=>{
    mysql.getConnection((error, conn)=>{
        conn.query("DELETE FROM pedido WHERE id_pedido=?;",
        [req.body.id],
        (error, resultado, field)=>{
            conn.release()
            if(error){
                return res.status(500).send({
                    error: error,
                    response:null
                })
            }
            return res.status(201).send({
                mensagem: 'Produto deletado',
            })
        }
        )
    })
})

app.get('/categoria', (req, res)=>{
    mysql.getConnection((error, conn) =>{
        conn.query("select * from categoria order by id",
        (error, result, field)=>{
        conn.release()
        if(error){
            return res.send('error')
        }
        return res.send(result)
        
})
})
})

app.get('/produto', (req, res)=>{

    mysql.getConnection((error, conn) =>{
        conn.query("select * from produto order by id",
        (error, result, field)=>{
        conn.release()
        if(error){
            return res.send('error')
        }
        return res.send(result)
        
})
})
})

app.get('/fornecedor', (req, res)=>{
    mysql.getConnection((error, conn) =>{
        conn.query("select * from fornecedor order by id",
        (error, result, field)=>{
        conn.release()
        if(error){
            return res.send('error')
        }
        return res.send(result)
        
})
})
})

app.get('/estoque', (req, res)=>{
    mysql.getConnection((error, conn) =>{
        conn.query("select * from estoque order by id",
        (error, result, field)=>{
        conn.release()
        if(error){
            return res.send('error')
        }
        return res.send(result)
        
})
})
})

app.get('/pedidos', (req, res)=>{
    mysql.getConnection((error, conn) =>{
        conn.query("select * from pedidos order by id",
        (error, result, field)=>{
        conn.release()
        if(error){
            return res.send('error')
        }
        return res.send(result)
        
})
})
})

