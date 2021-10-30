function obtenerItemsMessage() {
    $.ajax({
        dataType: 'json',
        //url: 'http://129.151.117.222:8081/api/Message/all',
        url: 'http://localhost:8081/api/Message/all',
        type: 'GET',
        success: function (respuesta) {
            console.log(respuesta)
            pintarRespuestaMessage(respuesta)
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
}

function pintarRespuestaMessage(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].messageText + "</td>";
        myTable += "<td>" + respuesta[i].car.name + "</td>";
        myTable += '<td><button class="btn btn-warning" onclick="actualizarInformacionMessage(' + respuesta[i].idMessage + ')">Actualizar</button>' + "</td>";
        myTable += '<td><button class="btn btn-danger" onclick="borrarRegistroMessage(' + respuesta[i].idMessage + ')">Borrar</button>' + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#listarMessage").html(myTable);
}

function registroMessage() {
    var elemento = {
        messageText: $("#messageText").val(),
        car: { idCar: +$("#inputGroupSelect01").val() }
    }
    var dataTosend = JSON.stringify(elemento);
    // JSON = JavaScript Object Notation
    $.ajax({
        dataType: 'JSON',
        data: dataTosend,
        url: 'http://localhost:8081/api/Message/save',
        //url: 'http://129.151.117.222:8081/api/Message/save',
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

function actualizarInformacionMessage(idElemento) {
    let myData = {
        idMessage: idElemento,
        messageText: $("#messageText").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://129.151.117.222:8081/api/Message/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (response) {
            $("#resultado").empty();
            $("#id").val("");
            $("#messageText").val("");
            obtenerItemsMessage()
            alert("se ha Actualizado correctamente la categoria")
        }
    });
}

function borrarRegistroMessage(idElemento) {
    var elemento = {
        id: idElemento
    };
    var dataTosend = JSON.stringify(elemento);
    //JSON = JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data: dataTosend,
        url: 'http://129.151.117.222:8081/api/Message/' + idElemento,
        type: 'DELETE',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
            $("#resultado").empty();
            obtenerItemsMessage();
            alert("Se borro correctamente")
            //window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
}

// function obtenerRegistroEspecificoMessage(idRegistro) {

//     $.ajax({

//         dataType: 'json',
//         url: 'https://g7be2fcfb5932c8-db202109261658.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/' + idRegistro,
//         type: 'GET',

//         success: function (response) {
//             console.log(response);

//             var registrosMessage = response.items[0];

//             $("#idMessage").val(registrosMessage.id);
//             $("#messagetext").val(registrosMessage.messagetext);


//         },

//         error: function (jqXHR, textStatus, errorThrown) {

//         }
//     });
// }





