const Database = require('./../Config/Database');
const UsuarioRepository = require("./../Repository/UsuarioRepository");
const Many = require("extends-classes");
const crypto = require('crypto');

class  UsuarioService extends Many(UsuarioRepository){

    constructor(){
        super();
    }

    async cadastrarUsuario(obj){
        console.log(obj)
        obj.inserted = new Date();
        const user = await Database('usuario').insert(obj);
        const token = await this.defineToken(user);
        return token;
    }
    async auth(email, senha){
        let query = await Database('usuario').select("id").where(
        {
            'email': email,
            'password' : `${senha}`
        }).first();
        let token = await Database('user_token').select('token').where('user_id' , query.id).first();
        return token.token;
    }   
    async defineToken(userID){
        const id = crypto.randomBytes(4).toString('HEX');
        const token = await Database('user_token').insert({
            token: id,
            inserted: new Date(),
            user_id: userID
        });
        return id;
    }
}
module.exports = UsuarioService;