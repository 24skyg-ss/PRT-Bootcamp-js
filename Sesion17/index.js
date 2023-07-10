let marker, map;

function initMap() {
    // console.log("Inicializando mapa");
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }

    map = new google.maps.Map(document.getElementById("map"), { zoom: 4, center: posicion });

    marker = new google.maps.Marker({
        position: posicion,
        map: map,
        title: "Posición Inicial"
    })

    //  Obtener geolocalizacion
    //  navigator.geolocation.watchPosition(position => { console.log(position) })

    //  marker.setPosition({lat,lng});
    geoPosition();
}

function geoPosition() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation;
        const options = { timeout: 60000 };

        const watchPos = geoLoc.watchPosition( centrarMapa, onError, options );
    } else {
        alert("Tu navegador no admite geolocalización.");
    }
}

function centrarMapa(position) {
    const newPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(newPos);
    marker.setPosition(newPos);
    map.setCenter(newPos);
}

function onError(error) {
    console.log("Se ha producido un error.");
    console.error(error);
}