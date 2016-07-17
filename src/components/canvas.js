import THREE from 'three';

export default class Canvas{
  constructor() {
    const { innerHeight, innerWidth } = window;

    this.scene = new THREE.Scene();
    // There are some other renderer provided by three, such as canvas renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor('skyblue');
    this.renderer.setSize(innerWidth, innerHeight);

    this.updateCamera();

    document.body.appendChild(this.renderer.domElement);
    setInterval(() => this.updateAttributes(), 500);
  }

  updateCamera() {
    const { innerHeight, innerWidth } = window;

    this.camera =  new THREE.PerspectiveCamera(85,
      innerWidth / innerHeight, 1, 10000);
    this.camera.position.z = 1000;
    this.camera.position.y = 1000;
    this.camera.position.x = 1000;
    this.camera.lookAt(this.scene.position);
  }

  updateAttributes() {
    const { innerHeight, innerWidth } = window;
    //Only make change when browser resized
    if (this.width === innerWidth && this.height === innerHeight) {
      return;
    }
    this.width = innerWidth;
    this.height = innerHeight;
    this.renderer.setSize(innerWidth, innerHeight);
    this.updateCamera();
  }
}
