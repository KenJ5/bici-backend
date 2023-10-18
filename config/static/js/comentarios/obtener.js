async function obtenerComentarios() {
  const url = 'http://localhost:5000/api_comentarios/comentarios'; // Reemplaza con la URL de tu API de comentarios

  try {
    const response = await fetch(url);
    const comentarios = await response.json();

    const comentariosLista = document.getElementById('comentarios-lista');
    comentarios.forEach(comentario => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
           
            <div class="">
          <div class="">
          <div>
              <h6>
                <a href="#">${comentario.id}</a>
              </h6>
            </div>
            <div>
              <h6>
                <a href="#">${comentario.titulo}</a>
              </h6>
            </div>
            <p class="text-secondary">
              ${comentario.contenido}
            </p>
            <p class="">
              <a href="javascript:void(0)">${comentario.usuario}</a>
            </p>
          </div>
          <button class="btn-eliminar" onclick="eliminarComentario(${comentario.id})">Eliminar</button>
        </div>
          `;
      comentariosLista.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error al obtener comentarios:', error);
  }
}

// Llama a la función para obtener comentarios cuando se carga la página
window.onload = () => {
  obtenerComentarios();
};