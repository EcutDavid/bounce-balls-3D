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
    document.body.querySelector('.loading').remove();
    document.body.appendChild(this.renderer.domElement);
    setInterval(() => this.updateAttributes(), 100);
  }

  updateCamera() {
    const { innerHeight, innerWidth } = window;

    this.camera =  new THREE.PerspectiveCamera(55,
      innerWidth / innerHeight, 1, 10000);
    this.camera.position.z = innerWidth;
    this.camera.position.y = innerWidth;
    this.camera.position.x = innerWidth;
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
