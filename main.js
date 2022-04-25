import * as THREE from './build/three.module.js';

console.log("THREE is working", THREE);

//after HTML has finished loading, add event listener
document.addEventListener("DOMContentLoaded", () => {
    const scene = new THREE.Scene();

    //create a box 
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({color: "#0000FF"});
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    cube.position.set(0, 0, -2);

    //rotation is divide by radian
    // Math.PI/4 == 45 Degrees
    // π4=180∘4=45∘
    cube.rotation.set(0, Math.PI/4, 0);

    //create camera
    const camera = new THREE.PerspectiveCamera();
    camera.position.set(1, 1, 5);

    //make the background to be transparent => add extra parameter when you create an object 
    //alpha: true
    const renderer = new THREE.WebGL1Renderer({alpha: true});
    renderer.setSize(500, 500);
    renderer.render(scene, camera);

    //create a video 
    const video = document.createElement("video");

    //start the webcam
    navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
        video.srcObject = stream;
        video.play();
    })

    //set video position to absolute 
    video.style.position = "absolute";
    video.style.width = renderer.domElement.width;
    video.style.height = renderer.domElement.height;
    renderer.domElement.style.position = "absolute";

    //attach video to document body 
    document.body.appendChild(video);
    //renderer.domElement == canvas element 
    document.body.appendChild(renderer.domElement);
})