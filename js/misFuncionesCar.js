/**
 * script de JavaScript para el formulario de la tabla Car
 */

function traerInformacionCarros() {
    console.log("Se esta ejecutando")
    $.ajax({
        //url: 'http://129.151.117.222:8081/api/Car/all',
        url: 'http://129.151.117.222:8081/api/Car/all',
        dataType: 'JSON',
        type: 'GET',
        success: function (respuesta) {
            console.log(respuesta)
            pintarRespuesta(respuesta)
            let $select = $("#carmessage");
            $.each(respuesta, function (idCar, name) {
                $select.append('<option value=' + name.idCar + '>' + name.name + '</option>');
                console.log("select " + name.idCar);
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
        myTable += "<td>" + respuesta[i].brand + "</td>";
        myTable += "<td>" + respuesta[i].year + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "<td>" + respuesta[i].gama.name + "</td>";
        myTable += '<td><button class="btn btn-warning" onclick="actualizarInformacionCar(' + respuesta[i].idCar + ')">Actualizar</button>' + "</td>";
        myTable += '<td><button class="btn btn-danger" onclick="borrarRegistroCar(' + respuesta[i].idCar + ')">Borrar</button>' + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#listarCarros").html(myTable);
}



function guardarInformacionCarros() {
    var elemento = {
        brand: $("#Cbrand").val(),
        name: $("#Cname").val(),
        year: $("#Cyear").val(),
        description: $("#Cdescription").val(),
        gama: { idGama: +$("#inputGroupSelect01").val() },
    }
    var dataTosend = JSON.stringify(elemento);
    // JSON = JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: dataTosend,
        url: 'http://129.151.117.222:8081/api/Car/save',
        //url: 'http://129.151.117.222:8081/api/Car/save',
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
        url: 'http://129.151.117.222:8081/api/Car/' + idElemento,
        type: 'DELETE',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
            $("#resultado").empty();
            traerInformacionCarros();
            alert("Se borro correctamente")
            //window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
}
function actualizarInformacionCar(idElemento) {
    let myData = {
        idCar: idElemento,
        brand: $("#Cbrand").val(),
        name: $("#Cname").val(),
        year: $("#Cyear").val(),
        description: $("#Cdescription").val(),
        gama: { idGama: +$("#inputGroupSelect01").val() },
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://129.151.117.222:8081/api/Car/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (response) {
            $("#resultado").empty();
            $("#Cname").val("");
            $("#Cbrand").val("");
            $("#Cyear").val("");
            $("#Cdescription").val("");
            traerInformacionCarros();
            alert("se ha Actualizado correctamente la categoria")
        }
    });
}



