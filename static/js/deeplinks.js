$(function(){
  var rss_url = "https://www.eff.org/cases_feed.xml?field_related_cases_nid=99029";
  var free_speech = "images/free-speech.png";
  var cda = "images/yomna-deeplinks.jpg";
  $.get(rss_url, function(feed) {
    $(feed).find("item").slice(0, 5).each(function() {
      var post = $(this);
      var post_div = $("<div>", { "class": "deeplinks row" });

      // Get the post's banner image, or select a default
      var img_url = post.find("enclosure").attr('url');
      if (typeof img_url == "undefined") {
        var tags = [];
        post.find("category").each(function() {
          tags.push($(this).text());
        });
        if (tags.includes("Section 230 of the Communications Decency Act")) {
          img_url = cda;
        } else {
          img_url = free_speech;
        }
      }
      var post_img = $("<img>", { "src": img_url, "class": "deeplinks-thumb" });
      post_thumb = $("<div>",
                     { "class": "deeplinks-thumb col-sm-3" }).append(post_img);
      post_div.append(post_thumb);

      var post_title_div = $("<div>", { "class": "deeplinks-post col-sm-9" });

      // Byline + publish date
      var authors = [];
      post.find("dc\\:creator").each(function() {
        authors.push($(this).text());
      });
      var pubDate = new Date(post.find("pubDate").text())
        .toLocaleDateString('en-US',
                            { month: 'long', day: 'numeric', year: 'numeric' });
      var byline = (pubDate + " | " + authors.join(", ")).toUpperCase();
      post_title_div.append($("<div>", { "html": byline,
                                         "class": "deeplinks-byline" }));

      // Post title
      post_title_div.append($("<a>", { "class": "title",
                                       "html": post.find("title").text(),
                                       "href": post.find("link").text() }));
      // Post text
      var post_blurb = post.find("description").text();
      post_title_div.append($("<div>", { "class": "deeplinks-blurb",
                                         "html": shorten_post(post_blurb) }));
      post_div.append(post_title_div);

      $('#deeplinks-posts').append(post_div);
    });
  });
});

function shorten_post(text) {
  var last_space = text.indexOf(' ', 550);
  text = text.substring(0, last_space);
  var first_p = text.search(/<\/p>/);
  var first_br = text.search(/<br \/>/);
  if (first_p != -1) {
    text = text.substring(0, first_p);
  }
  if (first_br != -1) {
    text = text.substring(0, first_br);
  }
  if (text.slice(-1) != ".") {
    text = text + "...";
  }
  return text;
}
