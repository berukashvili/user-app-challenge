$(document).ready(function () {
  // Get User Data From API
  $.getJSON("https://jsonplaceholder.typicode.com/users", function (users) {
    // Iterate Over Users And Append To List
    $.each(users, function (index, user) {
      const listItem = $("<a>")
        .addClass(
          "list-group-item list-group-item-action list-group-item-action"
        )
        .attr("href", "user.html?id=" + user.id)
        .text(user.name);
      $("#user-list").append(listItem);
    });
  });
});
