function AgregarAlerta(id) {

    const id_ruta = id
    alert(id_ruta)
    const tipo = "por defecto"
    const datos = { id_ruta: id, tipo: tipo};
    fetch('/api_alerta/savealerta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

}