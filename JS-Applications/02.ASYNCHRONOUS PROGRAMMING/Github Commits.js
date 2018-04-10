function loadCommits() {
    const username = $("#username").val();
    const repoName = $("#repo").val();
    const url =`https://api.github.com/repos/${username}/${repoName}/commits`;
    const list = $("#commits");
    let li;

    $.ajax({
        url,
    }).then(handleSuccess).catch(handleError);

    function handleSuccess(data) {
        //console.log(data);

        list.empty();
        for (let obj of data) {
            li = $('<li>').text(`${obj.commit.author.name}: ${obj.commit.message}`);
            li.appendTo(list);
        }
    }

    function handleError(err) {
        list.empty();
        li = $('<li>').text(`Error: ${err.status} (${err.statusText})`);
        li.appendTo(list);

    }
}