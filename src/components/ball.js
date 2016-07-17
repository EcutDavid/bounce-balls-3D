import THREE from 'three';
import { generateRandomColor } from '../helpers/color';

export default class Ball {
  constructor(scene, pos = { x: 0, y: 0, z: 0 }) {
    this.radius = Math.random() * 25 + 10;
    const ballGeometry = new THREE.SphereGeometry(this.radius, 70, 70);
    const ballMaterial = new THREE.MeshNormalMaterial({
      color: `${generateRandomColor()}`
    });
    const lightGeometry = new THREE.SphereGeometry(this.radius * 2, 70, 70);
    const lightMaterial = new THREE.MeshBasicMaterial({
      color: `${generateRandomColor()}`,
      opacity: 0.4,
      transparent: true
    });

    const { x, y, z } = pos
    this.ball = new THREE.Mesh(ballGeometry, ballMaterial);
    this.light = new THREE.Mesh(lightGeometry, lightMaterial);
    this.ball.position.x = x;
    this.ball.position.y = y;
    this.ball.position.z = z;
    this.light.position.x = x;
    this.light.position.y = y;
    this.light.position.z = z;
    scene.add(this.ball);
    scene.add(this.light);
  }
}
