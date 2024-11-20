
class NPC2{
    constructor (x, y, size, velocity= {x: 0, y: 0}){
        this.x = x;
        this.y = y;
        this.size = size;
        this.height = size;
        this. width = size;
        this.velocity = velocity;
        this.center = {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2,
        };
        this.image = new Image();
        this.image.src = './images/OldWoman/SpriteSheet.png';
    }

    draw (c) {
        c.fillStyle = 'rgba(0, 0, 255, 0.5)';
        c.fillRect(this.x, this.y, this.width, this.height);
        c.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update (deltaTime, collisionBlocks) {
        if (!deltaTime) return;

        this.updateHorizontalPosition(deltaTime);
        this.checkForHorizontalCollisions(collisionBlocks);

        this.updateVerticalPosition(deltaTime);
        this.checkForVerticalCollisions(collisionBlocks);


    }
}