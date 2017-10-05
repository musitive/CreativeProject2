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
    "country":"IN"}/*,
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
    "country":"BR"}*/
]

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
/*
function codeAddress() {
    var index = 0;
    var index = Math.floor(Math.random() * citiesArr.length);
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
    });
    
  }
*/
$(document).ready(function() {
    $("#weatherButton").click(function(e) {
        
        
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
       });
    });

});