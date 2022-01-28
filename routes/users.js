let NeDB = require('nedb');
let db = new NeDB({
  filename: 'users.db',
  autoload: true,
})

module.exports = (app) => {
  let route = app.route('/users');

  route.get((request, response) => {

    db.find({}).sort({name:1}).exec((err, users)=>{
      if(err){
        app.utils.error.send(error, request, response)
      }else {
        response.json({
          users
        });
      }
    })

   
  })
  
  route.post((request, response) => {

    if (!app.utils.validator.user(app, request, response)) return false;

    db.insert(request.body, (err, user)=>{
      if(err){
        app.utils.error.send(error, request, response)
      }else {
        response.status(200).json(user)
      }
    })
  })

  let routeId = app.route('/users/:id');

  routeId.get((request, response)=>{
    db.findOne({_id:request.params.id}).exec((err, user) =>{
      if(err){
        app.utils.error.send(error, request, response);
      }else {
        response.status(200).json(user);
      }
    })
  })
  
  routeId.put((request, response)=>{
    if (!app.utils.validator.user(app, request, response)) return false;
    db.update({_id:request.params.id}, request.body, err =>{
      if(err){
        app.utils.error.send(error, request, response);
      }else {
        response.status(200).json(Object.assign(request.params, request.body));
      }
    })
  })

  routeId.delete((request, response) =>{
    db.remove({_id:request.params.id}, {}, err=> {
      if(err) {
        app.util.error.send(error, request, response);
      }else {
        response.status(200).json(request.params);
      }
    })
  })
} 