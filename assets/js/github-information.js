function fetchGitHubInformation(event) {

    var username = $("#gh-username").val();
    if (!username) {
        $("gh-user-data").html("<h2>Please enter a valid username</h2>")
    }
}