

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
    });
  });
})

fetch('../json/AeropuertosCoordenadas.json')
  .then(response => response.json())
  .then(aeropuertos => {
    console.log(aeropuertos);
  
  // Obtener referencias a los elementos
  const departamentoSelect = document.getElementById('state2');
  const ciudadSelect = document.getElementById('city2');

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
    });
  });
})