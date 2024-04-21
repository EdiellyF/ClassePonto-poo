import { Ponto, Ponto3d } from "./classePonto.js";
import { desenharPlanoCartesiano,  toggleCoordenadas } from './scripts/desenharPlano2d.js';
import { desenhar3D } from './scripts/desenhar3d.js';

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcular').addEventListener('click', function (event) {
        event.preventDefault(); 
        const ponto_x1 = document.getElementById('ponto-x-1').value;
        const ponto_y1 = document.getElementById('ponto-y-1').value;

        const ponto_x2 = document.getElementById('ponto-x-2').value;
        const ponto_y2 = document.getElementById('ponto-y-2').value;

        const p1 = new Ponto(ponto_x1, ponto_y1);
        const p2 = new Ponto(ponto_x2, ponto_y2);

        //limpar container 3 d, para fazer o 2d
       const container3d = document.getElementById('container-3d');
        container3d.innerHTML = '';

        desenharPlanoCartesiano(p1, p2);
        const distancia = p1.distancia(p2);



       mostrar(distancia);

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

        //limpar plano
        const planoCartesiano = document.getElementById('planoCartesiano');
        planoCartesiano.width = planoCartesiano.width; 
        planoCartesiano.height = planoCartesiano.height; 

       //limpar container 3 d
       const container3d = document.getElementById('container-3d');
       container3d.innerHTML = '';

        desenhar3D(p1, p2, distancia)

        mostrar(distancia);
    });

    function mostrar(distancia){
        const div = document.getElementById('mydiv');
        div.classList.add('estilizacao-mydiv');
        div.innerHTML = '';
        
        div.innerHTML = `A distância total é:  ${distancia}`;
    }

});
