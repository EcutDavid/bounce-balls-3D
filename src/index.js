import './styles/app.scss';

import Canvas from './components/canvas'

const { renderer, scene, camera } = new Canvas()

function animate() {
  requestAnimationFrame(animate)
  renderer.render( scene, camera );
}

animate()
