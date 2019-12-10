function drawChart(dataTarget){
  var c3data = {
    "transits": {'columns': [
      ['x', 'Type neptune', 'Super-Terre', 'Géante gazeuse', 'Terrestre'],
      ['Transits', 1209, 1208, 562, 156]
    ]} ,
    "radial":  {'columns': [
      ['x', 'Géante gazeuse', 'Type neptune', 'Super-Terre', 'Terrestre'] ,
      ['Vitesse radiale', 590, 141, 49, 2] ,
    ]},
    "microlens":  {'columns': [
      ['x', 'Géante gazeuse', 'Type neptune', 'Super-Terre'],
      ['Microlentille gravitationnelle', 62, 18, 6]
    ]} ,
    "imagery":  {'columns': [
      ['x', 'Géante gazeuse', 'Inconnu'],
      ['Imagerie directe', 45, 2]
    ]} ,
    "astrometry": {'columns': [
      ['x', 'Géante gazeuse'],
      ['Astrométrie', 1]
    ]}
  };
  var data = c3data[dataTarget];
  var element = '.c3-chart.' + dataTarget
  if(!data){
    return;
  }


  var height = 40 * (data['columns'][0].length);
  console.log(height);
  var colors = ['e902f6', '#7e0085', '#6a0070', '#3f0042', '#2a002d'];

  console.group('Graphique: ' + element);
  console.log('Hauteur: ' + height);
  console.log('Données: ' + data['columns'][1][0]);
  console.log(data['columns'][0]);
  console.log(data['columns'][1]);
  console.groupEnd();

  var chart = c3.generate({
    bindto: element,
    size: {
      height: height
    },
    padding: {
      'left': 100,
      'top': 20,
      'right': 10,
      'bottom': 10
    },
    data: {
      x: 'x',
      columns: [
      ],
      color: function (color, d) {
          return colors[d.index];
      },
      type: 'bar',
      labels: true
    },
    bar: {
      // height: 20,
      // width: 24, //{ ratio: 0.7},
      height: { ratio: 0.7},
      space: 0
    },
    transition: {
        duration: 800
    },
    legend: {
      show: false
    },
    tooltip: {
      show: false
    },
    zoom: {
      enabled: false
    },
    axis: {
      rotated: true,
      x: {
        type: 'category',
        // show: false
      },
      y: {
        show: false
      }
    },
  });
  setTimeout(function(){
    chart.load(data)

  }, 500);
}
