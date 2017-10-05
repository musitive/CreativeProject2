var citiesArr = [
    {"city":"Tokyo", 
    "country":"JP"},
    {"city":"New York City",
    "country":"US"},
    {"city":"Sao Paulo",
    "country":"BR"},
    {"city":"Seoul",
    "country":"KR"},
    {"city":"Mexico City",
    "country":"MX"},
    {"city":"Osaka",
    "country":"JP"},
    {"city":"Manila",
    "country":"PH"},
    {"city":"Mumbai",
    "country":"IN"},
    {"city":"Belhi",
    "country":"NP"},
    {"city":"Jakarta",
    "country":"IN"},
    {"city":"Lagos",
    "country":"BR"},
    {"city":"Kolkata",
    "country":"BR"},
    {"city":"Cairo",
    "country":"BR"},
    {"city":"Los Angeles",
    "country":"BR"},
    {"city":"Buenos Aires",
    "country":"BR"},
    {"city":"Rio de Janeiro",
    "country":"BR"},
    {"city":"Bali",
    "country":"BR"},
    {"city":"London",
    "country":"BR"},
    {"city":"Paris",
    "country":"BR"},
    {"city":"Rome",
    "country":"BR"},
    {"city":"Crete",
    "country":"BR"},
    {"city":"Barcelona",
    "country":"BR"},
    {"city":"Siem Reap",
    "country":"BR"},
    {"city":"Prague",
    "country":"BR"},
    {"city":"Phuket",
    "country":"BR"},
    {"city":"Istanbul",
    "country":"BR"},
    {"city":"Jamaica",
    "country":"BR"},
    {"city":"Hoi An",
    "country":"BR"},
    {"city":"Saint Petersburg",
    "country":"BR"},
    {"city":"Roatan",
    "country":"BR"},
    {"city":"Marrakech",
    "country":"BR"},
    {"city":"Beijing",
    "country":"BR"},
    {"city":"Ambergris Caye",
    "country":"BR"},
    {"city":"Taipei",
    "country":"BR"},
    {"city":"St Martin",
    "country":"BR"},
    {"city":"Singapore",
    "country":"BR"},
    {"city":"Playa del Carmen",
    "country":"BR"},
    {"city":"Dubai",
    "country":"BR"},
    {"city":"Grand Cayman",
    "country":"BR"},
    {"city":"Honolulu",
    "country":"BR"},
    {"city":"Kathmandu",
    "country":"BR"},
    {"city":"Bora Bora",
    "country":"BR"},
    {"city":"Cusco",
    "country":"BR"}
]

$(document).ready(function() {
    $("#travelButton").click(function(e) {
        var value = $("#cityField").val();
        console.log(value);
        e.preventDefault();
        $("#displayCity").text(value);

        var myurl= "https://api.wunderground.com/api/7f300afd33e5dd5c/geolookup/conditions/q/IT/Rome.json";
        console.log(myurl);
        $.ajax({
            url : myurl,
            dataType : "json",
            success : function(parsed_json) {
                var location = parsed_json['location']['city'];
                var temp_string = parsed_json['current_observation']['temperature_string'];
                var current_weather = parsed_json['current_observation']['weather'];
                everything = "<ul>";
                everything += "<li>Location: "+location+"</li>";
                everything += "<li>Temperature: "+temp_string+"</li>";
                everything += "<li>Weather: "+current_weather+"</li>";
                everything += "</ul>";
                $("#weather").html(everything);
            }
        });
    });

});