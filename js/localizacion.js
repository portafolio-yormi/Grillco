    function initMap() {
    //--------------------------------------------------------------------------------
    //**                  GeoLocalizacion & Configuracion del MAP                   ** 
    //--------------------------------------------------------------------------------
     
        var mapOptions = {
          center: new google.maps.LatLng(10.1741831,-68.0033308,17.75),
          zoom: 16,
          zoomControl:true,
          zoomControlOptions:true,
          scrollwheel:false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapa"),
            mapOptions);
    //--------------------------------------------------------------------------------
    //**                            Marcador del Mapa                               ** 
    //--------------------------------------------------------------------------------
         var myLatlng = new google.maps.LatLng(10.1741831,-68.0033308,17.75);
        var marker = new google.maps.Marker({
		    position: myLatlng
		    // title:"Resort Islas Del Sol"
		});
        	marker.setMap(map);


 var styleArray = [
  {
    featureType: "all",
    stylers: [
      { saturation: -80 }
    ]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { hue: "#00ffee" },
      { saturation: 50 }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];

// map.setOptions({styles: styleArray});

}