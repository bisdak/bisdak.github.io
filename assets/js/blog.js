/* Renders the blog index from blog/posts.json.
   To add a post: create the HTML file, then add an entry to posts.json. */
(function () {
  "use strict";

  var list = document.getElementById("post-list");
  if (!list) return;

  function formatDate(iso) {
    var date = new Date(iso + "T00:00:00");
    if (isNaN(date)) return iso;
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  function render(posts) {
    if (!posts.length) {
      list.innerHTML =
        '<li class="empty-state">No posts yet. The first one is on its way.</li>';
      return;
    }

    list.innerHTML = posts
      .slice()
      .sort(function (a, b) {
        return String(b.date).localeCompare(String(a.date));
      })
      .map(function (post) {
        return (
          '<li class="post-item">' +
          '<a href="' +
          post.url +
          '">' +
          '<span class="post-date">' +
          formatDate(post.date) +
          "</span>" +
          "<h2>" +
          post.title +
          "</h2>" +
          (post.summary ? "<p>" + post.summary + "</p>" : "") +
          "</a>" +
          "</li>"
        );
      })
      .join("");
  }

  fetch("posts.json")
    .then(function (response) {
      if (!response.ok) throw new Error("HTTP " + response.status);
      return response.json();
    })
    .then(render)
    .catch(function () {
      list.innerHTML =
        '<li class="empty-state">Could not load posts.json. ' +
        "Open the site through a local server rather than double-clicking the file.</li>";
    });
})();
