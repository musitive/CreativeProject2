$(document).ready(function() {
	$("#foodButton").click(function() {
        var value = $("#searchField").val();
        console.log(value);

        var myurl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1&tags=taco";
        

        $.ajax({
            url: myurl, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'POST', // The HTTP Method
            data: {}, // Additional parameters here
            datatype: 'json',
            success: function(data) { alert("You are a bold one."); },
            error: function(err) { alert(err); },
            beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "7Rvrgzc0WNmshVRiCKUvl0pRLwIHp1j8HF5jsntFPf4R47ij8Y"); // Enter here your Mashape key
            }
        });
	});
});