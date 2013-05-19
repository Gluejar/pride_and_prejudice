$(document).ready(function() {
  if(navigator.vendor === "Google Inc." && navigator.onLine) {
    $("#more_info").attr("src", "http://backmatter.herokuapp.com/widget/search/jane%20austen");
  }
});