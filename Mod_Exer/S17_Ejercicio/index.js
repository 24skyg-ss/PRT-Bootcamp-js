let marker, map;

function initMap() {
    // console.log("Inicializando mapa");
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }

    //  Opera de Sidney
    const pos1 = {
        lat: -33.856,
        lng: 152.215
    }

    // Machu Picchu
    const pos2 = {
        lat: -13.163,
        lng: -72.544
    }

    // Cristo redentor
    const pos3 = {
        lat: -22.951,
        lng: -43.210
    }

    map = new google.maps.Map(document.getElementById("map"), { zoom: 4, center: posicion });

    marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: "Posición Inicial"
    })

    markPlace1 = new google.maps.Marker({
        position: pos1,
        map: map,
        title: "Opera de Sidney"
    })

    markPlace2 = new google.maps.Marker({
        position: pos2,
        map: map,
        title: "Machu Picchu"
    })

    markPlace3 = new google.maps.Marker({
        position: pos3,
        map: map,
        title: "Cristo redentor"
    })

}