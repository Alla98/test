var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_yaounde4_1 = new ol.format.GeoJSON();
var features_yaounde4_1 = format_yaounde4_1.readFeatures(json_yaounde4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yaounde4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yaounde4_1.addFeatures(features_yaounde4_1);
var lyr_yaounde4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_yaounde4_1, 
                style: style_yaounde4_1,
                popuplayertitle: 'yaounde4',
                interactive: true,
                title: '<img src="styles/legend/yaounde4_1.png" /> yaounde4'
            });
var format_quartiers_yaounde4_2 = new ol.format.GeoJSON();
var features_quartiers_yaounde4_2 = format_quartiers_yaounde4_2.readFeatures(json_quartiers_yaounde4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_quartiers_yaounde4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_quartiers_yaounde4_2.addFeatures(features_quartiers_yaounde4_2);
var lyr_quartiers_yaounde4_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_quartiers_yaounde4_2, 
                style: style_quartiers_yaounde4_2,
                popuplayertitle: 'quartiers_yaounde4',
                interactive: true,
                title: '<img src="styles/legend/quartiers_yaounde4_2.png" /> quartiers_yaounde4'
            });
var format_routes_yaounde4_3 = new ol.format.GeoJSON();
var features_routes_yaounde4_3 = format_routes_yaounde4_3.readFeatures(json_routes_yaounde4_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_routes_yaounde4_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_routes_yaounde4_3.addFeatures(features_routes_yaounde4_3);
var lyr_routes_yaounde4_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_routes_yaounde4_3, 
                style: style_routes_yaounde4_3,
                popuplayertitle: 'routes_yaounde4',
                interactive: true,
                title: '<img src="styles/legend/routes_yaounde4_3.png" /> routes_yaounde4'
            });
var format_stations_service_4 = new ol.format.GeoJSON();
var features_stations_service_4 = format_stations_service_4.readFeatures(json_stations_service_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stations_service_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stations_service_4.addFeatures(features_stations_service_4);
var lyr_stations_service_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stations_service_4, 
                style: style_stations_service_4,
                popuplayertitle: 'stations_service',
                interactive: true,
                title: '<img src="styles/legend/stations_service_4.png" /> stations_service'
            });
var format_sapeur_pompier_5 = new ol.format.GeoJSON();
var features_sapeur_pompier_5 = format_sapeur_pompier_5.readFeatures(json_sapeur_pompier_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sapeur_pompier_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sapeur_pompier_5.addFeatures(features_sapeur_pompier_5);
var lyr_sapeur_pompier_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sapeur_pompier_5, 
                style: style_sapeur_pompier_5,
                popuplayertitle: 'sapeur_pompier',
                interactive: true,
                title: '<img src="styles/legend/sapeur_pompier_5.png" /> sapeur_pompier'
            });
var group_Infrastructure = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Infrastructure'});

lyr_ESRITopo_0.setVisible(true);lyr_yaounde4_1.setVisible(true);lyr_quartiers_yaounde4_2.setVisible(true);lyr_routes_yaounde4_3.setVisible(true);lyr_stations_service_4.setVisible(true);lyr_sapeur_pompier_5.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_yaounde4_1,lyr_quartiers_yaounde4_2,lyr_routes_yaounde4_3,lyr_stations_service_4,lyr_sapeur_pompier_5];
lyr_yaounde4_1.set('fieldAliases', {'PROVINCE': 'PROVINCE', 'DIVISION': 'DIVISION', 'SUBDIV': 'SUBDIV', 'SUPERFICIE': 'SUPERFICIE', });
lyr_quartiers_yaounde4_2.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_routes_yaounde4_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_stations_service_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOM': 'NOM', 'quartier_i': 'quartier_i', });
lyr_sapeur_pompier_5.set('fieldAliases', {'id': 'id', 'quartier_i': 'quartier_i', });
lyr_yaounde4_1.set('fieldImages', {'PROVINCE': 'TextEdit', 'DIVISION': 'TextEdit', 'SUBDIV': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_quartiers_yaounde4_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_routes_yaounde4_3.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_stations_service_4.set('fieldImages', {'OBJECTID': '', 'NOM': '', 'quartier_i': '', });
lyr_sapeur_pompier_5.set('fieldImages', {'id': 'TextEdit', 'quartier_i': 'TextEdit', });
lyr_yaounde4_1.set('fieldLabels', {'PROVINCE': 'no label', 'DIVISION': 'no label', 'SUBDIV': 'no label', 'SUPERFICIE': 'no label', });
lyr_quartiers_yaounde4_2.set('fieldLabels', {'id': 'no label', 'name': 'inline label - always visible', });
lyr_routes_yaounde4_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_stations_service_4.set('fieldLabels', {'OBJECTID': 'no label', 'NOM': 'inline label - visible with data', 'quartier_i': 'no label', });
lyr_sapeur_pompier_5.set('fieldLabels', {'id': 'no label', 'quartier_i': 'no label', });
lyr_sapeur_pompier_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});