// GOOGLE MAP - DEFAULT
google.maps.event.addDomListener(window, 'load', init);

function init() {
	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(29.57307, 30.82770), // New York
		styles: [{
			"featureType": "administrative.land_parcel",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "landscape.man_made",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "poi",
			"elementType": "labels",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road",
			"elementType": "labels",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"lightness": 20
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"hue": "#f49935"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "labels",
			"stylers": [{
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"hue": "#fad959"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "labels",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "labels",
			"stylers": [{
				"visibility": "simplified"
			}]
		}, {
			"featureType": "transit",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "water",
			"elementType": "all",
			"stylers": [{
				"hue": "#a1cdfc"
			}, {
				"saturation": 30
			}, {
				"lightness": 49
			}]
		}]

	};
	var locations = [
	      ['Main Office:', 29.99307, 31.15770,'124 Haram Street, Giza, Egypt', 2],
	      ['Factory:', 28.76662, 29.23208,'K28 Abu Rawash, Industrial Zone, Egypt', 1]
	    ];

	var mapElement = document.getElementById('map-default');

	var map = new google.maps.Map(mapElement, mapOptions);

			var infowindow = new google.maps.InfoWindow();

		     var marker, i;

		     for (i = 0; i < locations.length; i++) {
		       marker = new google.maps.Marker({
		         position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		         map: map
		       });

		       google.maps.event.addListener(marker, 'click', (function(marker, i) {
		         return function() {
		           infowindow.setContent(locations[i][0]+"<br>" + locations[i][3]);
		           infowindow.open(map, marker);
		         }
		       })(marker, i));
		     }







	// var marker = new google.maps.Marker({
	// 	position: new google.maps.LatLng(29.99307, 31.15770),
	//
	// 	map: map,
	// 	title: 'Main Office'
	// });

}
