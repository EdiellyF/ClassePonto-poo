import { Ponto, Ponto3d } from "./classePonto.js";
    
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
                showLine: true // This enables showing the line in the scatter plot
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



document.addEventListener('DOMContentLoaded', function() {

    
    

    document.getElementById('calcular').addEventListener('click', function (event) {
        event.preventDefault(); 
        const ponto_x1 = document.getElementById('ponto-x-1').value;
        const ponto_y1 = document.getElementById('ponto-y-1').value;

        const ponto_x2 = document.getElementById('ponto-x-2').value;
        const ponto_y2 = document.getElementById('ponto-y-2').value;

        const p1 = new Ponto(ponto_x1, ponto_y1);
        const p2 = new Ponto(ponto_x2, ponto_y2);

        desenharPlanoCartesiano(p1, p2);

        const distancia = p1.distancia(p2);

        console.log(distancia);
        document.getElementById('mydiv').innerHTML =  distancia;
    });


    document.getElementById('calcularZ').addEventListener('click', function (event) {
        event.preventDefault(); 
        const ponto_x1 = document.getElementById('ponto-x-1-3d').value;
        const ponto_y1 = document.getElementById('ponto-y-1-3d').value;
        const ponto_z1 = document.getElementById('ponto-z-1-3d').value;


        const ponto_x2 = document.getElementById('ponto-x-2-3d').value;
        const ponto_y2 = document.getElementById('ponto-y-2-3d').value;
        const ponto_z2 = document.getElementById('ponto-y-2-3d').value;

        const p1 = new Ponto3d(ponto_x1, ponto_y1, ponto_z1);
        const p2 = new Ponto3d(ponto_x2, ponto_y2, ponto_z2);
        const distancia = p1.distancia(p2);
        const planoCartesiano = document.getElementById('planoCartesiano');
        planoCartesiano.width = planoCartesiano.width; 
        planoCartesiano.height = planoCartesiano.height; 
        mostrar(distancia);
    });


    function mostrar(distancia){
        const div = document.getElementById('mydiv');
        div.innerHTML = '';
        div.innerHTML = distancia;
    }


});
