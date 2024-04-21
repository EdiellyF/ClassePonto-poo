

function desenharPlanoCartesiano(p1, p2) {
    let planoCartesiano = document.getElementById('planoCartesiano').getContext('2d');
    let chart = new Chart(planoCartesiano, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'P1',
                data: [{
                    x: p1.x,
                    y: p1.y
                }],
                backgroundColor: 'red',
                pointRadius: 5
            }, {
                label: 'P2',
                data: [{
                    x: p2.x,
                    y: p2.y
                }],
                backgroundColor: 'blue',
                pointRadius: 5
            }, {
                label: 'Linha entre os pontos',
                data: [{ x: p1.x, y: p1.y }, { x: p2.x, y: p2.y }],
                borderColor: 'green',
                borderWidth: 2,
                fill: false,
                showLine: true 
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    type: 'linear',
                    position: 'left'
                }
            }
        }
    });
}


function toggleCoordenadas() {
    const coordenadas2d = document.getElementById('form-coordenadas-2d');
    const coordenadas3d = document.getElementById('form-coordenadas-3d');

    coordenadas2d.classList.toggle('coordenadas-3d');
    coordenadas3d.classList.toggle('coordenadas-3d');
}

document.getElementById('btn-toggle-coordenadas').addEventListener('click', toggleCoordenadas);



export {desenharPlanoCartesiano, toggleCoordenadas}