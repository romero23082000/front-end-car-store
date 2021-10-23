function traerInformacionReservaciones() {
  $.ajax({
    //url: 'http://localhost:8081/api/Reservation/all',
    url: "http://129.151.117.222:8081/api/Reservation/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      pintarRespuesta(respuesta);
    }
  });
}

function pintarRespuesta(respuesta) {

  let myTable = "<table>";
  for (i = 0; i < respuesta.length; i++) {
    myTable += "<tr>";
    myTable += "<td>" + respuesta[i].startDate + "</td>";
    myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
    myTable += '<td><button class="btn btn-warning" onclick="actualizarInformacionReservation(' + respuesta[i].idReservation + ')">Actualizar</button>' + "</td>";
    myTable += '<td><button class="btn btn-danger" onclick="borrarRegistroReservation(' + respuesta[i].idReservation + ')">Borrar</button>' + "</td>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#listarReservas").html(myTable);
}

function guardarInformacionReservaciones() {
  let var2 = {
    startDate: $("#startDate").val(),
    devolutionDate: $("#devolutionDate").val()
  };
  $.ajax({
    type: 'POST',
    contentType: "application/json; charset=utf-8",
    dataType: 'JSON',
    data: JSON.stringify(var2),
    //url: 'http://localhost:8081/api/Reservation/save',
    url: "http://129.151.117.222:8081/api/Reservation/save",
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

function actualizarInformacionReservation(idElemento) {
  let myData = {
    idReservation: idElemento,
    startDate: $("#startDate").val(),
    devolutionDate: $("#devolutionDate").val()

  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://129.151.117.222:8081/api/Reservation/update",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (response) {
      $("#resultado").empty();
      $("#id").val("");
      $("#startDate").val("");
      $("#devolutionDate").val("");
      traerInformacionReservaciones();
      alert("se ha Actualizado correctamente la categoria")
    }
  });
}

function borrarRegistroReservation(idElemento) {
  var elemento = {
    id: idElemento
  };
  var dataTosend = JSON.stringify(elemento);
  //JSON = JavaScript Object Notation
  $.ajax({
    dataType: 'json',
    data: dataTosend,
    url: 'http://129.151.117.222:8081/api/Reservation/' + idElemento,
    type: 'DELETE',
    contentType: 'application/json',
    success: function (response) {
      console.log(response);
      $("#resultado").empty();
      traerInformacionReservaciones();
      alert("Se borro correctamente")
      //window.location.reload()
    },
    error: function (jqXHR, textStatus, errorThrown) {
    }
  });
}