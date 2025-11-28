import kontra from 'kontra';
import FloorSprite from '@/assets/images/game/sprites/room_floor.png';

const { Sprite, keyPressed, SpriteSheet } = kontra;

export const initRoom = () => {
  const image = new Image();
  image.src = FloorSprite.src;
  const spriteSheet = SpriteSheet({
    image: image,
    frameWidth: 32,
    frameHeight: 32,
    animations: {
      carpet: {
        frames: [2],
        frameRate: 1,
      }
    },
  });

  const carpet = Sprite({
    x: 0,
    y: 0,
    width: 40,
    height: 40,
    animations: spriteSheet.animations,
    currentAnimation: spriteSheet.animations.carpet,
  });
  return carpet;
};
