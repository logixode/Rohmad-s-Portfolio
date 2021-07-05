<template>
  <!-- <Tutorial/> -->
  <div></div>
</template>

<script>
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
export default {
  mounted() {
    let scene = new THREE.Scene();
    let cam = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    let renderer = new THREE.WebGLRenderer({
      antialias: true,
    });

    // cam.position.z += 10;
    // cam.position.y += 10;

    scene.background = new THREE.Color(0x00ddaa);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(devicePixelRatio);

    window.addEventListener(
      "resize",
      function () {
        cam.aspect = window.innerWidth / window.innerHeight;
        cam.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      },
      false
    );

    document.body.appendChild(renderer.domElement);

    // Instantiate a loader
    const loader = new OBJLoader();

    // Load a glTF resource
    loader.load(
      // resource URL
      "/iphone-s7.obj",
      // called when resource is loaded
      function (object) {
        console.log(object);
        object.position.z -= 5;
        scene.add(object);
      },
      // called when loading is in progresses
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened");
      }
    );

    let pGeo = new THREE.PlaneGeometry(5, 5, 10, 10);
    let pMat = new THREE.MeshPhongMaterial({
      color: 0xfff,
      side: THREE.DoubleSide,
    });

    // pMat.map = texture;

    // let pMesh = new THREE.Mesh(pGeo, pMat);
    // pMesh.rotation.x -= Math.PI / 2;
    // pMesh.position.set(0, -3.1, 0);
    // pMesh.recieveShadow = true;
    // scene.add(pMesh);

    let light1 = new THREE.PointLight(0xffffff, 1);
    light1.position.set(0, 3, 2);
    scene.add(light1);
    let light2 = new THREE.PointLight(0xffffff, 1);
    light2.position.set(0, -3, 2);
    scene.add(light2);

    // const controls = new OrbitControls(cam, renderer.domElement);
    const controls = new FirstPersonControls(cam, renderer.domElement);

    let move = 0.5;
    document.addEventListener(
      "mousemove",
      (e) => {
        let screenX = window.innerWidth / 2,
          screenY = window.innerHeight / 2,
          clientX = e.clientX,
          clientY = e.clientY;

        let positionX = screenX - clientX;
        let positionY = screenY - clientY;

        let x = (positionX * move) / screenX;
        let y = (positionY * -move) / screenY;

        cam.position.x = x;
        cam.position.y = y;
      },
      false
    );

    let renderCalls = [];
    function update() {
      // renderer.render(scene, cam);
      requestAnimationFrame(update);
      renderCalls.forEach((callback) => {
        callback();
      });
    }
    //
    update();

    function renderScene() {
      renderer.render(scene, cam);
    }
    renderCalls.push(renderScene);
  },
};
</script>
