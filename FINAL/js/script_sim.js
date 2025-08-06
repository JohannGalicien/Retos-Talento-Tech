

  fetch('../json/AeropuertosCoordenadas.json')
  .then(response => response.json())
  .then(aeropuertoss => {
    console.log(aeropuertoss);
  
  const aeropuertos = aeropuertoss.sort((a,b) => a['Nombre Departamento'].localeCompare(b['Nombre Departamento']));
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

    const municipios = aeropuertos.sort((a,b) => a['Nombre Municipio'].localeCompare(b['Nombre Municipio']))
      .filter(a => a['Nombre Departamento'] === seleccionado)
      .map(a => a['Nombre Municipio'].toLowerCase());

    const unicos = [...new Set(municipios)];

    unicos.forEach(ciudad => {
      const option = document.createElement('option');
      option.value = ciudad;
      option.textContent = ciudad.toUpperCase();
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
  .then(aeropuertoss => {
    console.log(aeropuertoss);

  const aeropuertos = aeropuertoss.sort((a,b) => a['Nombre Departamento'].localeCompare(b['Nombre Departamento']));
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

    const municipios = aeropuertos.sort((a,b) => a['Nombre Municipio'].localeCompare(b['Nombre Municipio']))
      .filter(a => a['Nombre Departamento'] === seleccionado)
      .map(a => a['Nombre Municipio'].toLowerCase());

    const unicos = [...new Set(municipios)];

    unicos.forEach(ciudad => {
      const option = document.createElement('option');
      option.value = ciudad;
      option.textContent = ciudad.toUpperCase();
     // option.textContent = ciudad.charAt(0).toUpperCase() + ciudad.slice(1);
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

    const informe = document.getElementById('result');
    
  
    console.log(`Desde ${city1.value}`);
    console.log(`Hasta ${city2.value}`);

    if (city1.value === city2.value) {
      informe.textContent = `¡Seleccione dos ciudades distintas!`;
      return;
    }

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

      console.log(`Distancia: ${distancia}, Aeropuertos: ${aeropuertoOrigen}, ${aeropuertoDestino}`);

      const informeOrigen = document.getElementById('resultOrigin');
      const informeDestino = document.getElementById('resultDestination');
      

      informeOrigen.innerHTML = `Origen:<br>${aeropuertoOrigen}`;
      informeDestino.innerHTML = `Destino:<br>${aeropuertoDestino}`;
      informe.textContent = `Distancia: ${Math.floor(distancia)}km`;

      fetch('../json/Datos.json')
  .then(response => response.json())
  .then(especificaciones => {
    console.log(especificaciones);
      
    

    const airbusA320 = especificaciones.find(c => c.vehiculo === 'A320');
    let velocidadAirbus;
    const velocidadesA320 = airbusA320.velocidad
    console.log(velocidadesA320)


      if (distancia < 300) {
        velocidadAirbus = velocidadesA320[0];
        console.log(velocidadAirbus);
      }
      else {
        velocidadAirbus = velocidadesA320[1];
        console.log(velocidadAirbus);
      }
    console.log(`Velocidad Airbus ${velocidadAirbus}`);

    const hindenburg = especificaciones.find(c => c.vehiculo === 'Hindenburg');
    const wolke0 = especificaciones.find(c => c.vehiculo === 'Wolke 0');


    const tiempo = {
      'A320' : distancia / velocidadAirbus ,
      'Hindenburg' : distancia / hindenburg.velocidad ,
      'Wolke 0' : distancia / wolke0.velocidad ,


    }

    console.log(tiempo)

    const derroche = {
      'A320' : tiempo.A320 * airbusA320.consumo ,
      'Hindenburg' : tiempo.Hindenburg * hindenburg.consumo ,
      'Wolke 0' : tiempo['Wolke 0'] * wolke0.consumo

    }

    console.log(derroche)

    const co2 = {
      'A320' : derroche.A320 * airbusA320['co.2'] ,
      'Hindenburg' : derroche.Hindenburg * hindenburg['co.2'] ,
      'Wolke 0' : derroche['Wolke 0'] * wolke0['co.2']
    }

    console.log(co2)

    const derrochePerCapita = {
      'A320' : co2.A320 / airbusA320.capacidad ,
      'Hindenburg' : co2.Hindenburg / hindenburg.capacidad ,
      'Wolke 0' : co2['Wolke 0'] / wolke0.capacidad

    }
    
    console.log(derrochePerCapita)
    
  })     
 
  });
  
    }) 