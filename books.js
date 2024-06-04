document.addEventListener('DOMContentLoaded', function() {
    const books = [
        { id: 1, title: 'Adventure Book 1', category: 'adventure', price: 10, image: 'images/book1.jpg' },
        { id: 2, title: 'Thriller Book 1', category: 'thriller', price: 15, image: 'images/book2.jpg' },
        { id: 3, title: 'Romance Book 1', category: 'romance', price: 12, image: 'images/book3.jpg' },
        // Add more books as needed
    ];

    const bookList = document.getElementById('bookList');
    const searchInput = document.getElementById('searchInput');
    const categoryButtons = document.querySelectorAll('.category-btn');

    function displayBooks(filteredBooks) {
        bookList.innerHTML = '';
        filteredBooks.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.className = 'book-item';
            bookItem.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>$${book.price}</p>
                <button onclick="addToCart(${book.id})">Add to Cart</button>
            `;
            bookList.appendChild(bookItem);
        });
    }

    function filterBooks(searchTerm, category) {
        let filteredBooks = books;

        if (category && category !== 'all') {
            filteredBooks = filteredBooks.filter(book => book.category === category);
        }

        if (searchTerm) {
            filteredBooks = filteredBooks.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        displayBooks(filteredBooks);
    }

    searchInput.addEventListener('input', () => {
        filterBooks(searchInput.value, document.querySelector('.category-btn.active')?.dataset.category);
    });

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.category-btn.active')?.classList.remove('active');
            button.classList.add('active');
            filterBooks(searchInput.value, button.dataset.category);
        });
    });

    // Initially display all books
