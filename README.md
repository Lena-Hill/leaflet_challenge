# Earthquake Visualization with Leaflet

## Overview
This project is designed to visualize earthquake data provided by the United States Geological Survey (USGS). Utilizing Leaflet, a leading open-source JavaScript library for mobile-friendly interactive maps, we have developed a tool that plots earthquakes on a world map based on their longitude and latitude. The size of the markers on the map reflects the magnitude of each earthquake, while the color indicates its depth, providing an intuitive display of the seismic activity across the globe.

## Features

- **Interactive Map**: Users can pan and zoom to explore earthquake events worldwide.
- **Magnitude Representation**: Earthquake magnitudes are proportionally represented by the size of the markers.
- **Depth Indication**: The color of each marker signifies the depth of the earthquake, with darker colors representing greater depths.
- **Detailed Popups**: Clicking on a marker reveals a popup with additional information about the earthquake, including its magnitude, depth, and the time of occurrence.
- **Data Source**: The earthquake data is sourced in real-time from the USGS GeoJSON feed, ensuring that the map reflects the most up-to-date information.

## Technologies Used

- **Leaflet.js**: For rendering the interactive map and providing the framework for our visualization.
- **D3.js**: To fetch and process the GeoJSON data from the USGS feed.
- **HTML/CSS**: For structuring and styling the web page.

## Setup

To get the project up and running on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Ensure you have a modern web browser installed, such as Google Chrome or Mozilla Firefox.
3. Open the `index.html` file in your browser to view the map.

## Data

The earthquake data is retrieved from the following USGS GeoJSON feed: `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson`.

## Customization

Users who wish to customize the visualization can do so by modifying the `logic.js` and `style.css` files:

- To change the map's focus or starting zoom level, adjust the corresponding options in the map initialization within `logic.js`.
- To alter the representation of earthquake magnitudes and depths, modify the `markerSize` and `depthColor` functions in `logic.js`.
- CSS styles can be tailored to match specific aesthetic requirements by editing `style.css`.

## Project Structure

- `index.html`: The main HTML document.
- `static/css/style.css`: Custom styles for the map and interface.
- `static/js/logic.js`: JavaScript code that powers the map's functionality and data visualization.

## Acknowledgments

- USGS Earthquake Hazards Program for providing the data.
- Leaflet contributors for the mapping tool.
- The open-source community for support and contributions.

