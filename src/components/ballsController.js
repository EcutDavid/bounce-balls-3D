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

    this.radiusArr = [];
    for (var i = 0; i < count; i++) {
      this.radiusArr.push(Math.random() * 27 + 6);
    }

    // Setup balls
    let xOffsetCounter = 0;
    let yOffsetCounter = 0;
    for (let i = 0; i < count; i++) {
      xOffsetCounter += 50 * (i % 6) + Math.random() * 17;
      xOffsetCounter %= initialWidth;
      yOffsetCounter = Number.parseInt(i / 6) * 70 + Math.random() * 27;
      yOffsetCounter %= initialWidth;
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
    }

    // TODO: Change naturalForce basedon user device's state.
    // window.addEventListener('devicemotion', (event) => {
    //   const { x, y } = event.accelerationIncludingGravity
    //   if (x !== null && x !== undefined && y !== null && y !== undefined) {
    //     this.naturalForce = { x, y: -y };
    //   }
    // })
  }

}
