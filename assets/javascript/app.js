$(document).ready(function(){
    //Array for searched topics to be added
var topics = [];
    //Function with AJAX call to GIPHY; Q parameters for API link set to search term, limit 10 results
// Create DIV with respective still and animate image sources with "data-state", "data-still" and "data-animate" attributes
function displaySportIcon(){
    var x = $(this).data("search");
    console.log(x);
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=fVXqdFIVuxSytNACXiYaQQa5NIybevNg&limit=10&offset=0&rating=PG-13&lang=en";

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){
        var results = response.data;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
            var iconDiv = $("<div class='col-md-4'>");

            var rating = results[i].rating;
            var defaultAnumatedSrc = results[i].images.fixed_height.url;
            var staticSrc = resultsp[i]
        }
    })
}
})