// Define una función para cargar el contenido de las páginas
function loadPage(pageName) {
  // Oculta el botón "Volver a la página principal" cuando se carga una página
  document.getElementById("homeButton").style.display = "block";

  // Usa AJAX para cargar el contenido del archivo HTML correspondiente
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      // Cuando la solicitud se completa con éxito, actualiza el contenido en el <main>
      document.getElementById("main-content").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", pageName, true);
  xhttp.send();
}

// Asigna la función loadPage a los botones correspondientes
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("mlButton").addEventListener("click", function() {
    loadPage("que_es_ml.html");
  });
  document.getElementById("algorithmsButton").addEventListener("click", function() {
    loadPage("tipos_algoritmos.html");
  });
  document.getElementById("dataPrepButton").addEventListener("click", function() {
    loadPage("preparacion_datos.html");
  });
  document.getElementById("distributionsButton").addEventListener("click", function() {
    loadPage("analisis_distribucion.html");
  });
  document.getElementById("examplesButton").addEventListener("click", function() {
    loadPage("ejemplos_rapidminer_python.html");
  });
  document.getElementById("caseStudiesButton").addEventListener("click", function() {
    loadPage("casos_estudio.html");
  });

  // Agrega funcionalidad al botón "Volver a la página principal"
  document.getElementById("homeButton").addEventListener("click", function() {
    // Oculta el botón "Volver a la página principal"
    this.style.display = "none";
    
    // Elimina el contenido del <main> para volver a la página principal
    document.getElementById("main-content").innerHTML = "";
  });
});
