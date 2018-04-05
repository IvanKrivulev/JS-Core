function attachEvents() {
    $('#items').on('click', 'li', function () {
        let li = $(this);
        if (li.attr('data-selected')){
            li.removeAttr('data-selected');
            li.css('background', '');
        }else {
            li.attr('data-selected', 'true');
            li.css('background', '#DDD');
        }
    });

    $('#showTownsButton').click(showTowns);

    function showTowns() {
        let selectedItems = $('#items li[data-selected="true"]');
        let towns = selectedItems.toArray()
            .map(e => e.textContent)
            .join(", ");

        $('#selectedTowns').text('Selected towns: ' + towns)
    }
}
