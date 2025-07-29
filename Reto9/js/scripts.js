document.addEventListener('DOMContentLoaded', function() {
    fetch('json/TopPaises.json')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('graficobarraspaises').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.pais),
                    datasets: [{
                        label: 'Porcentaje de Energía Renovable',
                        data: data.map(item => item['promedio_renovables']),
                        backgroundColor: 'rgba(54,162,235, 0.6)',
                        borderColor: 'rgba(54,162,235,1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Porcentaje (%)'

                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Paises'
                            }
                        }
                    }
                }
            });
        });

        // grafico de barras regiones

        fetch('json/TopRegiones.json')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('graficobarrasregiones').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.region),
                    datasets: [{
                        label: 'Porcentaje de Energía Renovable',
                        data: data.map(item => item['promedio_renovables']),
                        backgroundColor: 'rgba(54,162,235, 0.6)',
                        borderColor: 'rgba(54,162,235,1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Porcentaje (%)'

                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Región'
                            }
                        }
                    }
                }
            });
        });

        //grafico de lineas//

        fetch('json/Colombia.json')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter(item => item.anno <= 2021)
                const ctx = document.getElementById('graficolineascomparativas').getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: [...new Set(filteredData.map(item => item.anno))],
                        datasets: [{
                            label: 'Colombia',
                            data: filteredData.filter(item => item.region === 'Colombia').map(item => item.renovables),
                            borderColor:'rgba(255,0,0,1)',
                            backgroundColor: 'rgba(255,0,0,0.5)',
                            fill: false,
                            borderWidth: 1,
                            tension: 0.1
                        
                    },
                    {
                        label: 'South America',
                            data: filteredData.filter(item => item.region === 'South America').map(item => item.renovables),
                            borderColor:'rgba(0,0,255,1)',
                            backgroundColor: 'rgba(0,0,255,0.5)',
                            fill: false,
                            borderWidth: 1,
                            tension: 0.1
                    }]
                    }

                }); 

            });
});