// 1) fetchAll (anon vs user)
// 2) login
// 3) sign-up
// 4) sources

// var app = app || {};

// (module => {
//     const __API_URL__ = 'https://dk-rm-nd-booklist.herokuapp.com/api/v1/books';
//     // const __API_URL__ = 'http://localhost:3000/api/v1/books';
    
//     function Book() {

//     }

//     Book.all = [];

//     Book.fetchAll = () => $.getJSON(__API_URL__);

//     Book.fetchOne = id => $.getJSON(`${__API_URL__}/${id}`);

//     Book.create = book => $.post(__API_URL__, book);

//     Book.update = book => {
//         return $.ajax({
//             url: __API_URL__ + '/' + book.id,
//             method: 'PUT',
//             data: book,
//         }).catch(error => console.error(error))
        
//     }

//     Book.delete = id => {
//         console.log('books ' + id)
//         return $.ajax({
//             url: __API_URL__ + '/' + id,
//             method: 'DELETE'
//         }).catch(error => console.error(error))
//     }
        
//     module.Book = Book;

// })(app);