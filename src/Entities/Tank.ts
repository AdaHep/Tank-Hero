class Tank extends Entity {
  private reloadTime: number

  constructor() {
    const size = 100
    const health = 4
    const position = createVector(width * 0.2, height * 0.5)
    const img = images.tank
    // const sound: p5.SoundFile = 2
    const points = 0
    const damage = 0
    const ishit = false
    const velocity: p5.Vector = createVector(0, 0)

    super(size, health, position, img, points, damage, ishit, velocity)
    this.reloadTime = 500
  }

  public update() {
    this.move()
    super.update()
    return this.fireShot()
  }

  public move() {
    //Röra tanken i X-led framåt
    if (this.position.x > width * 0.2) {
      if (keyIsDown(37)) {
        this.position.x -= 10
      }
    } else {
      this.position.x = width * 0.2
    }
    //Röra tanken i X-led bakåt
    if (this.position.x < width - 100) {
      if (keyIsDown(39)) {
        this.position.x += 5
      }
    } else {
      this.position.x = width - 100
    }

    //Röra tanken i Y-led nedåt
    if (this.position.y < height - 100) {
      if (keyIsDown(40)) {
        this.position.y += 5
      }
    } else {
      this.position.y = height - 100
    }
    //Röra tanken i Y-led uppåt
    if (this.position.y > height / 6) {
      if (keyIsDown(38)) {
        this.position.y -= 5
      }
    } else {
      this.position.y = height / 6
    }
  }

  private fireShot() {
    this.reloadTime -= deltaTime
    if (keyIsDown(32) && this.reloadTime < 0) {
      this.reloadTime = 500
      return new Projectile(this.position.x, this.position.y)
    }
  }

  // public updateBullet() {
  //   if (this.bullets.length > 0) {
  //     for (let i = 0; i < this.bullets.length; i++) {
  //       this.bullets[i].update()
  //       if (
  //         this.bullets[i].position.x < 0 ||
  //         this.bullets[i].position.x > width
  //       ) {
  //         this.bullets.splice(i, 1)
  //       }
  //     }
  //   }
  // }
}
// public shoot() {}
//

/*public KeyReleased(){
  if ( this.bullets.)
  
  
}*/
