var map = L.map('map',{
        center: new L.LatLng(38.894487, -77.042562),
        zoom: 14,
        scrollWheelZoom: false
        });

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
        maxZoom: 22,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'examples.map-i875mjb7',
}).addTo(map);

L.marker([38.894000, -77.031000]).addTo(map)
        .bindPopup("<b>The Wilson Center - http://www.wilsoncenter.org/directions").openPopup();

var popup = L.popup();
