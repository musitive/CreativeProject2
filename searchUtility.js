var citiesArr = [
    {"city":"Tokyo", 
    "country":"JP"},
    {"city":"New York City",
    "country":"US"},
    {"city":"Seoul",
    "country":"KR"},
    {"city":"Mexico City",
    "country":"MX"},
    {"city":"Mumbai",
    "country":"IN"},
    {"city":"Jakarta",
    "country":"IN"},
    {"city":"Lagos",
    "country":"NG"},
    {"city":"Kolkata",
    "country":"IN"},
    {"city":"Cairo",
    "country":"EG"},
    {"city":"Buenos Aires",
    "country":"BR"},
    {"city":"Rio de Janeiro",
    "country":"BR"},
    {"city":"London",
    "country":"UK"},
    {"city":"Paris",
    "country":"FR"},
    {"city":"Rome",
    "country":"IT"},
    {"city":"Crete",
    "country":"GR"},
    {"city":"Barcelona",
    "country":"ES"},
    {"city":"Siem Reap",
    "country":"KH"},
    {"city":"Prague",
    "country":"CZ"},
    {"city":"Phuket",
    "country":"TH"},
    {"city":"Istanbul",
    "country":"TR"},
    {"city":"Hoi An",
    "country":"VN"},
    {"city":"Saint Petersburg",
    "country":"RU"},
    {"city":"Roatan",
    "country":"HN"},
    {"city":"Marrakech",
    "country":"MA"},
    {"city":"Ambergris Caye",
    "country":"BZ"},
    {"city":"Taipei",
    "country":"TW"},
    {"city":"Singapore",
    "country":"SG"},
    {"city":"Playa del Carmen",
    "country":"MX"},
    {"city":"Dubai",
    "country":"AE"},
    {"city":"Kathmandu",
    "country":"NP"},
    {"city":"Bora Bora",
    "country":"PF"},
]

var images = [
    "<img src=\"http://www.sitkanature.org/wordpress/wp-content/gallery/20100923/20100923-overcast-2.jpg\">",
    "<img src=\"http://chrisworks.net/wp-content/uploads/2014/11/partly-cloudy.jpg\">",
    "<img src=\"http://media.istockphoto.com/photos/clear-blue-sky-background-picture-id508544168?k=6&m=508544168&s=612x612&w=0&h=RyH8EQOHEQnn-WdJqjn3EpyW6a0ppCtW_iLHKSBXAlk=\">",
    "<img src=\"https://pre15.deviantart.net/aafa/th/pre/i/2010/220/9/1/sky_57_by_sed_rah_stock.jpg\">",
    "<img src=\"http://media.moddb.com/images/downloads/1/120/119783/rain-04.jpg\">",
    "<img src=\"http://www.trbimg.com/img-58989ac0/turbine/sd-me-light-rain-20170205\">",
    "<img src=\"https://upload.wikimedia.org/wikipedia/en/6/60/Faisal_Mosque_10.jpg\">",
    "<img src=\"http://www.guttercleaningnc.com/wp-content/uploads/2013/01/inclement_weather-450.png\">"
];

var geocoder;
var map;
function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var mapOptions = {
    zoom: 8,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

$(document).ready(function() {
    $("#weatherButton").click(function(e) {
        var weather;
        var index = Math.floor(Math.random() * citiesArr.length);
        e.preventDefault();

        var myurl= "https://api.wunderground.com/api/7f300afd33e5dd5c/geolookup/conditions/q/" + citiesArr[index]['country'] + "/" + citiesArr[index]['city'] + ".json";
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
                weather = current_weather;
                if(weather == "Overcast") {
                    $("#imgHere").html(images[0]);
                }
                else if(weather == "Partly Cloudy") {
                    $("#imgHere").html(images[1]);
                }
                else if(weather == "Clear") {
                    $("#imgHere").html(images[2]);
                }
                else if(weather == "Mostly Cloudy") {
                    $("#imgHere").html(images[3]);
                }
                else if(weather == "Rain") {
                    $("#imgHere").html(images[4]);
                }
                else if(weather == "Light Rain") {
                    $("#imgHere").html(images[5]);
                }
                else if(weather == "Haze") {
                    $("#imgHere").html(images[6]);
                }
                else {
                    $("#imgHere").html(images[7]);
                }
            }
        });

         console.log(citiesArr.length);
         console.log(index);
       var address = citiesArr[index].city;
       geocoder.geocode( { 'address': address}, function(results, status) {
         if (status == 'OK') {
           map.setCenter(results[0].geometry.location);
           var marker = new google.maps.Marker({
               map: map,
               position: results[0].geometry.location
           });
         } else {
           alert('Geocode was not successful for the following reason: ' + status);
         }

        var url2 = "https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&key=9hq7azzrrv6h2qhvbe2vjuwm&sort_order=best&phrase=" + citiesArr[index]['city'];
        console.log(url2);
       });
    });

});