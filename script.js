/**
 * script de JavaScript para el formulario de la tabla Car
 */

function insertarRegistroCar() {

    var elemento = {
        id: $("#idCar").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val()
    }

    var dataTosend = JSON.stringify(elemento);
    // JSON = JavaScript Object Notation

    $.ajax({

        dataType: 'json',
        data: elemento,
        url: 'https://g586161a4bca61a-db202109261411.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/car/car',
        type: 'POST',
        //contentType:'application/json',
        success: function (response) {
            alert("exitoso")
            console.log(response);
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }


    });

}

function obtenerRegistrosCar() {

    $.ajax({

        dataType: 'json',
        url: 'https://g586161a4bca61a-db202109261411.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/car/car',
        type: 'GET',

        success: function (response) {

            var registrosCar = response.items;

            for (i = 0; i < registrosCar.length; i++) {

                $("#registrosCar").append("<tr>");
                $("#registrosCar").append("<td>" + registrosCar[i].id + "</td>");
                $("#registrosCar").append("<td>" + registrosCar[i].brand + "</td>");
                $("#registrosCar").append("<td>" + registrosCar[i].model + "</td>");
                $("#registrosCar").append("<td>" + registrosCar[i].category_id + "</td>");
                $("#registrosCar").append('<td><button onclick="borrarRegistroCar(' + registrosCar[i].id + ')">DELETE</button>' + '</td>');
                $("#registrosCar").append('<td><button onclick="obtenerRegistroEspecificoCar(' + registrosCar[i].id + ')">GET</button>' + '</td>');
                $("#registrosCar").append("</tr>");

            }


            //$("#miResultado").append(response.items[0].brand,response.items[0].model);
        },

        error: function (jqXHR, textStatus, errorThrown) {

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
        url: 'https://g586161a4bca61a-db202109261411.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/car/car',
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
        url: 'https://g586161a4bca61a-db202109261411.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/car/car/' + idItem,
        type: 'GET',

        success: function (response) {
            console.log(response);

            var registroCar = response.items[0];

            $("#idCar").val(registroCar.id);
            $("#brand").val(registroCar.brand);
            $("#model").val(registroCar.model);
            $("#category_id").val(registroCar.category_id);
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
        url: "https://g586161a4bca61a-db202109261411.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/car/car",
        type: 'PUT',


        success: function (response) {
            console.log(response);
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });


}

//*************************************************************************
//*************************************************************************
//*************************************************************************

function insertarRegistroClient() {

    var elemento = {
        id: $("#idClient").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val()
    }

    var dataTosend = JSON.stringify(elemento);
    // JSON = JavaScript Object Notation

    $.ajax({

        dataType: 'json',
        data: elemento,
        url: 'https://g586161a4bca61a-db202109261411.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'POST',
        //contentType:'application/json',
        success: function (response) {

            console.log(response);
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }


    });

}

function obtenerRegistrosClient() {

    $.ajax({

        dataType: 'json',
        url: 'https://g586161a4bca61a-db202109261411.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',

        success: function (response) {

            var registrosClient = response.items;

            for (i = 0; i < registrosClient.length; i++) {

                $("#registrosClient").append("<tr>");
                $("#registrosClient").append("<td>" + registrosClient[i].id + "</td>");
                $("#registrosClient").append("<td>" + registrosClient[i].name + "</td>");
                $("#registrosClient").append("<td>" + registrosClient[i].email + "</td>");
                $("#registrosClient").append("<td>" + registrosClient[i].age + "</td>");
                $("#registrosClient").append('<td> <button onclick="borrarRegistroClient(' + registrosClient[i].id + ')">DELETE</button>' + '</td>');
                $("#registrosClient").append('<td> <button onclick="obtenerRegistroEspecificoClient(' + registrosClient[i].id + ')">GET</button>' + '</td>');
                $("#registrosClient").append("</tr>");

            }
        },

        error: function (jqXHR, textStatus, errorThrown) {

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
        url: 'https://g586161a4bca61a-db202109261411.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
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
        url: 'https://g586161a4bca61a-db202109261411.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/' + idRegistro,
        type: 'GET',

        success: function (response) {
            console.log(response);

            var registrosClient = response.items[0];

            id: $("#idClient").val(registrosClient.id);
            name: $("#name").val(registrosClient.name);
            email: $("#email").val(registrosClient.email);
            age: $("#age").val(registrosClient.age);

        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}

function actualizarRegistroClient() {

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
        url: 'https://g586161a4bca61a-db202109261411.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'PUT',

        success: function (response) {
            console.log(response);
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }


    });
}


//*************************************************************************
//*************************************************************************
//*************************************************************************

/**
 * script de JavaScript para el formulario de la tabla Client
 */
function insertarRegistroMessage() {

    var elemento = {

        id: $("#idMessage").val(),
        messagetext: $("#messagetext").val()

    }

    var dataTosend = JSON.stringify(elemento);
    //JSON = JavaScript Object Notation

    $.ajax({

        dataType: 'json',
        data: elemento,
        url: 'https://g586161a4bca61a-db202109261411.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'POST',
        //contentType:'application/json',

        success: function (response) {
            console.log("servicio realizado exitosamente");
            console.log(response);

        },
        error: function (jqXHR, textStatus, errorThrown) {

        }

    });
}

function obtenerRegistrosMessage() {

    $.ajax({

        dataType: 'json',
        url: 'https://g586161a4bca61a-db202109261411.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'GET',

        success: function (response) {

            var registrosMessage = response.items;

            for (i = 0; i < registrosMessage.length; i++) {

                $("#registrosMessage").append("<tr>");
                $("#registrosMessage").append("<td>" + registrosMessage[i].id + "</td>");
                $("#registrosMessage").append("<td>" + registrosMessage[i].messagetext + "</td>");
                $("#registrosMessage").append('<td> <button onclick="borrarRegistroMessage(' + registrosMessage[i].id + ')">DELETE</button>' + '</td>');
                $("#registrosMessage").append('<td> <button onclick="obtenerRegistroEspecificoMessage(' + registrosMessage[i].id + ')">GET</button>' + '</td>');
                $("#registrosMessage").append("</tr>");

            }
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }

    });

}

function borrarRegistroMessage(idElemento) {

    var elemento = {
        id: idElemento
    }

    var dataToSend = JSON.stringify(elemento);
    //JSON = JavaScript Object Notation

    $.ajax({

        dataType: 'json',
        data: dataToSend,
        url: 'https://g586161a4bca61a-db202109261411.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
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
        url: 'https://g586161a4bca61a-db202109261411.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/' + idRegistro,
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

function actualizarRegistroMessage() {

    var elemento = {

        id: $("#idMessage").val(),
        messagetext: $("#messagetext").val()

    }

    var dataTosend = JSON.stringify(elemento)
    //JSON = JavaScript Object Notation

    $.ajax({

        dataType: 'json',
        data: dataTosend,
        contentType: 'application/json',
        url: 'https://g586161a4bca61a-db202109261411.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'PUT',

        success: function (response) {
            console.log(response);
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }


    });
}






