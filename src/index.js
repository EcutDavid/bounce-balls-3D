import './styles/app.scss';

import Canvas from './components/canvas';
import Ball from './components/ball';
import Cube from './components/cube';
import BallsController from './components/ballsController';

const BALLS_COUNT = 80;

const canvas = new Canvas();
const { innerWidth: initialWidth, innerHeight: initialHeight } = window;

const ballsController = new BallsController(BALLS_COUNT,
  initialWidth, initialHeight);

const { renderer, scene, camera } = canvas;

const { radiusArr, positions } = ballsController;
const balls = [];
for (let i = 0; i < BALLS_COUNT; i++) {
  balls.push(new Ball(scene, radiusArr[i], positions[i]));
}

new Cube(scene);


let counter = 0;
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  camera.rotation.z = counter++ / 150;

  ballsController.update();
  ballsController.positions.forEach((d, i) => {
    balls[i].update(d);
  })
}

animate();
