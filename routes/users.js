module.exports = (app) => {
  app.get('/users', (request, response) => {
    response.json({
      users: [
        {
          name: 'Gabriel Lima Andrade',
          email: 'gabriel97gla98@gmail.com',
          id: 1
        }
      ]
    });
  })
  
  app.post('/users', (request, response) => {
    response.json(request.body);
  })
} 