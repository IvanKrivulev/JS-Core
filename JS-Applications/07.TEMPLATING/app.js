$(() => {
    let details;
    let data;

    async function loadFiles() {
        let contacts = await $.get('templates/contacts.html');
        let contactsTemplate = Handlebars.compile(contacts);

        details = await $.get('templates/details.html');
        data = await $.get('data.json');

        let obj = {
            contacts: data
        };
        let table = contactsTemplate(obj);
        $("#list").empty();
        $('#list').append(table);
        attachEvents();
    }

    loadFiles();

    function attachEvents() {
        $('.contact').click(function () {
            loadDetails($(this).attr('data-id'));
            $('.active').removeClass('active');
            $(this).addClass('active');
        });
    }

    function loadDetails(index) {
        $('#details').empty();
        let detailsTemplate = Handlebars.compile(details);
        let html = detailsTemplate(data[index]);
        $('#details').append(html);
    }
});