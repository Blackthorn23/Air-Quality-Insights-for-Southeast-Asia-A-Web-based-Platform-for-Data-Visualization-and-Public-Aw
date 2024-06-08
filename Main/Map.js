            var map = L.map('map').setView([2.258519, 102.172683], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            var  WAQI_URL  =  "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=a4b92ca690ea6629abfa0145d653961e5e25394d";  
              var  WAQI_ATTR  =  'Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>';  
              var  waqiLayer  =  L.tileLayer(WAQI_URL,  {  attribution:  WAQI_ATTR  }); 
              map.addLayer(waqiLayer);  

              //Coordinates Popup
            var popup = L.popup();
            function onMapClick(e) {
                popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(map);
            }
            map.on('click', onMapClick);