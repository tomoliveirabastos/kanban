class UserToken{
    constructor(){
        this.id;
        this.token;
        this.inserted = new Date();
        this.user_id;
    }
}
module.exports = UserToken;