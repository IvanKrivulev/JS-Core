function attachEvents() {
    let url = 'https://messenger-e91c8.firebaseio.com/messenger';

    $("#submit").click(createMessage);
    $("#refresh").click(loadMessages);

    function createMessage() {
        let data = {
            author: $("#author").val(),
            content: $("#content").val(),
            timestamp: Date.now()
        };

        $.post(url + '.json', JSON.stringify(data)).then(loadMessages);

    }

    function loadMessages() {
        $.ajax({
            url: url + '.json',
            success: displayMessages
        })
    }

    function displayMessages(req) {
        $("#messages").empty();
        let orderedMessages = {};
        req = Object.keys(req).sort((a, b) => a.timestamp - b.timestamp).forEach(k => orderedMessages[k] = req[k]);

        for (let message of Object.keys(orderedMessages)) {
            $('#messages').append(`${orderedMessages[message].author}: ${orderedMessages[message].content}\n`);
        }
    }

    
}