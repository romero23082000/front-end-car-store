/**
 * script de JavaScript para el formulario de la tabla Car
 */
function traerInformacionAdmin() {
  $.ajax({
    url: 'http://129.151.117.222:8081/api/Admin/all',
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
    myTable += "<td>" + respuesta[i].email + "</td>";
    myTable += "<td>" + respuesta[i].password + "</td>";
    myTable += "<td>" + respuesta[i].name + "</td>";
    myTable += '<td><button class="btn btn-warning" onclick="actualizarInformacionAdmin(' + respuesta[i].idAdmin + ')">Actualizar</button>' + "</td>";
    myTable += '<td><button class="btn btn-danger" onclick="borrarRegistroAdmin(' + respuesta[i].idAdmin + ')">Borrar</button>' + "</td>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#listarAdmin").html(myTable);
}


function guardarInformacionAdmin() {
  var elemento = {
    email: $("#adminEmail").val(),
    password: $("#adminPassword").val(),
    name: $("#adminName").val(),
  }
  var dataTosend = JSON.stringify(elemento);
  // JSON = JavaScript Object Notation
  $.ajax({
    dataType: 'json',
    contentType: "application/json; charset=utf-8",
    data: dataTosend,
    url: 'http://129.151.117.222:8081/api/Admin/save',
    //url: 'http://129.151.117.222:8081/api/Admin/save',
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



function borrarRegistroAdmin(idElemento) {
  var elemento = {
    id: idElemento
  };
  var dataTosend = JSON.stringify(elemento);
  //JSON = JavaScript Object Notation
  $.ajax({
    dataType: 'json',
    data: dataTosend,
    url: 'http://129.151.117.222:8081/api/Admin/' + idElemento,
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


function actualizarInformacionAdmin(idElemento) {
  let myData = {
    idAdmin: idElemento,
    email: $("#adminEmail").val(),
    password: $("#adminPassword").val(),
    name: $("#adminName").val(),
  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://129.151.117.222:8081/api/Admin/update",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (response) {
      $("#resultado").empty();
      $("#id").val("");
      $("#adminName").val("");
      $("#adminEmail").val("");
      $("#adminPassword").val("");
      traerInformacionCarros();
      alert("se ha Actualizado correctamente la categoria")
    }
  });
}



