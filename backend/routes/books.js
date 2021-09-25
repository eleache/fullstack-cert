const { Router } = require('express');
const router = Router();
const Book = require('../models/Book');


//        leer
router.get('/', async (req, res) => {
          const books = await Book.find();
          res.json(books);
});
//        subir
router.post('/', async (req, res) = {
          const { title, author, isbn }= req.body;
          const newBook = new Book({ title, author, isb })
          await newBook.save();
          res.json({message: 'Book Saved'});
});
//        eliminar
router.delete('/:id', async (req, res) => {
          await Book.findByIdAndDelete(req.params.id);
          res.json({ message: 'Book Deleted' });
});


module.exports = router;