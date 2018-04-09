function loadRepos() {

    $("#repos").empty();
    let user = $("#username").val();
    let url = `https://api.github.com/users/${user}/repos`;
    $.ajax({
        url,
        success: displayRepos,
        error: displayError
    });
    $("#username").val('');

    function displayRepos(repos) {
        $("#header").text(`These are all the repos of user: ${user}`);
        for (let repo of repos) {
            let link = $("<a>").text(repo.full_name);
            link.attr('href', repo.html_url);
            $("#repos").append($('<li>').append(link));
        }
    }

    function displayError() {
        $("#repos").append($("<li>Error</li>"));
    }


}