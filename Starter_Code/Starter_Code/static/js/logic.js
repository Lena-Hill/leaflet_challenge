// Create the map object with options
var map = L.map('map', {
    center: [37.8, -96.9], // Adjusted to focus on the continental USA
    zoom: 4
  });
  
  // Add a tile layer (the background map image) to our map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  
  // Fetch the earthquake data from the USGS using d3
  d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(createMarkers);

  // Function to create markers for each earthquake
  function createMarkers(data) {
    function onEachFeature(feature, layer) {
      layer.bindPopup(`<h3>Magnitude: ${feature.properties.mag}</h3><hr><p>Depth: ${feature.geometry.coordinates[2]} km</p><p>${new Date(feature.properties.time)}</p>`);
    }
  
    // Define a function to set the marker size based on the earthquake magnitude
    function markerSize(magnitude) {
      return magnitude * 4;  // Scale factor for visibility
    }
  
    // Define a function to color the marker based on earthquake depth
    function depthColor(depth) {
      if (depth > 90) return '#ff3333';  // Deep: Dark red
      else if (depth > 70) return '#ff6633';  // Moderate: Orange red
      else if (depth > 50) return '#ff9933';  // Medium: Orange
      else if (depth > 30) return '#ffcc33';  // Shallow: Yellow
      else return '#00ff00';  // Very shallow: Green
    }
  
    // Create a GeoJSON layer containing the features array
    // on the earthquakeData object
    L.geoJSON(data, {
      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: markerSize(feature.properties.mag),
          fillColor: depthColor(feature.geometry.coordinates[2]),
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
        });
      },
      onEachFeature: onEachFeature
    }).addTo(map);
  }

  // Create a legend to display information about our map
  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 30, 50, 70, 90],  // depth ranges
        labels = [],
        from, to;
  
    for (var i = 0; i < grades.length; i++) {
      from = grades[i];
      to = grades[i + 1];
  
      labels.push(
        '<i style="background:' + depthColor(from + 1) + '"></i> ' +
        from + (to ? '&ndash;' + to + ' km' : '+ km'));
    }
  
    div.innerHTML = labels.join('<br>');  
    return div;
  };
  
  legend.addTo(map);
  