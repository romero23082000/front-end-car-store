function obtenerClient() {
    $.ajax({
        dataType: 'json',
        url: 'http://129.151.117.222:8081/api/Client/all',
        //url: 'http://129.151.117.222:8081/api/Client/all',
        type: 'GET',
        success: function (respuesta) {
            console.log(respuesta)
            pintarRespuesta(respuesta)
            let $select = $("#inputGroupSelect02");
            $.each(respuesta, function (idCar, name) {
                $select.append('<option value=' + name.idClient + '>' + name.name + '</option>');
                console.log("select " + name.idClient);
            });
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
        myTable += '<td><button class="btn btn-warning" onclick="actualizarInformacionClient(' + respuesta[i].idClient + ')">Actualizar</button>' + "</td>";
        myTable += '<td><button class="btn btn-danger" onclick="borrarRegistroClient(' + respuesta[i].idClient + ')">Borrar</button>' + "</td>";
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
        url: 'http://129.151.117.222:8081/api/Client/save',
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


function actualizarInformacionClient(idElemento) {
    let myData = {
        idClient: idElemento,
        name: $("#CliName").val(),
        age: $("#CliAge").val(),
        password: $("#CliPassword").val()

    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://129.151.117.222:8081/api/Client/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (response) {
            $("#resultado").empty();
            $("#CliName").val("");
            $("#CliAge").val("");
            $("#CliPassword").val("");
            obtenerClient();
            alert("se ha Actualizado correctamente el cliente")
        }
    });
}

function borrarRegistroClient(idElemento) {
    var elemento = {
        id: idElemento
    };
    var dataTosend = JSON.stringify(elemento);
    //JSON = JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data: dataTosend,
        url: 'http://129.151.117.222:8081/api/Client/' + idElemento,
        type: 'DELETE',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
            $("#resultado").empty();
            obtenerClient();
            alert("Se borro correctamente")
            //window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
}





