$(document).ready(function(){
  // Load Random Quote on Start up
  getQuote();
  
  function getQuote() {
    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url,function(data){
      $(".quote").html('"'+data.quoteText+'"');
      $(".author").html('"'+data.quoteAuthor);
    });
  }
  
  $(".btn").on("click", function(){
      getQuote();
  });
});