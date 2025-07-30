// Configuración Supabase
const SUPABASE_URL = 'https://zjytmtcxnxgvqolxopcb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqeXRtdGN4bnhndnFvbHhvcGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4OTA0NzAsImV4cCI6MjA2OTQ2NjQ3MH0.dNeFKZ2PIu3aQ46AO4n_GMr77P3gTaSN9LRuZ6d25tg';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener('DOMContentLoaded', async function() {
    //Autenticación Anónima
    await supabase.auth.SignInAnonymously();

    //Ejecutar todas las funciones
    fetchTop20Paises();
    fetchRegiones();
    fetchColombiaVsSuramerica();

    //Gráfio de barras de top 20 países con mayor producción de energia renovable

    async function fetchTop20Paises() {
        const { data, error} = await supabase
            .from('top_20_paises')
            .select('*')
            .order('promedio_renovables', { ascending: false})
            .limit(20);

        if (error) throw error;

        createBarChart('graficobarraspaises', data, 'pais', 'promedio_renovables', 'Porcentaje de Energia Renovable', 'rgba(54, 162, 235, 0.6)');
    }
    
    //grafico de barras regiones

    async function fetchRegiones() {
        const { data, error} = await supabase
            .from('top_regiones')
            .select('*')
            .order('promedio_renovables', { ascending: false})
            

        if (error) throw error;

        createBarChart('graficobarrasregiones', data, 'region', 'promedio_renovables', 'Porcentade de Energia Renovable', 'rgba(54, 162, 235, 0.6)' );
    }
    
    //funcion para crear gráficos de barras//
    
    function createBarChart(canvasId, data, labelField, dataField, label, backgroundColor) {
        const ctx = document.getElementById(canvasId).getContext('2d')
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(item => item[labelField]),
                datasets: [{
                    label: label,
                    data: data.map(item => item[dataField]),
                    backgroundColor: backgroundColor,
                    borderColor : backgroundColor.replace('0.6', '1')
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
                                text: canvasId.includes('Paises') ? 'Paises' : 'Regiones'
                            }
                        }}}
        });
    };
    
    //grafico lineas comparativas
    async function fetchColombiaVsSuramerica() {
        const {data, error} = await supabase
            .from('colombia_suramerica')
            .select('*')
            .lte('anno', 2021)
            .order('promedio_renovables', {ascending: true});

        if (error) throw error;

        //procesar los datos

        const colombiaData = data.filter(item => item.region === 'Colombia');
        const suramericaData = data.filter(item => item.region === 'South America');
        const years = [...new Set(filteredData.map(item => item.anno))];
        const ctx = document.getElementById('graficolineascomparativas').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: [...new Set(filteredData.map(item => item.anno))],
                datasets: [{
                    label: 'Colombia',
                    data: colombiaData.map(item => item.renovables),
                    borderColor:'rgba(255,0,0,1)',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: false,
                    borderWidth: 1,
                    tension: 0.1
                    
                },
                {
                    label: 'South America',
                    data: suramericaData.map(item => item.renovables),
                    borderColor:'rgba(0,0,255,1)',
                    backgroundColor: 'rgba(0,0,255,0.5)',
                    fill: false,
                    borderWidth: 1,
                    tension: 0.1
                }]
            }
            
        }); 
    }
        
    });
