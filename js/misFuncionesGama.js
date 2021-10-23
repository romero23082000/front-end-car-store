function traerInformacionCategorias() {
  $.ajax({
    url: 'http://129.151.117.222:8081/api/Gama/all',
    //url: "http://localhost:8081/api/Gama/all",
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
    myTable += "<td>" + respuesta[i].name + "</td>";
    myTable += "<td>" + respuesta[i].description + "</td>";
    myTable += '<td><button class="btn btn-warning" onclick="actualizarInformacionCategorias(' + respuesta[i].idGama + ')">Actualizar</button>' + "</td>";
    myTable += '<td><button class="btn btn-danger" onclick="borrarRegistroGama(' + respuesta[i].idGama + ')">Borrar</button>' + "</td>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#listarGamas").html(myTable);
}

function guardarInformacionCategorias() {
  let var2 = {
    name: $("#Gname").val(),
    description: $("#Gdescription").val()
  };

  $.ajax({
    type: 'POST',
    contentType: "application/json; charset=utf-8",
    dataType: 'JSON',
    data: JSON.stringify(var2),
    url: 'http://129.151.117.222:8081/api/Gama/save',
    //url: "http://localhost:8081/api/Gama/save",
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

function actualizarInformacionCategorias(idElemento) {
  let myData = {
    idGama: idElemento,
    name: $("#Gname").val(),
    description: $("#Gdescription").val()

  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://129.151.117.222:8081/api/Gama/update",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (response) {
      $("#resultado").empty();
      $("#id").val("");
      $("#Gname").val("");
      $("#Gdescription").val("");
      traerInformacionCategorias();
      alert("se ha Actualizado correctamente la categoria")
    }
  });
}

function borrarRegistroGama(idElemento) {
  var elemento = {
    id: idElemento
  };
  var dataTosend = JSON.stringify(elemento);
  //JSON = JavaScript Object Notation
  $.ajax({
    dataType: 'json',
    data: dataTosend,
    url: 'http://129.151.117.222:8081/api/Gama/' + idElemento,
    type: 'DELETE',
    contentType: 'application/json',
    success: function (response) {
      console.log(response);
      $("#resultado").empty();
      traerInformacionCategorias();
      alert("Se borro correctamente")
      //window.location.reload()
    },
    error: function (jqXHR, textStatus, errorThrown) {
    }
  });
}