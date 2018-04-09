$(function () {
    $("#btnLoad").click(loadContacts);
    $("#btnCreate").click(createContact);
    let baseUrl = 'https://phonebook-bc1b3.firebaseio.com/phonebook';
    
    function loadContacts() {
        $("#phonebook").empty();
        $.ajax({
            url: baseUrl + '.json',
            success: displayContacts,
            error: displayError

        })
    }

    function createContact() {
        let contactObj = JSON.stringify({
            person: $("#person").val(),
            phone: $("#phone").val()
        });
        $.post(baseUrl + '.json', contactObj).then(loadContacts).catch(displayError);
        $("#person").val('');
        $("#phone").val('');
    }
    
    function displayContacts(contacts) {
        //console.dir(contacts)
        for (let key in contacts) {
            let person = contacts[key]['person'];
            let phone = contacts[key]['phone'];
            let li = $("<li>");
            li.text(`${person}: ${phone} `);
            $("#phonebook").append(li);
            li.append($("<button>Delete</button>").click(deleteContact.bind(this, key)));

        }
    }
    
    function displayError() {
        $("#phonebook").append($("<li>Error</li>"));
    }

    function deleteContact(key) {
        $.ajax({
            method: "DELETE",
            url: `${baseUrl}/${key}.json`,
            success: loadContacts,
            error: displayError
        })

    }
});