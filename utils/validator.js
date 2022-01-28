module.exports = {
  user: (app, request, response) =>{
    request.assert('name', 'O nome é obrigatório.').notEmpty();
    request.assert('email', 'O E-mail está inválido.').notEmpty().isEmail();
    request.assert('password', 'O password é obrigatório.').notEmpty();

    let errors = request.validationErrors();

    if(errors){
      app.utils.error.send(errors, request, response);
      return false;
    }else {
      return true;
    }
  }
}