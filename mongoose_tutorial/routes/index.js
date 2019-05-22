module.exports = function(app)
{
    // GET all books
    app.get('/api/books', function(req,res){
        res.end();
    });


    // GET single book
    app.get('/api/books/:book_id', function(req,res){
        res.end();
    });


    // GET book by author
    app.get('/api/books/author/:author', function(req,res){
        res.end();
    });
    

    // CREATE book
    app.post('/api/books', function(req,res){
        res.end();
    });
    

    // UPDATE the book
    app.put('/api/books/:book_id', function(req,res){
        res.end();
    });
    

    // DELETE book
    app.delete('/api/books/:book_id', function(req,res){
        res.end();
    });    
}
