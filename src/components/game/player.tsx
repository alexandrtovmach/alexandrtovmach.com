import kontra from 'kontra';
import PlayerSprite from '@/assets/images/game/sprites/player.png';

const { Sprite, keyPressed, SpriteSheet } = kontra;

export const initPlayer = (w: number, h: number) => {
  const image = new Image();
  image.src = PlayerSprite.src;
  const spriteSheet = SpriteSheet({
    image: image,
    frameWidth: 28,
    frameHeight: 28,
    animations: {
      right: {
        frames: [0, 1, 2, 3],
        frameRate: 10,
      },
      left: {
        frames: [4, 5, 6, 7],
        frameRate: 10,
      },
      top: {
        frames: [8, 9, 10, 11],
        frameRate: 10,
      },
      bottom: {
        frames: [12, 13, 14, 15],
        frameRate: 10,
      },
    },
  });

  const player = Sprite({
    x: 0,
    y: 0,
    width: 40,
    height: 40,
    animations: spriteSheet.animations,
    currentAnimation: spriteSheet.animations.right,

    update() {
      if (!this.animations) return;
      const speed = 2;
      let moving = false;
      let desiredAnim = this.currentAnimation;

      if (keyPressed('arrowright') || keyPressed('d')) {
        desiredAnim = this.animations.right;
        this.x = Math.min(w - (this.width || 0), (this.x || 0) + speed);
        moving = true;
      } else if (keyPressed('arrowleft') || keyPressed('a')) {
        desiredAnim = this.animations.left;
        this.x = Math.max(0, (this.x || 0) - speed);
        moving = true;
      } else if (keyPressed('arrowup') || keyPressed('w')) {
        desiredAnim = this.animations.top;
        this.y = Math.max(0, (this.y || 0) - speed);
        moving = true;
      } else if (keyPressed('arrowdown') || keyPressed('s')) {
        desiredAnim = this.animations.bottom;
        this.y = Math.min(h - (this.height || 0), (this.y || 0) + speed);
        moving = true;
      }

      if (this.currentAnimation !== desiredAnim) {
        this.currentAnimation = desiredAnim;
        // restart the animation's internal state if Kontra's Animation supports reset/stop
        if (typeof this.currentAnimation.reset === 'function') {
          this.currentAnimation.reset();
        } else if ('frameIndex' in this.currentAnimation) {
          // try conservative reset
          this.currentAnimation.frameIndex = 0;
        }
      }

      // Only update animation frames while moving; otherwise keep first frame
      if (moving) {
        this.currentAnimation.update();
      } else {
        // ensure it shows the first frame when idle
        if ('frameIndex' in this.currentAnimation) {
          this.currentAnimation.frameIndex = 0;
        }
      }
    },
  });
  return player;
};
