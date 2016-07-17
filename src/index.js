import './styles/app.scss';

import Canvas from './components/canvas';
import Ball from './components/ball';
import Cube from './components/cube'
// import BallsController from './components/ballsController';

const canvas = new Canvas();
const { innerHeight: initialHeight, innerWidth: initialWidth } = window;

const { renderer, scene } = canvas;
const ball = new Ball(scene);
const cube = new Cube(scene);

function animate() {
  const {  camera } = canvas;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
