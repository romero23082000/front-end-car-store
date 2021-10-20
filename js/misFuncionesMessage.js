function obtenerItemsMessage() {
    $.ajax({
        dataType: 'json',
        url: 'http://129.151.117.222:80/api/Message/all',
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
        myTable += "<td>" + respuesta[i].messageText + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#listarMessage").html(myTable);
}

function registroMessage() {
    var elemento = {
        messageText: $("#messageText").val(),
    }
    var dataTosend = JSON.stringify(elemento);
    // JSON = JavaScript Object Notation
    $.ajax({
        dataType: 'JSON',
        data: dataTosend,
        url: 'http://129.151.117.222:80/api/Message/save',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
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



function borrarMessage(idElemento) {

    var elemento = {
        id: idElemento
    }

    var dataToSend = JSON.stringify(elemento);
    //JSON = JavaScript Object Notation

    $.ajax({

        dataType: 'json',
        data: dataToSend,
        url: 'https://g7be2fcfb5932c8-db202109261658.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'DELETE',
        contentType: 'application/json',

        success: function (response) {
            console.log(response);
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });


}

function obtenerRegistroEspecificoMessage(idRegistro) {

    $.ajax({

        dataType: 'json',
        url: 'https://g7be2fcfb5932c8-db202109261658.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/' + idRegistro,
        type: 'GET',

        success: function (response) {
            console.log(response);

            var registrosMessage = response.items[0];

            $("#idMessage").val(registrosMessage.id);
            $("#messagetext").val(registrosMessage.messagetext);


        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}

function actualizarMessage() {

    var elemento = {
        id: $("#idMessage").val(),
        messagetext: $("#messagetext").val(),

    }
    var dataTosend = JSON.stringify(elemento)
    //JSON = JavaScript Object Notation

    $.ajax({
        dataType: 'json',
        data: dataTosend,
        contentType: 'application/json',
        url: 'https://g7be2fcfb5932c8-db202109261658.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'PUT',
        success: function (response) {
            console.log(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }


    });
}



