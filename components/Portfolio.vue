<template>
  <!-- <Tutorial/> -->
  <div id="scene"></div>
</template>

<script>
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// // import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls.js";
// // import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// export default {
//   mounted() {
//     let scene = new THREE.Scene();
//     let cam = new THREE.PerspectiveCamera(
//       50,
//       window.innerWidth / window.innerHeight,
//       1,
//       10
//     );
//     let renderer = new THREE.WebGLRenderer({
//       alpha: true,
//       antialias: true,
//     });

//     cam.position.z = 2.2;
//     // cam.position.y += 10;

//     let sceneElement = document.getElementById("scene");
//     let targetElement = sceneElement.parentElement;

//     renderer.shadowMap.enabled = true;
//     renderer.shadowMap.type = THREE.BasicShadowMap;
//     renderer.outputEncoding = THREE.sRGBEncoding;

//     // cam.aspect = window.innerWidth / window.innerHeight;
//     // renderer.setSize(window.innerWidth, window.innerHeight);
//     cam.aspect = targetElement.offsetWidth / targetElement.offsetHeight;
//     cam.updateProjectionMatrix();
//     renderer.setSize(targetElement.offsetWidth, targetElement.offsetHeight);
//     renderer.setPixelRatio(devicePixelRatio);

//     sceneElement.appendChild(renderer.domElement);

//     // Instantiate a loader
//     const loader = new GLTFLoader();

//     // Load a glTF resource
//     loader.load(
//       // resource URL
//       "12promax.gltf",
//       // called when the resource is loaded
//       function (gltf) {
//         let sekret = gltf.scene;
//         sekret.position.set(0, -0.9, 0);
//         scene.add(sekret);
//       },
//       // called while loading is progressing
//       function (xhr) {
//         console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//       },
//       // called when loading has errors
//       function (error) {
//         console.log(error);
//       }
//     );

//     // let pGeo = new THREE.PlaneGeometry(5, 5, 10, 10);
//     // let pMat = new THREE.MeshPhongMaterial({
//     //   color: 0xfff,
//     //   side: THREE.DoubleSide,
//     // });

//     // let pMesh = new THREE.Mesh(pGeo, pMat);
//     // // pMesh.rotation.x -= Math.PI / 2;
//     // pMesh.position.set(0, -3.1, 0);
//     // pMesh.recieveShadow = true;
//     // scene.add(pMesh);

//     var pLight = new THREE.PointLight(0xffffcc, 2, 100);
//     pLight.position.set(0, 30, 20);
//     // pLight.castShadow = true;
//     scene.add(pLight);
//     // scene.add(new THREE.PointLightHelper(pLight, 0.2, 0x000));

//     var light2 = new THREE.AmbientLight(0x20202a, 7, 100);
//     light2.position.set(30, -10, 30);
//     scene.add(light2);

//     // let light1 = new THREE.PointLight(0xffffff, 1);
//     // light1.position.set(0, 3, 2);
//     // scene.add(light1);
//     // let light2 = new THREE.PointLight(0xffffff, 1);
//     // light2.position.set(0, -3, 2);
//     // scene.add(light2);

//     // const controls = new FirstPersonControls(cam, renderer.domElement);
//     let controls = new OrbitControls(cam, renderer.domElement);

//     cam.position.x += 2;
//     controls.update();

//     let move = 1.5;
//     document.addEventListener(
//       "mousemove",
//       (e) => {
//         let screenX = window.innerWidth / 2,
//           screenY = window.innerHeight / 2,
//           clientX = e.clientX,
//           clientY = e.clientY;

//         let positionX = screenX - clientX;
//         let positionY = screenY - clientY;

//         let x = (positionX * move) / screenX;
//         let y = (positionY * -move) / screenY;

//         cam.position.x = x + 2;
//         cam.position.y = y;
//         cam.position.z = 2.2;
//         controls.update();
//       },
//       false
//     );

//     let renderCalls = [];
//     function update() {
//       // renderer.render(scene, cam);
//       requestAnimationFrame(update);
//       renderCalls.forEach((callback) => {
//         callback();
//       });
//     }
//     //
//     update();

//     function renderScene() {
//       renderer.render(scene, cam);
//     }
//     renderCalls.push(renderScene);
//   },
// };
</script>
