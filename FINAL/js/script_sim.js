

  fetch('../json/AeropuertosCoordenadas.json')
  .then(response => response.json())
  .then(aeropuertos => {
    console.log(aeropuertos);
  
  // Obtener referencias a los elementos
  const departamentoSelect = document.getElementById('state1');
  const ciudadSelect = document.getElementById('city1');

  // Agrupar por departamento y ciudad
  const departamentos = [...new Set(aeropuertos.map(a => a['Nombre Departamento']))];

  // Rellenar departamentos
  departamentos.forEach(dep => {
    const option = document.createElement('option');
    option.value = dep;
    option.textContent = dep;
    departamentoSelect.appendChild(option);
  });

  // Escuchar cambios y actualizar ciudades
  departamentoSelect.addEventListener('change', () => {
    const seleccionado = departamentoSelect.value;

    // Limpiar y volver a poner opción por defecto
    ciudadSelect.innerHTML = '<option value="">CIUDAD</option>';

    if (!seleccionado) return;

    const municipios = aeropuertos
      .filter(a => a['Nombre Departamento'] === seleccionado)
      .map(a => a['Nombre Municipio'].toLowerCase());

    const unicos = [...new Set(municipios)];

    unicos.forEach(ciudad => {
      const option = document.createElement('option');
      option.value = ciudad;
      option.textContent = ciudad.charAt(0).toUpperCase() + ciudad.slice(1);
      ciudadSelect.appendChild(option);

    ciudadSelect.addEventListener('change', () => {
        const ciudadOrigen = ciudadSelect.value;
        console.log(`Origen: ${ciudadOrigen}`)
        
        })
        
    });
  });
})

fetch('../json/AeropuertosCoordenadas.json')
  .then(response => response.json())
  .then(aeropuertos => {
    console.log(aeropuertos);
  
  // Obtener referencias a los elementos
  const departamentoSelect2 = document.getElementById('state2');
  const ciudadSelect2 = document.getElementById('city2');

  // Agrupar por departamento y ciudad
  const departamentos = [...new Set(aeropuertos.map(a => a['Nombre Departamento']))];

  // Rellenar departamentos
  departamentos.forEach(dep => {
    const option = document.createElement('option');
    option.value = dep;
    option.textContent = dep;
    departamentoSelect2.appendChild(option);
  });

  // Escuchar cambios y actualizar ciudades
  departamentoSelect2.addEventListener('change', () => {
    const seleccionado = departamentoSelect2.value;

    // Limpiar y volver a poner opción por defecto
    ciudadSelect2.innerHTML = '<option value="">CIUDAD</option>';

    if (!seleccionado) return;

    const municipios = aeropuertos
      .filter(a => a['Nombre Departamento'] === seleccionado)
      .map(a => a['Nombre Municipio'].toLowerCase());

    const unicos = [...new Set(municipios)];

    unicos.forEach(ciudad => {
      const option = document.createElement('option');
      option.value = ciudad;
      option.textContent = ciudad.charAt(0).toUpperCase() + ciudad.slice(1);
      ciudadSelect2.appendChild(option);

       ciudadSelect2.addEventListener('change', () => {
        const ciudadDestino = ciudadSelect2.value;
        console.log(`Destino: ${ciudadDestino}`)
        
        })
      
    });
  });
})



boton.addEventListener('click', function() {
        const city1 = document.getElementById('city1')
        const ciudadOrigen = city1.value
        const city2 = document.getElementById('city2')
        const ciudadDestino = city2.value
    
        console.log(`Desde ${ciudadOrigen}`)
        console.log(`Hasta ${ciudadDestino}`)
    }) 