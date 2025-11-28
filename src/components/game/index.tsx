import { useEffect, useRef } from 'react';
import kontra from 'kontra';
import { initPlayer } from '@/components/game/player';
import { initRoom } from '@/components/game/interior';

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

const { init, initKeys, GameLoop } = kontra;

const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    initKeys();
    // Initialize kontra with the canvas
    const { canvas, context } = init(canvasRef.current);

    // Set canvas size
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    const player = initPlayer(CANVAS_WIDTH, CANVAS_HEIGHT);
    const room = initRoom();

    // Create game loop
    const loop = GameLoop({
      update() {
        player.update();
      },

      render() {
        // Clear canvas
        context.fillStyle = 'transparent';
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Render player
        room.render();
        player.render();
      },
    });

    // Start the game loop
    loop.start();

    // Cleanup function
    return () => {
      loop.stop();
    };
  }, []);

  return (
    <main className="flex items-center justify-center min-h-full">
      <p className="absolute top-4 left-4 text-gray-700">
        Use WASD or arrow keys.
        <br />
        Try to explore the room without leaving its boundaries!
      </p>
      <canvas
        ref={canvasRef}
        className="border-2 border-gray-700 rounded-lg shadow-lg"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </main>
  );
};

export default Game;
