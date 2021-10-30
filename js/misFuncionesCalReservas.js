function traerInformacionCalReserva() {
  $.ajax({
    dataType: 'json',
    //url: 'http://129.151.117.222:8081/api/Message/all',
    url: 'http://129.151.117.222:8081/api/Score/all',
    type: 'GET',
    success: function (respuesta) {
      console.log(respuesta)
      pintarRespuestaCalReservation(respuesta)
    },
    error: function (jqXHR, textStatus, errorThrown) {
    }
  });
}

function pintarRespuestaCalReservation(respuesta) {

  let myTable = "<table>";
  for (i = 0; i < respuesta.length; i++) {
    myTable += "<tr>";
    myTable += "<td>" + respuesta[i].messageText + "</td>";
    myTable += "<td>" + respuesta[i].stars + "</td>";
    myTable += "<td>" + respuesta[i].reservation.idReservation + "</td>";
    myTable += '<td><button class="btn btn-warning" onclick="actualizarCalReserva(' + respuesta[i].idScore + ')">Actualizar</button>' + "</td>";
    myTable += '<td><button class="btn btn-danger" onclick="borrarCalReserva(' + respuesta[i].idScore + ')">Borrar</button>' + "</td>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#listarCalReservas").html(myTable);
}

function guardarRegistroCalReserva() {
  var elemento = {
    messageText: $("#messageText").val(),
    stars: $("#stars").val(),
    reservation: { idReservation: +$("#select").val() }

  }
  var dataTosend = JSON.stringify(elemento);
  // JSON = JavaScript Object Notation
  $.ajax({
    dataType: 'JSON',
    data: dataTosend,
    url: 'http://129.151.117.222:8081/api/Score/save',
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

function actualizarCalReserva(idElemento) {
  let myData = {
    idScore: idElemento,
    messageText: $("#messageText").val(),
    stars: $("#stars").val(),
  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://129.151.117.222:8081/api/Score/update",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (response) {
      $("#resultado").empty();
      $("#id").val("");
      $("#messageText").val("");
      $("#stars").val("");
      traerInformacionCalReserva()
      alert("se ha Actualizado correctamente la calificacion")
    }
  });
}

function borrarCalReserva(idElemento) {
  var elemento = {
    id: idElemento
  };
  var dataTosend = JSON.stringify(elemento);
  //JSON = JavaScript Object Notation
  $.ajax({
    dataType: 'json',
    data: dataTosend,
    url: 'http://129.151.117.222:8081/api/Score/' + idElemento,
    type: 'DELETE',
    contentType: 'application/json',
    success: function (response) {
      console.log(response);
      $("#resultado").empty();
      traerInformacionCalReserva();
      alert("Se borro correctamente")
      //window.location.reload()
    },
    error: function (jqXHR, textStatus, errorThrown) {
    }
  });
}
