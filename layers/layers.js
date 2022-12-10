ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([321253.062965, 4064020.869276, 326029.093154, 4067247.916701]);
var wms_layers = [];

var lyr_Ortoimagen_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortoimagen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_0, 0]);
var format_A_Limite_provincias_Andalucia_1 = new ol.format.GeoJSON();
var features_A_Limite_provincias_Andalucia_1 = format_A_Limite_provincias_Andalucia_1.readFeatures(json_A_Limite_provincias_Andalucia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_A_Limite_provincias_Andalucia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_Limite_provincias_Andalucia_1.addFeatures(features_A_Limite_provincias_Andalucia_1);
var lyr_A_Limite_provincias_Andalucia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A_Limite_provincias_Andalucia_1, 
                style: style_A_Limite_provincias_Andalucia_1,
                interactive: false,
                title: '<img src="styles/legend/A_Limite_provincias_Andalucia_1.png" /> A_Limite_provincias_Andalucia'
            });
var format_Pinar_de_Yunquera_2 = new ol.format.GeoJSON();
var features_Pinar_de_Yunquera_2 = format_Pinar_de_Yunquera_2.readFeatures(json_Pinar_de_Yunquera_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Pinar_de_Yunquera_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pinar_de_Yunquera_2.addFeatures(features_Pinar_de_Yunquera_2);
var lyr_Pinar_de_Yunquera_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pinar_de_Yunquera_2, 
                style: style_Pinar_de_Yunquera_2,
                interactive: false,
                title: '<img src="styles/legend/Pinar_de_Yunquera_2.png" /> Pinar_de_Yunquera'
            });
var format_Inventario_vect_3 = new ol.format.GeoJSON();
var features_Inventario_vect_3 = format_Inventario_vect_3.readFeatures(json_Inventario_vect_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Inventario_vect_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inventario_vect_3.addFeatures(features_Inventario_vect_3);cluster_Inventario_vect_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Inventario_vect_3
});
var lyr_Inventario_vect_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Inventario_vect_3, 
                style: style_Inventario_vect_3,
                interactive: true,
                title: '<img src="styles/legend/Inventario_vect_3.png" /> Inventario_vect'
            });
var format_Canales_4 = new ol.format.GeoJSON();
var features_Canales_4 = format_Canales_4.readFeatures(json_Canales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Canales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canales_4.addFeatures(features_Canales_4);
var lyr_Canales_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Canales_4, 
                style: style_Canales_4,
                interactive: true,
                title: '<img src="styles/legend/Canales_4.png" /> Canales'
            });

lyr_Ortoimagen_0.setVisible(true);lyr_A_Limite_provincias_Andalucia_1.setVisible(true);lyr_Pinar_de_Yunquera_2.setVisible(true);lyr_Inventario_vect_3.setVisible(true);lyr_Canales_4.setVisible(true);
var layersList = [lyr_Ortoimagen_0,lyr_A_Limite_provincias_Andalucia_1,lyr_Pinar_de_Yunquera_2,lyr_Inventario_vect_3,lyr_Canales_4];
lyr_A_Limite_provincias_Andalucia_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PROVINCIAS': 'PROVINCIAS', 'PROVINCI_1': 'PROVINCI_1', 'PROVINCIA': 'PROVINCIA', 'SUM__P_F45': 'SUM__P_F45', 'TSUM__P_F4': 'TSUM__P_F4', 'TSUM__P__1': 'TSUM__P__1', 'SUM_SUM_C2': 'SUM_SUM_C2', 'SUM_C2': 'SUM_C2', 'C1': 'C1', 'C2': 'C2', 'C3': 'C3', 'C4': 'C4', 'C5': 'C5', 'C6': 'C6', 'C7': 'C7', 'C8': 'C8', 'C9': 'C9', 'C10': 'C10', });
lyr_Pinar_de_Yunquera_2.set('fieldAliases', {'CODIGO_JA': 'CODIGO_JA', 'NOMBRE': 'NOMBRE', 'ACCESO_INF': 'ACCESO_INF', 'PROVINCIAS': 'PROVINCIAS', 'TIPO_TITUL': 'TIPO_TITUL', 'SUP_HA': 'SUP_HA', });
lyr_Inventario_vect_3.set('fieldAliases', {'PARCELA': 'PARCELA', 'Y': 'Y', 'X': 'X', 'Nparc': 'Nparc', });
lyr_Canales_4.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', 'CAUCE': 'CAUCE', });
lyr_A_Limite_provincias_Andalucia_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PROVINCIAS': 'TextEdit', 'PROVINCI_1': 'TextEdit', 'PROVINCIA': 'TextEdit', 'SUM__P_F45': 'TextEdit', 'TSUM__P_F4': 'TextEdit', 'TSUM__P__1': 'TextEdit', 'SUM_SUM_C2': 'TextEdit', 'SUM_C2': 'TextEdit', 'C1': 'TextEdit', 'C2': 'TextEdit', 'C3': 'TextEdit', 'C4': 'TextEdit', 'C5': 'TextEdit', 'C6': 'TextEdit', 'C7': 'TextEdit', 'C8': 'TextEdit', 'C9': 'TextEdit', 'C10': 'TextEdit', });
lyr_Pinar_de_Yunquera_2.set('fieldImages', {'CODIGO_JA': 'TextEdit', 'NOMBRE': 'TextEdit', 'ACCESO_INF': 'TextEdit', 'PROVINCIAS': 'TextEdit', 'TIPO_TITUL': 'TextEdit', 'SUP_HA': 'TextEdit', });
lyr_Inventario_vect_3.set('fieldImages', {'PARCELA': '', 'Y': '', 'X': '', 'Nparc': '', });
lyr_Canales_4.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', 'CAUCE': 'TextEdit', });
lyr_A_Limite_provincias_Andalucia_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'PROVINCIAS': 'no label', 'PROVINCI_1': 'no label', 'PROVINCIA': 'no label', 'SUM__P_F45': 'no label', 'TSUM__P_F4': 'no label', 'TSUM__P__1': 'no label', 'SUM_SUM_C2': 'no label', 'SUM_C2': 'no label', 'C1': 'no label', 'C2': 'no label', 'C3': 'no label', 'C4': 'no label', 'C5': 'no label', 'C6': 'no label', 'C7': 'no label', 'C8': 'no label', 'C9': 'no label', 'C10': 'no label', });
lyr_Pinar_de_Yunquera_2.set('fieldLabels', {'CODIGO_JA': 'no label', 'NOMBRE': 'no label', 'ACCESO_INF': 'no label', 'PROVINCIAS': 'no label', 'TIPO_TITUL': 'no label', 'SUP_HA': 'no label', });
lyr_Inventario_vect_3.set('fieldLabels', {'PARCELA': 'inline label', 'Y': 'header label', 'X': 'header label', 'Nparc': 'no label', });
lyr_Canales_4.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'inline label', 'CAUCE': 'no label', });
lyr_Canales_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});