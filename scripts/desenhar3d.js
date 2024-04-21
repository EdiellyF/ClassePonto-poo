import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.163.0/three.module.js';

function desenhar3D(p1, p2, distancia) {
    // Cria a cena
    const scene = new THREE.Scene();

    // Cria a câmera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);

    // Cria o renderizador
    const renderer = new THREE.WebGLRenderer();
    // Define o tamanho do renderizador
    renderer.setSize(800, 600);

    // Obtém a referência do contêiner HTML onde a cena será renderizada
    const container = document.getElementById('container-3d')
    container.appendChild(renderer.domElement);

    // Define os pontos
    const points = [
        { x: p1.x, y: p1.y, z: p1.z },
        { x: p2.x, y: p2.y, z: p2.z }
    ];

    // Cria esferas para representar os pontos
    const pointGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    points.forEach(point => {
        const sphere = new THREE.Mesh(pointGeometry, pointMaterial);
        sphere.position.set(point.x, point.y, point.z);
        scene.add(sphere);
    });

    // Cria uma linha para representar a distância entre os pontos
    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(p1.x, p1.y, p1.z),
        new THREE.Vector3(p2.x, p2.y, p2.z)
    ]);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);

    // Adiciona uma grade de referência
    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);

    // Renderiza a cena
    renderer.render(scene, camera);
}




export {desenhar3D}