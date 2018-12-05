	var map;
	var mapm;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
      	  center: new google.maps.LatLng(-6.708253968671543, 105.71319580078125),
          mapTypeId: 'roadmap',
          disableDefaultUI: true,
          // gestureHandling: 'greedy',
          styles:
			[
			  {
			    "elementType": "geometry",
			    "stylers": [
			      {
			        // "color": "#242f3e"
			        "color": "#24383b"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        // "color": "#746855"
			        "color": "#cbcbd5"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        // "color": "#242f3e"
			        "color": "#263c3f"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.locality",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        // "color": "#d59563"
			        "color": "#aaded9"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#d59563"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        // "color": "#263c3f"
			        "color": "#242f3e"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#6b9a76"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#38414e"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      {
			        "color": "#212a37"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9ca5b3"
			      }
			    ]
			  },
			  {
			    "featureType": "road.arterial",
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#746855"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      {
			        "color": "#1f2835"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#f3d19c"
			      }
			    ]
			  },
			  {
			    "featureType": "road.local",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "transit",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#2f3948"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.station",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#d59563"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#291f31"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#515c6d"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#17263c"
			      }
			    ]
			  }
			]
        });

        mapm = new google.maps.Map(document.getElementById('mapm'), {
          zoom: 8,
      	  // center: new google.maps.LatLng(-7.249409128798532, 108.12469482421875),
      	  center: new google.maps.LatLng(-7.86998528, 107.70527424),
          mapTypeId: 'roadmap',
          disableDefaultUI: true,
          // gestureHandling: 'greedy',
          styles:
			[
			  {
			    "elementType": "geometry",
			    "stylers": [
			      {
			        // "color": "#242f3e"
			        "color": "#24383b"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        // "color": "#746855"
			        "color": "#cbcbd5"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        // "color": "#242f3e"
			        "color": "#263c3f"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.locality",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        // "color": "#d59563"
			        "color": "#aaded9"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#d59563"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        // "color": "#263c3f"
			        "color": "#242f3e"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#6b9a76"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#38414e"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      {
			        "color": "#212a37"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9ca5b3"
			      }
			    ]
			  },
			  {
			    "featureType": "road.arterial",
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#746855"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      {
			        "color": "#1f2835"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#f3d19c"
			      }
			    ]
			  },
			  {
			    "featureType": "road.local",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "transit",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#2f3948"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.station",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#d59563"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#291f31"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#515c6d"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#17263c"
			      }
			    ]
			  }
			]
        });

        function initialise() {
		var myLatlng = new google.maps.LatLng(-7.383028923165767, 108.20849776268005); 
		var image = new google.maps.MarkerImage("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBB%0D%0AZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9u%0D%0AOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBT%0D%0AVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzEx%0D%0ALmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3%0D%0ALnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxp%0D%0AbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMjUuNjg4cHgiIGhlaWdodD0iMzUuMzc1cHgi%0D%0AIHZpZXdCb3g9IjAgMCAyNS42ODggMzUuMzc1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAy%0D%0ANS42ODggMzUuMzc1IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxjaXJjbGUgZmlsbD0i%0D%0AI0ZGRkZGRiIgY3g9IjEzLjM3OCIgY3k9IjEyLjkzIiByPSI2LjAyIi8+DQoJPHBhdGggZmlsbD0i%0D%0AIzAyNkU2NSIgZD0iTTEyLjUwOCwwLjM3NEM1LjM5NCwwLjU4NywwLjE3OCw3LjA2NSwwLjM3MSwx%0D%0AMy41MjFjMC4xNTQsNS4xNDgsMTMuMTc2LDIxLjU4MywxMy4xNzYsMjEuNTgzDQoJCVMyNS41NjMs%0D%0AMTcuOTIxLDI1LjQxLDEyLjc3M0MyNS4yMTcsNi4zMTYsMTkuNjIzLDAuMTYxLDEyLjUwOCwwLjM3%0D%0ANHogTTEzLjA2MSwxOC44MjRjLTMuMTcsMC4wOTUtNS44MTYtMi4zOTctNS45MTEtNS41NjUNCgkJ%0D%0AYy0wLjA5Ni0zLjE3MiwyLjM5Ni01LjgxOCw1LjU2Ny01LjkxM2MzLjE3LTAuMDk1LDUuODE2LDIu%0D%0AMzk4LDUuOTEsNS41NjlDMTguNzIzLDE2LjA4NCwxNi4yMywxOC43MjksMTMuMDYxLDE4LjgyNHoi%0D%0ALz4NCgk8Zz4NCgkJPHBvbHlnb24gZmlsbD0iIzAyNkU2NSIgcG9pbnRzPSIxNS42MjcsMTAuNzcx%0D%0AIDEyLjg2OSw5LjE4IDEwLjExMywxMC43MjkgMTAuMTE1LDEzLjk0OSAxMC45MjIsMTQuNDc5IDEw%0D%0ALjkzMSwxMS4yMDUgDQoJCQkxMi44NzEsMTAuMTIxIDE0Ljc4MywxMS4xOTcgMTQuNzkxLDEzLjQ4%0D%0AOCAxMi44NzEsMTQuNTkxIDEyLjg3MywxNS41NCAxNC44NzksMTYuNjc4IDE1LjYyOSwxNi4xNzMg%0D%0AMTMuNjg2LDE1LjA3MyAxNS42MjksMTMuOTUyIA0KCQkJCQkiLz4NCgkJPHBvbHlnb24gZmlsbD0i%0D%0AIzAyNkU2NSIgcG9pbnRzPSIxMy45MzIsMTMuMDEgMTIuODcxLDEzLjU4NyAxMS43OTQsMTIuOTc3%0D%0AIDExLjc4OSwxMS43NTIgMTIuODcxLDExLjExNyAxMy45MjQsMTEuNzU4IA0KCQkJMTQuNTM1LDEx%0D%0ALjMyOCAxMi44NjksMTAuNCAxMS4xNzIsMTEuMzU1IDExLjE3MywxMy4zMzggMTEuMTcyLDE0LjU4%0D%0AMiAxMS43NiwxNC45MDUgMTEuNzgxLDEzLjY4OCAxMi44NzMsMTQuMzE5IDE0LjUzNSwxMy4zNjEg%0D%0ACQkNCgkJCSIvPg0KCQk8cG9seWdvbiBmaWxsPSIjMDI2RTY1IiBwb2ludHM9IjEyLjI2NCwxMi43%0D%0AMSAxMi41MTMsMTIuNTUzIDEyLjUxNCwxMi4xNDIgMTIuODcxLDExLjk0MiAxMy4yMjMsMTIuMTE0%0D%0AIDEzLjIxOSwxMi41ODQgDQoJCQkxMy40MSwxMi42ODggMTMuNzIzLDEyLjg1MiAxMy43MjMsMTIu%0D%0AODUyIDEzLjcyMywxMS44NjggMTIuODcxLDExLjM3NyAxMi4wMjEsMTEuODU2IDEyLjAyMSwxMi44%0D%0ANSAxMi4wMjEsMTIuODUgCQkiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==", null, null, null, new google.maps.Size(75,90)); // Create a variable for our marker image.
		var imagem = new google.maps.MarkerImage("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBB%0D%0AZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9u%0D%0AOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBT%0D%0AVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzEx%0D%0ALmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3%0D%0ALnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxp%0D%0AbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMjUuNjg4cHgiIGhlaWdodD0iMzUuMzc1cHgi%0D%0AIHZpZXdCb3g9IjAgMCAyNS42ODggMzUuMzc1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAy%0D%0ANS42ODggMzUuMzc1IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxjaXJjbGUgZmlsbD0i%0D%0AI0ZGRkZGRiIgY3g9IjEzLjM3OCIgY3k9IjEyLjkzIiByPSI2LjAyIi8+DQoJPHBhdGggZmlsbD0i%0D%0AIzAyNkU2NSIgZD0iTTEyLjUwOCwwLjM3NEM1LjM5NCwwLjU4NywwLjE3OCw3LjA2NSwwLjM3MSwx%0D%0AMy41MjFjMC4xNTQsNS4xNDgsMTMuMTc2LDIxLjU4MywxMy4xNzYsMjEuNTgzDQoJCVMyNS41NjMs%0D%0AMTcuOTIxLDI1LjQxLDEyLjc3M0MyNS4yMTcsNi4zMTYsMTkuNjIzLDAuMTYxLDEyLjUwOCwwLjM3%0D%0ANHogTTEzLjA2MSwxOC44MjRjLTMuMTcsMC4wOTUtNS44MTYtMi4zOTctNS45MTEtNS41NjUNCgkJ%0D%0AYy0wLjA5Ni0zLjE3MiwyLjM5Ni01LjgxOCw1LjU2Ny01LjkxM2MzLjE3LTAuMDk1LDUuODE2LDIu%0D%0AMzk4LDUuOTEsNS41NjlDMTguNzIzLDE2LjA4NCwxNi4yMywxOC43MjksMTMuMDYxLDE4LjgyNHoi%0D%0ALz4NCgk8Zz4NCgkJPHBvbHlnb24gZmlsbD0iIzAyNkU2NSIgcG9pbnRzPSIxNS42MjcsMTAuNzcx%0D%0AIDEyLjg2OSw5LjE4IDEwLjExMywxMC43MjkgMTAuMTE1LDEzLjk0OSAxMC45MjIsMTQuNDc5IDEw%0D%0ALjkzMSwxMS4yMDUgDQoJCQkxMi44NzEsMTAuMTIxIDE0Ljc4MywxMS4xOTcgMTQuNzkxLDEzLjQ4%0D%0AOCAxMi44NzEsMTQuNTkxIDEyLjg3MywxNS41NCAxNC44NzksMTYuNjc4IDE1LjYyOSwxNi4xNzMg%0D%0AMTMuNjg2LDE1LjA3MyAxNS42MjksMTMuOTUyIA0KCQkJCQkiLz4NCgkJPHBvbHlnb24gZmlsbD0i%0D%0AIzAyNkU2NSIgcG9pbnRzPSIxMy45MzIsMTMuMDEgMTIuODcxLDEzLjU4NyAxMS43OTQsMTIuOTc3%0D%0AIDExLjc4OSwxMS43NTIgMTIuODcxLDExLjExNyAxMy45MjQsMTEuNzU4IA0KCQkJMTQuNTM1LDEx%0D%0ALjMyOCAxMi44NjksMTAuNCAxMS4xNzIsMTEuMzU1IDExLjE3MywxMy4zMzggMTEuMTcyLDE0LjU4%0D%0AMiAxMS43NiwxNC45MDUgMTEuNzgxLDEzLjY4OCAxMi44NzMsMTQuMzE5IDE0LjUzNSwxMy4zNjEg%0D%0ACQkNCgkJCSIvPg0KCQk8cG9seWdvbiBmaWxsPSIjMDI2RTY1IiBwb2ludHM9IjEyLjI2NCwxMi43%0D%0AMSAxMi41MTMsMTIuNTUzIDEyLjUxNCwxMi4xNDIgMTIuODcxLDExLjk0MiAxMy4yMjMsMTIuMTE0%0D%0AIDEzLjIxOSwxMi41ODQgDQoJCQkxMy40MSwxMi42ODggMTMuNzIzLDEyLjg1MiAxMy43MjMsMTIu%0D%0AODUyIDEzLjcyMywxMS44NjggMTIuODcxLDExLjM3NyAxMi4wMjEsMTEuODU2IDEyLjAyMSwxMi44%0D%0ANSAxMi4wMjEsMTIuODUgCQkiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==", null, null, null, new google.maps.Size(55,70)); // Create a variable for our marker image.
		var marker = new google.maps.Marker({ // Set the marker
			position: myLatlng, // Position marker to coordinates
			icon:image, //use our image as the marker
			animation: google.maps.Animation.DROP,
			map: map, // assign the market to our map variable
			title: 'Riyadh Firdaus Ahmad' // Marker ALT Text
		});
		var markerm = new google.maps.Marker({ // Set the marker
			position: myLatlng, // Position marker to coordinates
			icon:imagem, //use our image as the marker
			animation: google.maps.Animation.DROP,
			map: mapm, // assign the market to our map variable
			title: 'Riyadh Firdaus Ahmad' // Marker ALT Text
		});
		}
		function toggleBounce() {
	        if (marker.getAnimation() !== null) {
	          marker.setAnimation(null);
	        } else {
	          marker.setAnimation(google.maps.Animation.BOUNCE);
	        }
	      }
	      function toggleBounce() {
	        if (markerm.getAnimation() !== null) {
	          markerm.setAnimation(null);
	        } else {
	          markerm.setAnimation(google.maps.Animation.BOUNCE);
	        }
	      }
		google.maps.event.addDomListener(window, 'load', initialise);
      }


