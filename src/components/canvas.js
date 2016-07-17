import THREE from 'three'

export default class Canvas{
  constructor() {
    const { innerHeight, innerWidth } = window;

    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor('#eee')
    this.renderer.setSize(innerWidth, innerHeight);

    this.scene.add(new THREE.AxisHelper(500));
    setInterval(this.updateAttributes, 500);

    this.camera =  new THREE.PerspectiveCamera(75,
      innerWidth / innerHeight, 1, 10000);
    this.camera.position.z = 700;
    this.camera.position.y = 500;
    this.camera.position.x = 500;
    this.camera.lookAt(this.scene.position)

    document.body.appendChild(this.renderer.domElement);
  }

  updateAttributes() {
    const { innerHeight, innerWidth } = window;

    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }
}
