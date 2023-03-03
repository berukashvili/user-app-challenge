$(document).ready(function () {
  // Get ID
  const userId = new URLSearchParams(window.location.search).get("id");

  // Get user data from API
  $.getJSON(
    "https://jsonplaceholder.typicode.com/users/" + userId,
    function (user) {
      // Inject Data
      $("#user-name").text(user.name);
      $("#user-email").text(user.email);
      $("#user-phone").text(user.phone);
      $("#user-website").text(user.website);
      $("#user-address").text(user.address.street + ", " + user.address.suite);
      $("#user-city").text(user.address.city);
      $("#user-company").text(user.company.name);
      $("#user-company-catchphrase").text(user.company.catchPhrase);
    }
  );

  $("#view-posts").click(function () {
    window.location.href = "posts.html?userId=" + userId;
  });
});
