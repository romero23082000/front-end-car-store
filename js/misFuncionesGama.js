function traerInformacionCategorias() {
  $.ajax({
    url: "http://129.151.117.222:80/api/Gama/all",
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

    url: "http://129.151.117.222:80/api/Gama/save",


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