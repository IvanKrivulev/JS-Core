let resultFunc = (function createBook() {
    let id = 1;

    return function (selector, title, author, isbn) {
        let div = $('<div>').attr('id', 'book' + id);

        let pTitle = $('<p>').addClass('title').text(title);
        let pAuthor = $('<p>').addClass('author').text(author);
        let pISBN = $('<p>').addClass('isbn').text(isbn);

        let selectBtn = $('<button>').text('Select').click(select);
        let deselectBtn = $('<button>').text('Deselect').click(deselect);

        pTitle.appendTo(div);
        pAuthor.appendTo(div);
        pISBN.appendTo(div);
        selectBtn.appendTo(div);
        deselectBtn.appendTo(div);

        $(selector).append(div);

        function select() {
            $(this).parent().css('border', '2px solid blue');
        }

        function deselect() {
            $(this).parent().css('border', '');
        }

        id++;
    }

})();
