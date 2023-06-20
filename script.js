// Obtener los datos de los enlaces
fetch("enlaces.json")
  .then(response => response.json())
  .then(data => {
    // Almacenar los datos en una variable global
    window.enlaces = data;
    // Mostrar todos los enlaces en la página
    mostrarEnlaces();
  })
  .catch(error => console.error(error));

// Función para mostrar los enlaces en la página
function mostrarEnlaces() {
  const lista = document.getElementById('enlaces-lista');
  lista.innerHTML = '';

  // Obtener el valor seleccionado en el filtro de categoría
  const categoriaSeleccionada = document.getElementById('categoria').value;

  window.enlaces.forEach((enlace) => {
    const { nombre, url, descripcion, categoria } = enlace;

    // Filtrar los enlaces por categoría
    if (categoriaSeleccionada === '' || categoria === categoriaSeleccionada) {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = url;
      link.textContent = nombre;
      item.appendChild(link);

      const descripcionElem = document.createElement('p');
      descripcionElem.textContent = descripcion;
      item.appendChild(descripcionElem);

      lista.appendChild(item);
    }
  });
}

// Event listener para detectar cambios en la selección de categoría
const selectCategoria = document.getElementById('categoria');
selectCategoria.addEventListener('change', mostrarEnlaces);
