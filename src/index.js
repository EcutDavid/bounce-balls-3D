import './styles/app.scss';

import Canvas from './components/canvas'
import Ball from './components/ball'

const canvas = new Canvas()

const { renderer, scene } = canvas
const ball = new Ball(scene);

let counter = 0
function animate() {
  const {  camera } = canvas;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  camera.rotation.z = counter++ * Math.PI / 180
}

animate()
