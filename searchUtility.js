$(document).ready(function() {
	$("#foodButton").click(function() {
        var value = $("#searchField").val();
        console.log(value);

        var myurl = "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet";

        $.ajax({
            url : myurl,
            dataType : "json",
            success : function(parsed_json) {
                alert("You are a bold one.");
            },
            error: function(err,data) {
                console.log(err);
                console.log(data);
            }
        });

	});
});