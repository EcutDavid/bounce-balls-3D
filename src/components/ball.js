import THREE from 'three';

export default class Ball {
  constructor(scene, radius = 40, pos = { x: 500, y: 0, z: 10 }) {
    this.radius = radius;
    const ballGeometry = new THREE.SphereGeometry(this.radius, 70, 70);
    const ballMaterial = new THREE.MeshNormalMaterial();

    this.ball = new THREE.Mesh(ballGeometry, ballMaterial);
    scene.add(this.ball);
    const {x, y, z} = pos;
    this.ball.position.set(x, y, z);
  }

  update({x, y, z}) {
    this.ball.position.set(x, y, z);
  }
}
