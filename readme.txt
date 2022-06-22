Lembre-se sempre antes de realizar qualquer coisa ligue o servidor local com um "npm start" dentro do terminal no arquivo server.js


Modelo de requisiçao get: 
/login
{
    "email":
    "nome do email",
    "pass":
    "senha"
}
retorno do Get:
TRUE : em casos de usuario e senha localizados
FALSE: em caso de usuario e senha nao localizados ou achados em duplicidade


/livros 
Nao necessita de req

retorna uma lista com o conteudo de catalogo_livros do banco de dados. 


Modelo de requisiçao post: (/cadastro_livros)
{
   "titulo": "nome livro",
   "autor": "nome autor",
   "link": "url",
   "editora": "edt"
}
retorno do post /cadastro_livros:
TRUE : em caso de sucesso na inserçao do banco
FALSE: para todos os demais casos

Modelo de requisiçao post: (/cadastro_usuario)
{
   "nome": "nome do usuario",
   "email": "email para login",
   "senha": "senha para login"
}
retorno do post /cadastro_usuario:
TRUE : em caso de sucesso na inserçao do banco
FALSE: para todos os demais casos

Modelo de PUT:

existem 4 caminhos sendo eles '/update_link', '/update_titulo', '/update_autor' e '/update_editora'

/update_link
{
   "new_link": "novo link",
   "titulo": "titulo de referencia"
}


/update_titulo
{
   "new_titulo": "novo titulo",
   "link": "link de referencia"
}


/update_autor
{
   "new_autor": "novo autor",
   "titulo": "titulo de referencia"
}


/update_editora
{
   "new_editora": "nova editora",
   "titulo": "titulo de referencia"
}

todas retornao true ou false,
sendo que o false so será retornado caso tenha erro junto do erro no console(da api) 


Modelo de Delete:

'/delete_livro'
{
   "titulo": "titulo para delete"
}

retorno de true ou false 

