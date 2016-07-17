// Control position for each ball
//
export default class GameController {
  constructor(count, initialWidth, innerHeight) {
    this.positions = [];
    this.defaultAcc = [];
    this.speed = [];
    this.naturalForce = {
      x: 0,
      y: 0,
      z: 9.8
    };

    this.zMaxLength = innerHeight / 2;
    this.xyMaxLength = initialWidth / 2;

    this.radiusArr = [];
    for (var i = 0; i < count; i++) {
      this.radiusArr.push(Math.random() * 27 + 6);
    }

    // Setup balls
    let xOffsetCounter = 0;
    let yOffsetCounter = 0;
    for (let i = 0; i < count; i++) {
      xOffsetCounter += 50 * (i % 6) + Math.random() * 17;
      xOffsetCounter %= (initialWidth - 70);
      yOffsetCounter = Number.parseInt(i / 6) * 70 + Math.random() * 27;
      yOffsetCounter %= (initialWidth - 70);
      this.positions.push({
        x: -initialWidth / 2 + xOffsetCounter,
        y: -initialWidth / 2 + yOffsetCounter,
        z: -innerHeight / 2 + 50
      });
      this.defaultAcc.push({
        x: (Math.random() - 0.5 ) * 10.0,
        y: (Math.random() - 0.5 ) * 10.0,
        z: (Math.random() - 0.5 ) * 10.0
      });
      this.speed.push({
        x: 0,
        y: 0,
        z: 0
      });

      this.onInit = true;
      setTimeout(() => this.onInit = false, 2000)
    }

    // TODO: Change naturalForce basedon user device's state.
    // window.addEventListener('devicemotion', (event) => {
    //   const { x, y } = event.accelerationIncludingGravity
    //   if (x !== null && x !== undefined && y !== null && y !== undefined) {
    //     this.naturalForce = { x, y: -y };
    //   }
    // })
  }

  update(fps = 60) {
    // Pass the very first few seconds
    // Application is not stable during that time
    if (this.onInit) {
      return;
    }
    const { zMaxLength, xyMaxLength } = this;

    this.positions = this.positions.map((d, i) => {
      //handle force
      const accX = this.defaultAcc[i].x + this.naturalForce.x;
      const accY = this.defaultAcc[i].y + this.naturalForce.y;
      const accZ = this.defaultAcc[i].z + this.naturalForce.z;

      const time = 1 / fps;
      this.speed[i].x += accX * 50 * time;
      this.speed[i].y += accY * 50 * time;
      this.speed[i].z += accZ * 50 * time;

      d.x += time * this.speed[i].x;
      d.y += time * this.speed[i].y;
      d.z += time * this.speed[i].z;

      //handle ball collide borders
      const radius = this.radiusArr[i]
      if (d.x < -xyMaxLength + radius) {
        d.x = -xyMaxLength + radius;
        this.speed[i].x *= -1;
      }
      if (d.x > xyMaxLength - radius) {
        d.x = xyMaxLength - radius;
        this.speed[i].x *= -1;
      }
      if (d.y > xyMaxLength - radius) {
        d.y = xyMaxLength - radius;
        this.speed[i].y *= -1;
      }
      if (d.y < -xyMaxLength + radius) {
        d.y = -xyMaxLength + radius;
        this.speed[i].y *= -1;
      }
      if (d.z > zMaxLength - radius) {
        d.z = zMaxLength - radius;
        this.speed[i].z *= -1;
      }
      if (d.z < -zMaxLength + radius) {
        d.z = -zMaxLength + radius;
        this.speed[i].z *= -1;
      }

      return d;
    });
  }
}
