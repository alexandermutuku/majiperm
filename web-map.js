//OpenLayers.ProxyHost = "/cgi-bin/proxy.cgi?url=";
/*specifying the extent of the map*/
var extents = new OpenLayers.Bounds(4079939, -162296, 4131475, -127987); 

/*loading various controls to the map*/
var control, controls = [];

   var map = new OpenLayers.Map("map" /*this map is the div id in the html code*/, {
        controls: [
            new OpenLayers.Control.Navigation(),
            new OpenLayers.Control.ArgParser(),
            //new OpenLayers.Control.Attribution(),
            new OpenLayers.Control.LayerSwitcher({'div':OpenLayers.Util.getElement('dropdown-content')}),
            new OpenLayers.Control.MousePosition(),
            //new OpenLayers.Control.ScaleLine(),
            new OpenLayers.Control.PanZoomBar(),
             //new OpenLayers.Control.Zoom(),
            new OpenLayers.Control.KeyboardDefaults()
        ],
        maxExtent: extents,
        minExtent: "auto",
        restrictedExtent: extents /*one cannot pan outside the specified extent*/
    },
        {projection: new OpenLayers.Projection("EPSG:900913")}, /*specifying the projection*/
    

        {units: 'm'},
        {allOverlays: true} /*all other data added will overlay on the basemap*/
        );


   

 //var google_sat = new OpenLayers.Layer.Google("Google Satellite",{type:google.maps.MapTypeId.SATELLITE,numZoomLevels:40});

 var OSM = new OpenLayers.Layer.OSM("OpenStreetMap");  /*loading the OSM basemap*/


/*loading the overlays from GeoServer.web_map is the workspace name. Loading the layer as a WMS*/
  var nairobi_county = new OpenLayers.Layer.WMS (
        "Nairobi County",
        "http://localhost:8080/geoserver/web_map/wms",
        {layers:"web_map:nairobi_county",transparent: true, format: "image/gif"},
        {visibility: true},
        {'displayInLayerSwitcher':true}
);



 var completed = new OpenLayers.Layer.WMS (
        "Completed",
        "http://localhost:8080/geoserver/web_map/wms",
        {layers:"web_map:completed",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);



 var ongoing = new OpenLayers.Layer.WMS (
        "Ongoing",
        "http://localhost:8080/geoserver/web_map/wms",
        {layers:"web_map:ongoing",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);



 var proposed = new OpenLayers.Layer.WMS (
        "Proposed",
        "http://localhost:8080/geoserver/web_map/wms",
        {layers:"web_map:proposed",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);



/*adding the data to the map object*/ 

map.addLayers([OSM,nairobi_county,completed,ongoing,proposed,]);

/*specifying the center of the map and a zoom level of 11*/

map.setCenter(new OpenLayers.LonLat(4099485,-142884),11 );