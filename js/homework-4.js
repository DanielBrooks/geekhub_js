/*
 *  Developed by Daniel Synelnikov
 *
 */


(function() {
    
    var books = getBooks();
    
    Pad.prototype = Object.create(Book.prototype);
    Note.prototype = Object.create(Book.prototype);
    
    
    books.forEach(show);
    
    books.filter(thick(100)).forEach(show);
    
    books.map(weight(2,5)).forEach(displayWeight);
    
    books.forEach(haveMethod);
    
    function haveMethod(item) {
        
        if (item.review) {
            item.review();
        }
        
    }
    
    function weight(pageWeight,s) {
        return function(item) {
            return item.pages * pageWeight + s;
        }
    }
    function displayWeight(w) {
        console.log(w + 'gramms');
    }
    
    function thick(amount) {
        return function(item) {
            return item.pages > amount;
        }
    }
    function show(item) {
        console.log('The ' + item.name + ' has ' + item.pages + ' pages.');
    }
    
    
    function getBooks() {
        return [
            new Book('book', 'big', 200, 'solid'),
            new Pad('pad', 'medium', 110, 'soft', 'red'),
            new Pad('pad', 'medium', 108, 'soft', 'green'),
            new Pad('pad', 'medium', 104, 'soft', 'blue'),
            new Note('note', 'small', 3, 'epsent', 5),
            new Note('note', 'small', 8, 'epsent', 3),
            new Note('note', 'small', 6, 'epsent', 4)
        ];
    }
    
    function Book(name, size, pages, cover) {
        
        this.name = name;
        this.size = size;
        this.pages = pages;
        this.cover = cover;
        
    }
    
    function Pad(name, size, pages, cover, color) {
        
        Book.apply(this, arguments);
        this.color = color;
        this.usable = function() {
            console.log('Yes, the ' + this.name + ' is widely usable.');
        }
    }
    
    function Note(name, size, pages, cover, stars) {
        
        Book.apply(this, arguments);
        this.stars = stars;
        this.review = function() {
            console.log('The ' + this.name + ' is in good condition.');
        }
    }
    
})();