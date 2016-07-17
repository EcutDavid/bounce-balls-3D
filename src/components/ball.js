import THREE from 'three';
import { generateRandomColor } from '../helpers/color';

export default class Ball {
  constructor(scene) {
    const ballGeometry = new THREE.SphereGeometry(200, 70, 70);
    const ballMaterial = new THREE.MeshNormalMaterial();
    const lightGeometry = new THREE.SphereGeometry(300, 70, 70);
    const lightMaterial = new THREE.MeshBasicMaterial({
      color: `${generateRandomColor()}`,
      transparent: true, opacity: 0.2
    });

    const ball = new THREE.Mesh(ballGeometry, ballMaterial);
    const light = new THREE.Mesh(lightGeometry, lightMaterial);
    scene.add(ball);
    scene.add(light);
  }
}
