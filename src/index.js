import './styles/app.scss';

import Canvas from './components/canvas';
import Ball from './components/ball';
import Cube from './components/cube';
import BallsController from './components/ballsController';

const BALLS_COUNT = 80

const canvas = new Canvas();
const { innerHeight: initialHeight, innerWidth: initialWidth } = window;

const ballsController = new BallsController(BALLS_COUNT,
  initialWidth, initialHeight);
const { renderer, scene } = canvas;

const { radiusArr, positions } = ballsController
for (let i = 0; i < BALLS_COUNT; i++) {
  new Ball(scene, radiusArr[i], positions[i])
}

new Cube(scene);

function animate() {
  const { camera } = canvas;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
