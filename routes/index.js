module.exports = (app) => {  
  app.get('/', (request, response) =>{
    console.log('Url: ', request.url);
    console.log('Method: ', request.method);
    
    response.statusCode = 200;
    response.end('<h1>Olá</h1>');
  });

}