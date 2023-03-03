$(document).ready(function () {
  // Get user ID from query string
  const userId = new URLSearchParams(window.location.search).get("userId");

  // Fetch user's posts from API
  $.getJSON(
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId,
    function (posts) {
      // // Iterate Over Posts And Append To List
      posts.forEach(function (post) {
        const postHtml =
          '<li class="list-group-item">' +
          "<h4>" +
          post.title +
          "</h4>" +
          "<p>" +
          post.body +
          "</p>" +
          "</li>";
        $("#post-list").append(postHtml);
      });
    }
  );
});
