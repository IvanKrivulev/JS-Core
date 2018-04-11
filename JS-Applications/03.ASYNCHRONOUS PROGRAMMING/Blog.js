function attachEvents() {
    $('#btnLoadPosts').click(loadPostsClick);
    $('#btnViewPost').click(viewPostClick);

    const baseUrl = `https://baas.kinvey.com/appdata/kid_ByaDrbqiM`;
    const username = 'pesho';
    const password = 'p';
    const encodedPass = btoa(`${username}:${password}`);
    const authHeaders = {'Authorization': 'Basic ' + encodedPass};
    const select = $("#posts");

    function loadPostsClick() {
        let request = {
            url: baseUrl + '/posts',
            headers: authHeaders
        };
        $.ajax(request).then(displayPosts).catch(displayError)
    }

    function viewPostClick() {
        let selectedPostId = $("#posts").val();
        if (!selectedPostId) return;
        let requestPosts = $.ajax({
            url: baseUrl + '/posts/' + selectedPostId,
            headers: authHeaders
        });
        let requestComments = $.ajax({
            url: baseUrl + `/comments/?query={"postId":"${selectedPostId}"}`,
            headers: authHeaders
        });
        Promise.all([requestPosts], requestComments).then(displayPostsWithComments).catch(displayError);
    }

    function displayPosts(posts) {
        select.empty();
        for (let post of posts) {
            let option = $('<option>').text(post.title).val(post._id);
            select.append(option);
        }
    }

    function displayError(err) {
        let errorDiv = $('<div>').text(`Error: ${err.status} (${err.statusText})`);
        $(document.body).prepend(errorDiv);
        setTimeout(function () {
            $(errorDiv).fadeOut(function () {
                $(errorDiv).remove();
            });
        }, 3000)
    }

    function displayPostWithComments([post, comments]) {
        $("#post-title").text(post.title);
        $("#post-body").text(post.body);
        $("#post-comments").empty();
        for (let comment of comments) {
            let commentItem = $("<li>").text(comment.text);
            $("#post-comments").append(commentItem);
        }
    }
}