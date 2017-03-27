import './styles/app.scss';

import Canvas from './components/canvas';
import Ball from './components/ball';
import Cube from './components/cube';
import BallsController from './components/ballsController';

const BALLS_COUNT = 50;
const FRAME_COUNTPER_BALl = 10;


const init = () => {
  const canvas = new Canvas();
  const { innerWidth: initialWidth, innerHeight: initialHeight } = window;

  const ballsController = new BallsController(
    BALLS_COUNT,
    initialWidth,
    initialHeight
  );

  const { renderer, scene, camera } = canvas;

  const { radiusArr, positions } = ballsController;
  const balls = [];
  let frameCounter = 0;

  const lastStep = () => {
    new Cube(scene);

    let counter = 0;
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      camera.rotation.z = counter++ / 150;
      if ((balls.length < BALLS_COUNT) && (frameCounter++ === FRAME_COUNTPER_BALl)) {
        balls.push(new Ball(scene, radiusArr[balls.length], positions[balls.length]));
        frameCounter = 0;
      }

      ballsController.update();
      ballsController.positions.forEach((d, i) => {
        if (balls[i]) {
          balls[i].update(d);
        }
      })
    }

    animate();
  };

  setTimeout(function () {
    lastStep();
  }, 0);

};

setTimeout(function () {
  init();
}, 50);
