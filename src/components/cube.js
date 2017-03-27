import THREE from 'three';

export default class Cube {
  constructor(scene) {
    const { innerHeight: height, innerWidth: width } = window;
    const geometry = new THREE.BoxGeometry(width, width, height, 0, 0, 0);
    const material = new THREE.MeshBasicMaterial({
      color: '#e5e5e5',
      opacity: 0.3,
      transparent: true
    });

    this.cube = new THREE.Mesh(geometry, material);
    scene.add(this.cube);

    const borderMaterial = new THREE.MeshBasicMaterial({
      color: '#fff',
      wireframe: true
    });
    const bordergeometry = new THREE.BoxGeometry(width, width, height, 0, 0, 0);
    this.border = new THREE.Mesh(bordergeometry, borderMaterial);
    scene.add(this.border);
  }
}
