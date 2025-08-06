

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
  
  fetch('../json/AeropuertosCoordenadas.json')
  .then(response => response.json())
  .then(aeropuertos => {
    console.log(aeropuertos);
    
    const city1 = document.getElementById('city1');
    
    const city2 = document.getElementById('city2');
    
  
    console.log(`Desde ${city1.value}`);
    console.log(`Hasta ${city2.value}`);

      const ciudadOrigen = aeropuertos.find(c => c.City === city1.value);
      const ciudadDestino = aeropuertos.find(c => c.City === city2.value);
      const aeropuertoOrigen = ciudadOrigen["Airport name"]
      const aeropuertoDestino = ciudadDestino["Airport name"]

      console.log(ciudadOrigen)
      console.log(aeropuertoOrigen)

      const Latitud1 = parseFloat((ciudadOrigen.Latitud).replace(",","."));
      const Longitud1 = parseFloat((ciudadOrigen.longitud).replace(",","."));
      const Latitud2 = parseFloat((ciudadDestino.Latitud).replace(",","."));
      const Longitud2 = parseFloat((ciudadDestino.longitud).replace(",","."));

      console.log(Latitud1)
      //Fórmula harvesine

      const R = 6371; //radio de la tierra en kilometros
      const rad = Math.PI / 180;

      //Diferencias de latitud y longitud
      const dLat = (Latitud2 - Latitud1) * rad;
      const dLon = (Longitud2 - Longitud1) * rad;

      const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(Latitud1 * rad) * Math.cos(Latitud2 * rad) *
      Math.sin(dLon / 2) ** 2;

      const c = 2 * Math.asin(Math.sqrt(a));
      const distancia = R * c;

      console.log(`Distancia: ${distancia}`);


 
  })
    }) 