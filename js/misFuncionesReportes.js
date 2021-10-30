function traerReporteStatus() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8081/api/Reservation/report-status",
    dataType: "JSON",
    success: function (respuesta) {
      console.log(respuesta)
      pintarRespuestaReportes(respuesta)
    }
  });
}

function traerReporteClientes() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8081/api/Reservation/report-clients",
    dataType: "JSON",
    success: function (respuesta) {
      console.log(respuesta)
      pintarRespuestaClientes(respuesta)
    }
  });
}
function pintarRespuestaReportes(respuesta) {
  let myTable = "<table>";
  myTable += "<tr>";
  myTable += "<td>" + respuesta.completed + "</td>";
  myTable += "<td>" + respuesta.cancelled + "</td>";
  myTable += "</tr>";
  myTable += "</table>";
  $("#resultadoStatus").html(myTable);
}

function pintarRespuestaClientes(respuesta) {
  let myTable = "<table>";
  for (i = 0; i < respuesta.length; i++) {
    myTable += "<tr>";
    myTable += "<td>" + respuesta[i].total + "</td>";
    myTable += "<td>" + respuesta[i].client.name + "</td>";
    myTable += "<td>" + respuesta[i].client.email + "</td>";
    myTable += "<td>" + respuesta[i].client.age + "</td>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultadoClientes").html(myTable);
}


function pintarRespuestaDate(respuesta) {
  let myTable = "<table>";
  for (i = 0; i < respuesta.length; i++) {
    myTable += "<tr>";
    myTable += "<td>" + respuesta[i].startDate + "</td>";
    myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
    myTable += "<td>" + respuesta[i].status + "</td>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultadoDate").html(myTable);
}

function traerReporteDate() {


  let fechaInicio = document.getElementById("startDate").value;
  let fechaCierre = document.getElementById("devolutionDate").value;
  console.log(fechaInicio)
  $.ajax({
    type: "GET",
    url: "http://localhost:8081/api/Reservation/report-dates/" + fechaInicio + "/" + fechaCierre,
    dataType: "JSON",
    success: function (respuesta) {
      console.log(respuesta)
      pintarRespuestaDate(respuesta)
    }
  });
}


