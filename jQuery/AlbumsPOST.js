$("document").ready(function() {

	$.post("getAlbums.php", {"artist_id" : "1"}, function(data){
		console.log(data);
		console.log(data.albums);
		console.log(data.albums.length);
		$.each(data.albums, function(index, value) {	
			console.log(value);
			$("#myDiv").append(`${value.album_name} <br>`);
		});

	  }, "json");
  
});



