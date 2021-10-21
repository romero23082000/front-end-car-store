/**
 * script de JavaScript para el formulario de la tabla Car
 */
function traerInformacionCarros() {
    $.ajax({
        url: 'http://129.151.117.222:8081/api/Car/all',
        //url: 'http://localhost:8081/api/Car/all',
        dataType: 'JSON',
        type: 'GET',
        success: function (respuesta) {
            console.log(respuesta)
            pintarRespuesta(respuesta)
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
}

function pintarRespuesta(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].brand + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].year + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#listarCarros").html(myTable);
}


function guardarInformacionCategorias() {
    var elemento = {
        brand: $("#Cbrand").val(),
        name: $("#Cname").val(),
        year: $("#Cyear").val(),
        description: $("#Cdescription").val()
    }
    var dataTosend = JSON.stringify(elemento);
    // JSON = JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: dataTosend,
        //url: 'http://localhost:8081/api/Car/save',
        url: 'http://129.151.117.222:8081/api/Car/save',
        type: 'POST',
        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });
}



function borrarRegistroCar(idElemento) {
    var elemento = {
        id: idElemento
    };
    var dataTosend = JSON.stringify(elemento);
    //JSON = JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data: dataTosend,
        url: 'https://g7be2fcfb5932c8-db202109261658.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/car/car',
        type: 'DELETE',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
}

function obtenerRegistroEspecificoCar(idItem) {
    $.ajax({
        dataType: 'json',
        url: 'https://g7be2fcfb5932c8-db202109261658.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/car/car/' + idItem,
        type: 'GET',
        success: function (response) {
            console.log(response);
            var registrosCar = response.items[0];
            $("#idCar").val(registrosCar.id);
            $("#brand").val(registrosCar.brand);
            $("#model").val(registrosCar.model);
            $("#category_id").val(registrosCar.category_id);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
}

function actualizarRegistroCar() {

    var elemento = {
        id: $("#idCar").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val()
    }

    var dataTosend = JSON.stringify(elemento)
    //JSON = JavaScript Object Notation

    $.ajax({

        dataType: 'json',
        data: dataTosend,
        contentType: 'application/json',
        url: "https://g7be2fcfb5932c8-db202109261658.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/car/car",
        type: 'PUT',
        success: function (response) {
            console.log(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
}