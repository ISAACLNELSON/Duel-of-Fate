class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }
  preload() {
    this.load.image("BG", "images/BG.png");
    this.load.spritesheet("PallySpriteSheet", "images/PallySpriteSheet.png", { frameWidth: 74, frameHeight: 100 });
    this.load.spritesheet("treeSpriteSheet", "images/treeSpriteSheet.png", { frameWidth: 94, frameHeight: 152 });
    this.load.image("cloud1", "images/cloud1.png");
    this.load.image("cloud2", "images/cloud2.png");
    this.load.image("cloud3", "images/cloud3.png");
    this.load.image("swordSprite", "images/swordSprite.png");
    this.load.image("spellSprite", "images/spellSprite.png");
    this.load.image("shieldSprite", "images/shieldSprite.png");
    this.load.spritesheet("BaddySpriteSheet", "images/BaddySpriteSheet.png", { frameWidth: 67, frameHeight: 100 });
    this.load.image("ground", "images/ground.png");
  }
  create() {
    let background = this.add.image(game.config.width / 2, game.config.height / 2, "BG");

    this.char = this.add.sprite(370, 310, "treeSpriteSheet");
    this.anims.create({
      key: 'treeIdle',
      frames: [
        { key: 'treeSpriteSheet', frame: 0 },
        { key: 'treeSpriteSheet', frame: 1 },
      ],
      frameRate: 3.2,
      repeat: -1
    });
    this.char.play('treeIdle');



    this.cloud1 = this.add.image(72, 38, "cloud1");
    this.cloud2 = this.add.image(225, 53, "cloud2");
    this.cloud3 = this.add.image(602, 29, "cloud3");

    this.char = this.add.sprite(190, 335, "PallySpriteSheet");
    this.anims.create({
      key: 'pallyIdle',
      frames: [
        { key: 'PallySpriteSheet', frame: 0 },
        { key: 'PallySpriteSheet', frame: 1 },
      ],
      frameRate: 3.2,
      repeat: -1
    });
    this.char.play('pallyIdle');

    this.char = this.add.sprite(290, 339, "BaddySpriteSheet");

    this.anims.create({
      key: 'badIdle',
      frames: [
        { key: 'BaddySpriteSheet', frame: 0 },
        { key: 'BaddySpriteSheet', frame: 1 },
      ],
      frameRate: 3.2,
      repeat: -1
    });
    this.char.play('badIdle');

    this.ground = this.add.image(game.config.width / 2, game.config.height / 2, "ground");

    this.swordSprite = this.add.image(70, 506, "swordSprite");
    this.swordSprite.setInteractive();
    this.swordSprite.on('pointerdown', this.swordOnDown, this);
    this.swordSprite.on('pointerup', this.swordOnUp, this);

    this.spellSprite = this.add.image(215, 515, "spellSprite");
    this.spellSprite.setInteractive();
    this.spellSprite.on('pointerdown', this.spellOnDown, this);
    this.spellSprite.on('pointerup', this.spellOnUp, this);

    this.shieldSprite = this.add.image(385, 525, "shieldSprite");
    this.shieldSprite.setInteractive();
    this.shieldSprite.on('pointerdown', this.shieldOnDown, this);
    this.shieldSprite.on('pointerup', this.shieldOnUp, this);

  }
  shieldOnUp() {
    this.shieldSprite.alpha = 1;
  }
  shieldOnDown() {
    this.shieldSprite.alpha = .5;
  }
  spellOnUp() {
    this.spellSprite.alpha = 1;
  }
  spellOnDown() {
    this.spellSprite.alpha = .5;
  }
  swordOnUp() {
    this.swordSprite.alpha = 1;
  }
  swordOnDown() {
    this.swordSprite.alpha = .5;
  }
  update() {
    this.cloud1.x += .1;
    if (this.cloud1.x > game.config.width + 100) {
      this.cloud1.x = -100;
    }
    this.cloud2.x += .09;
    if (this.cloud2.x > game.config.width + 100) {
      this.cloud2.x = -100;
    }
    this.cloud3.x += .075;
    if (this.cloud3.x > game.config.width + 100) {
      this.cloud3.x = -100;
    }

  }
}
