// Create a WorldWindow for the canvas.
var wwd = new WorldWind.WorldWindow("canvasOne");

wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.BMNGLandsatLayer());

// wwd.addLayer(new WorldWind.CompassLayer());
// wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
// wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

// Add a placemark
var placemarkLayer = new WorldWind.RenderableLayer();
wwd.addLayer(placemarkLayer);

var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

placemarkAttributes.imageOffset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION,
        0.3,
        WorldWind.OFFSET_FRACTION,
        0.0
);

placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION,
        0.5,
        WorldWind.OFFSET_FRACTION,
        1.0
);

placemarkAttributes.imageSource =
        WorldWind.configuration.baseUrl + "images/pushpins/castshadow-blue.png";

var position = new WorldWind.Position(30.0, -120.0, 100.0);
var placemark = new WorldWind.Placemark(position, false, placemarkAttributes);

placemark.label = "Duststorm";
placemark.alwaysOnTop = true;

placemarkLayer.addRenderable(placemark);

//End

var placemarkAttributes2 = new WorldWind.PlacemarkAttributes(null);

placemarkAttributes2.imageOffset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION,
        0.3,
        WorldWind.OFFSET_FRACTION,
        0.0
);

placemarkAttributes2.labelAttributes.offset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION,
        0.5,
        WorldWind.OFFSET_FRACTION,
        1.0
);

placemarkAttributes2.imageSource =
        WorldWind.configuration.baseUrl + "images/pushpins/castshadow-red.png";

var position = new WorldWind.Position(55.0, -106.0, 100.0);
var placemark = new WorldWind.Placemark(position, false, placemarkAttributes2);

placemark.label = "Wildfire";
placemark.alwaysOnTop = true;

placemarkLayer.addRenderable(placemark);

//End

var placemarkAttributes3 = new WorldWind.PlacemarkAttributes(null);

placemarkAttributes3.imageOffset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION,
        0.3,
        WorldWind.OFFSET_FRACTION,
        0.0
);

placemarkAttributes3.labelAttributes.offset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION,
        0.5,
        WorldWind.OFFSET_FRACTION,
        1.0
);

placemarkAttributes3.imageSource =
        WorldWind.configuration.baseUrl +
        "images/pushpins/castshadow-black.png";

var position = new WorldWind.Position(70.0, 90.0, 100.0);
var placemark = new WorldWind.Placemark(position, false, placemarkAttributes3);

placemark.label = "Tsunami";
placemark.alwaysOnTop = true;

placemarkLayer.addRenderable(placemark);

//End

var placemarkAttributes4 = new WorldWind.PlacemarkAttributes(null);

placemarkAttributes4.imageOffset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION,
        0.3,
        WorldWind.OFFSET_FRACTION,
        0.0
);

placemarkAttributes4.labelAttributes.offset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION,
        0.5,
        WorldWind.OFFSET_FRACTION,
        1.0
);

placemarkAttributes4.imageSource =
        WorldWind.configuration.baseUrl +
        "images/pushpins/castshadow-green.png";

var position = new WorldWind.Position(120.0, 90.0, 100.0);
var placemark = new WorldWind.Placemark(position, false, placemarkAttributes4);

placemark.label = "Flood";
placemark.alwaysOnTop = true;

placemarkLayer.addRenderable(placemark);

//End

var placemarkAttributes5 = new WorldWind.PlacemarkAttributes(null);

placemarkAttributes5.imageOffset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION,
        0.3,
        WorldWind.OFFSET_FRACTION,
        0.0
);

placemarkAttributes5.labelAttributes.offset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION,
        0.5,
        WorldWind.OFFSET_FRACTION,
        1.0
);

placemarkAttributes5.imageSource =
        WorldWind.configuration.baseUrl +
        "images/pushpins/castshadow-orange.png";

var position = new WorldWind.Position(80.0, -150.0, 100.0);
var placemark = new WorldWind.Placemark(position, false, placemarkAttributes5);

placemark.label = "Thunderstorm";
placemark.alwaysOnTop = true;

placemarkLayer.addRenderable(placemark);

//End

// Add WMS imagery
var serviceAddress =
        "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
var layerName = "MOD_LSTD_CLIM_M";

var createLayer = function (xmlDom) {
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerName);
        var wmsConfig =
                WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
};

var logError = function (jqXhr, text, exception) {
        console.log(
                "There was a failure retrieving the capabilities document: " +
                        text +
                        " exception: " +
                        exception
        );
};

$.get(serviceAddress).done(createLayer).fail(logError);
