class NPC {
    constructor({ x, y, size, velocity = { x: 0, y: 0 },imageSrc }) {
      this.x = x;
      this.y = y;
      this.width = size;
      this.height = size;
      this.velocity = { x: 0, y: 0 }; 
      this.center = {
        x: this.x + this.width / 2,
        y: this.y + this.height / 2,
      };
  
      this.loaded = false;
      this.image = new Image();
      this.image.onload = () => {
        this.loaded = true;
      };
      this.image.src = './images/OldWoman/SpriteSheet.png';
  
      this.currentFrame = 0;
      this.elapsedTime = 0;
  
      this.hasHitEnemy = false;
      this.isInvincible = false;
      this.elapsedInvincibilityTime = 0;
      this.invincibilityInterval = 0.8;
    }

  
    draw(c) {
      if (!this.loaded) return;
  
      let alpha = 1;
      if (this.isInvincible) alpha = 0.5;
  
      c.save();
      c.globalAlpha = alpha;
      c.drawImage(
        this.image,
        this.currentSprite.x,
        this.currentSprite.y + this.currentSprite.height * this.currentFrame + 0.5,
        this.currentSprite.width,
        this.currentSprite.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
      c.restore();
    }
  
    update(deltaTime, collisionBlocks) {
      if (!deltaTime) return;
  
      this.elapsedTime += deltaTime;
  
      if (this.isInvincible) {
        this.elapsedInvincibilityTime += deltaTime;
  
        if (this.elapsedInvincibilityTime >= this.invincibilityInterval) {
          this.isInvincible = false;
          this.elapsedInvincibilityTime = 0;
        }
      }
  
      const intervalToGoToNextFrame = 0.15;
  
      if (this.elapsedTime > intervalToGoToNextFrame) {
        this.currentFrame = (this.currentFrame + 1) % this.currentSprite.frameCount;
        this.elapsedTime -= intervalToGoToNextFrame;
      }
  
      this.updateHorizontalPosition(deltaTime);
      this.checkForHorizontalCollisions(collisionBlocks);
  
      this.updateVerticalPosition(deltaTime);
      this.checkForVerticalCollisions(collisionBlocks);
  
      this.center = {
        x: this.x + this.width / 2,
        y: this.y + this.height / 2,
      };
    }
  
    updateHorizontalPosition(deltaTime) {
      this.x += this.velocity.x * deltaTime;
    }
  
    updateVerticalPosition(deltaTime) {
      this.y += this.velocity.y * deltaTime;
    }
  
    checkForHorizontalCollisions(collisionBlocks) {
      const buffer = 0.0001;
      for (let i = 0; i < collisionBlocks.length; i++) {
        const collisionBlock = collisionBlocks[i];
  
        if (
          this.x <= collisionBlock.x + collisionBlock.width &&
          this.x + this.width >= collisionBlock.x &&
          this.y + this.height >= collisionBlock.y &&
          this.y <= collisionBlock.y + collisionBlock.height
        ) {
          if (this.velocity.x < 0) {
            this.x = collisionBlock.x + collisionBlock.width + buffer;
            break;
          }
  
          if (this.velocity.x > 0) {
            this.x = collisionBlock.x - this.width - buffer;
            break;
          }
        }
      }
    }
  
    checkForVerticalCollisions(collisionBlocks) {
      const buffer = 0.0001;
      for (let i = 0; i < collisionBlocks.length; i++) {
        const collisionBlock = collisionBlocks[i];
  
        if (
          this.x <= collisionBlock.x + collisionBlock.width &&
          this.x + this.width >= collisionBlock.x &&
          this.y + this.height >= collisionBlock.y &&
          this.y <= collisionBlock.y + collisionBlock.height
        ) {
          if (this.velocity.y < 0) {
            this.velocity.y = 0;
            this.y = collisionBlock.y + collisionBlock.height + buffer;
            break;
          }
  
          if (this.velocity.y > 0) {
            this.velocity.y = 0;
            this.y = collisionBlock.y - this.height - buffer;
            break;
          }
        }
      }
    }
  }