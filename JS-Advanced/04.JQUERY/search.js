function search() {
    let searchText = $('#searchText').val();
    let counter = 0;
    $("#towns li").each((index, item) => {
        if (item.textContent.includes(searchText)){
            counter++;
            $(item).css('font-weight', 'bold');
        }else{
            $(item).css('font-weight', '');
        }

    });
    $('#searchText').val('');
    if (counter === 1){
        $('#result').text(`${counter} match found.`);
    }else {
        $('#result').text(`${counter} matches found.`);
    }

}