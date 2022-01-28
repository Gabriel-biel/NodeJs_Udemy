module.exports = {
  send: (err, request, response, code=400) =>{
    console.log(`error: ${err}`);
    response.status(code).json({error: err})
  }
}