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
    "<img src=\"https://images-na.ssl-images-amazon.com/images/I/41FJQwQLfgL.jpg\">",
    "<img src=\"http://www.telegraph.co.uk/content/dam/technology/2017/01/11/hushme_trans_NvBQzQNjv4BqypDu90kZXMl1ahZ6bcqgrbWpQL-TsLBiykJQ_7HB4rQ.PNG?imwidth=1400\">",
    "<img src=\"https://media3.s-nbcnews.com/j/newscms/2015_18/1003131/bruno2_6462a62499b91180e00b7352568e7bf5.nbcnews-ux-2880-1000.jpg\">",
    "<img src=\"https://i.amz.mshcdn.com/oCXSvBhdL-Y3SC15Ll-pqte2khE=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2F10-weird-gadgets-that-never-got-off-the-ground%2FMetal%2520Detecting%2520Sandals.jpeg\">",
    "<img src=\"http://cdn.lifebuzz.com/images/112466/lifebuzz-bc5f6f93d54563a9f9c714c2723959de-limit_2000.jpg\">"];

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
                    $("#imgHere").html(images[0]);
                }
                else if(weather == "Clear") {
                    $("#imgHere").html(images[0]);
                }
                else if(weather == "Mostly Cloudy") {
                    $("#imgHere").html(images[0]);
                }
                else if(weather == "Rain") {
                    $("#imgHere").html(images[0]);
                }
                else if(weather == "Unknown") {
                    $("#imgHere").html(images[0]);
                }
                else {

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