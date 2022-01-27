class GameCounter {
  //   private killedMonsters: number = 0
  // let entity : Entity === KilledMonster
  private heart: p5.Image
  public killedZombies: Entity[]
  public gameTimeScore: number
  private gameTime: number
  public countDown: number
  private fuelLimit: number
  private killedHumans: Entity[]
  private hearts: p5.Image[]
  private gameFont = new p5.Font()

  constructor() {
     this.gameFont = font.gameFont
    this.heart = images.heart
    this.killedZombies = []
    this.gameTimeScore = 0
    this.gameTime = 0
    this.countDown = 1
    this.fuelLimit = 19
    this.killedHumans = []
    this.hearts = [this.heart, this.heart, this.heart, this.heart]
  }

  public countDownTimer() {
    let currentTime = int(millis() / 1000)
    this.countDown = this.fuelLimit - currentTime
    if(this.countDown < 0) {
      console.log(this.countDown)
      this.countDown = 1
      game.gameOver()
    }
  }

  public getTimer() {
    return this.countDown
  }

  public decreaseTankHealth() {
    this.hearts.pop()
  }

  public getLives() {
    return this.hearts.length
  }

  public countKilledZombies(zombie: Entity) {
    this.killedZombies.push(zombie)
  }

  public pointsPerSeconds() {
    this.gameTime += deltaTime
    if (this.gameTime > 100) {
      this.gameTimeScore += 2
      this.gameTime = 0
    }
  }

  public pointPerEntity(score: number) {
    this.gameTimeScore += score
  }

  public removePoint(score: number) {
    if (this.gameTimeScore > 0) {
      this.gameTimeScore -= score
    }
    this.gameTimeScore = 0
  }

  public drawHearts(tank: Tank) {
    let yNumber: number = -50
    for (let heart of this.hearts) {
      yNumber += 35
      image(
        heart,
        tank.position.x - tank.getSize() + 20,
        tank.position.y + yNumber,
        35,
        35
      )
    }
  }

  // private rescued() {
  //   // Return Number
  // }

  // private activeScore() {
  //   // Return Number
  // }

  // private totalScore() {
  //   // Return Number
  // }

  public update() {
    this.pointsPerSeconds()
    this.countDownTimer()
  }

  public draw() {
    textFont(this.gameFont)
    push()
    colorMode(HSL)
    fill(359, 53, 50)
    quad(/*X1*/(width * .5) - 200,/*Y1*/0, /*X2*/(width * .5) + 250,/*Y2*/0, /*X3*/(width * .5) + 210, /*Y3*/50,/*X4*/ (width * .5) - 160, /*Y4*/50)
    fill(340, 10, 11)
    quad(/*X1*/(width * .5) - 160,/*Y1*/50, /*X2*/(width * .5) + 210,/*Y2*/50, /*X3*/(width * .5) + 170, /*Y3*/100,/*X4*/ (width * .5) - 120, /*Y4*/100) 
    pop()
    push()
    fill(255)
    textSize(18)
    translate(width * .5, 25)
    text(`Zombies Killed ${this.killedZombies.length}`, 5, 5)
    text(`Score ${this.gameTimeScore}`, -150, 5)
    text(`Fuel ${this.countDown}`, -20, 60)
    pop()
  }
}
