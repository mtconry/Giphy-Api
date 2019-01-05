$(document).ready(function () {
    //Array for searched topics to be added
    var topics = [];
    //Function with AJAX call to GIPHY; Q parameters for API link set to search term, limit 10 results
    // Create DIV with respective still and animate image sources with "data-state", "data-still" and "data-animate" attributes
    function displaySportIcon() {
        var x = $(this).data("search");
        console.log(x);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=fVXqdFIVuxSytNACXiYaQQa5NIybevNg&limit=10&offset=0&rating=PG-13&lang=en";

        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            var results = response.data;
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                var iconDiv = $("<div class='col-md-4'>");

                var rating = results[i].rating;
                var defaultAnimatedSrc = results[i].images.fixed_height.url;
                var staticSrc = results[i].images.fixed_height_still.url;
                var iconImage = $("<img>");
                // var p = $("<p>").text("Rating: " = rating);
                var p = $("<p>").text("Rating: " + rating);

                iconImage.attr("src", staticSrc);
                iconImage.addClass("iconGiphy");
                iconImage.attr("data-state", "still");
                iconImage.attr("data-state", staticSrc);
                iconImage.attr("data-animate", defaultAnimatedSrc);
                iconDiv.append(p);
                iconDiv.append(iconImage);
                $("#gifArea").prepend(iconDiv);


            }
        });

    }
    //Submit button click even takes search term from form input, trims and pushes to topics array, displays button
    $("#addShow").on("click", function (event) {
        event.preventDefault();
        var newIcon = $("#iconInput").val().trim();
        topics.push(newIcon);
        console.log(newIcon);
        $("#iconInput").val(" ");
        displayButtons();

    });
    //Function iterates through topics array to display button with array values in "myButtons" section of HTML
    function displayButtons() {
        $("#myButtons").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $('<button class="btn btn-primary">');
            a.attr("id", "icon");
            a.attr("data-search", topics[i]);
            a.text(topics[i]);
            $("#myButtons").append(a);

        }
    }

    displayButtons();

    //Click event on button with id of "show" executes displaySportIcon function
    $(document).on("click", "#icon", displaySportIcon);

    //Click event on GIF's with class of "iconGiphy" executes pausePlayGifs function
    $(document).on("click", ".iconGiphy", pausePayGifs);

    //Function accesses "data-state" attribute and depending on status, changes image source to "data-animate" or "data-still"
    function pausePayGifs() {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }

    }
})