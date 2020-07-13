const UsuarioService = require("./../Service/UsuarioService");
const Usuario = require("../Entity/Usuario");
class SecurityController{
    constructor(){}
    async list(req, res){

    }
    async cadastrar(req, res){
        const user = new UsuarioService();
        const token = await user.cadastrarUsuario(req.body);
        res.json({token : token});
    }
    async auth(req, res){
        const user = new UsuarioService();
        let t = await user.auth(req.body.email, req.body.password);
        if(t){
            res.json(
            {
                token: t
            });
        }else{
            res.status(500);
        }
    }
}
let securityController = new SecurityController();
module.exports = securityController;