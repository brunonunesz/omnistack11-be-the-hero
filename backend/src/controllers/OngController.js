const connection = require('../database/connections');
const crypto = require('crypto');


module.exports = {
    async list(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {  // quando mapeamentos uma url, estamos declarando um recurso
    
        const {name, email, whatsapp, city, uf} = request.body; //Para receber os dados dentro de uma variável.
    
        // Gerar 4 Bytes de caracteres especiais hexadecimal
        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection("ongs").insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
    
        return response.json({id});
    }
}

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end.
 */

/**
 * Tipos de parâmetros:
 * 
 * Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) Ex.: http://localhost:3333/users?name=Bruno&idade=23
 * Route Params: Parâmetros utilizados para identificar recursos. Ex.: http://localhost:3333/users/1
 * Request Body: Utilizado para criar ou alterar recursos.
 */

/**
 * Banco de dados:
 * 
 * Estrututrado.
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * 
 * Não Estruturado.
 * NoSQL: MongoDB, CouchDB etc.
 */

/**
* Driver: SELECT * FROM users.
* Query Builder: table('users').select('*').where()...
*/

// Para acessar os Parametros Query.
//const params = request.query; 

//Para acessar os Route Params. Necessário colocar no recurso /:id para ser identificado como parametro passado.
//const params = request.params;

/**
 * Para acessar os dados passado por Request Body.
 * Lembrar de passar para o Express que ele precisa converter os dados
 * para JSON. Para isso utilize o express.use(express.json())
 */
//const params = request.body;

//console.log(params);

//Rota, mapeamento da requisição do browser.
//Request receber dados da requisição
//Response retornar dados para o browser.