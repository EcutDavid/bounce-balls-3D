import THREE from 'three';

export default class Cube {
  constructor(scene) {
    const { innerHeight: height, innerWidth: width } = window;
    const geometry = new THREE.BoxGeometry(width, width, height);
    const material = new THREE.MeshBasicMaterial({
      color: '#eee',
      opacity: 0.2,
      transparent: true
    });

    this.cube = new THREE.Mesh(geometry, material);
    scene.add(this.cube);
  }
}
