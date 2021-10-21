function obtenerClient() {
    $.ajax({
        dataType: 'json',
        url: 'http://localhost:8081/api/Client/all',
        //url: 'http://129.151.117.222:8081/api/Client/all',
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
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].age + "</td>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        myTable += "<td>" + respuesta[i].password + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#listarClientes").html(myTable);
}

function registroClient() {
    var elemento = {
        name: $("#CliName").val(),
        email: $("#CliEmail").val(),
        age: $("#CliAge").val(),
        password: $("#CliPassword").val()
    }

    var dataTosend = JSON.stringify(elemento);
    // JSON = JavaScript Object Notation

    $.ajax({
        dataType: 'JSON',
        data: dataTosend,
        //url: 'http://129.151.117.222:8081/api/Client/save',
        url: 'http://localhost:8081/api/Client/save',
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        //contentType:'application/json',
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



function borrarRegistroClient(idElemento) {

    var elemento = {
        id: idElemento
    }

    var dataToSend = JSON.stringify(elemento);
    //JSON = JavaScript Object Notation

    $.ajax({

        dataType: 'json',
        data: dataToSend,
        url: 'https://g7be2fcfb5932c8-db202109261658.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'DELETE',
        contentType: 'application/json',

        success: function (response) {
            console.log(response);
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });


}

function obtenerRegistroEspecificoClient(idRegistro) {

    $.ajax({

        dataType: 'json',
        url: 'https://g7be2fcfb5932c8-db202109261658.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/' + idRegistro,
        type: 'GET',

        success: function (response) {
            console.log(response);

            var registrosClient = response.items[0];

            $("#idClient").val(registrosClient.id);
            $("#name").val(registrosClient.name);
            $("#email").val(registrosClient.email);
            $("#age").val(registrosClient.age);

        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}

function actualizarClient() {

    var elemento = {
        id: $("#idClient").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val()
    }
    var dataTosend = JSON.stringify(elemento)
    //JSON = JavaScript Object Notation

    $.ajax({

        dataType: 'json',
        data: dataTosend,
        contentType: 'application/json',
        url: 'https://g7be2fcfb5932c8-db202109261658.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'PUT',
        success: function (response) {
            console.log(response);
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }


    });
}



