var citiesArr = [
    {"city":"Tokyo", 
    "country":"JP"},
    {"city":"New York City",
    "country":"US"},
    /*"Sao Paulo",
    "Seoul",
    "Mexico City",
    "Osaka",
    "Manila",
    "Mumbai",
    "Belhi",
    "Jakarta",
    "Lagos",
    "Kolkata",
    "Cairo",
    "Los Angeles",
    "Buenos Aires",
    "Rio de Janeiro",
    "Bali",
    "London",
    "Paris",
    "Rome",
    "Crete",
    "Barcelona",
    "Siem Reap",
    "Prague",
    "Phuket",
    "Istanbul",
    "Jamaica",
    "Hoi An",
    "Saint Petersburg",
    "Roatan",
    "Marrakech",
    "Beijing",
    "Ambergris Caye",
    "Taipei",
    "St Martin",
    "Singapore",
    "Playa del Carmen",
    "Dubai",
    "Grand Cayman",
    "Honolulu",
    "Kathmandu",
    "Bora Bora",
    "Cusco"*/
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

function codeAddress() {
    var index = Math.floor() % citiesArr.length;
    var address = citiesArr[0];
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


$(document).ready(function() {
	
});