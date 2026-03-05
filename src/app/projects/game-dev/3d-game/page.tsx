import Link from 'next/link';

export default function ThreeDGamePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link href="/projects/game-dev" className="text-sm text-gray-500 hover:underline self-start mb-4">
          &larr; Back to Game Dev Projects
        </Link>
        <h1 className="text-4xl font-bold text-center">3D Game</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          My first 3D game engine project exploring concepts like projection and rotation using matrix math. This project was a major learning experience in linear algebra and game development, with all code and libraries written by me.
        </p>
      </div>
      
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex justify-center items-center mb-12" style={{ minHeight: '600px' }}>
        <iframe 
          src="/games/3D-Game/Game.html" 
          className="w-full h-full border-0"
          style={{ minHeight: '600px' }}
          title="3D Game"
        />
      </div>

      <div className="w-full max-w-4xl bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">About the Project</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            This program is a demonstration of matrix math in 3D game development, including projection and rotation. Utilizing two math libraries for matrix and vector calculations, the game's code has been improved and recorded in version updates from 1.0.0 to 1.0.6. The purpose of the creation of this game was to learn how to use and implement linear algebra concepts with matrices. Every library and file used was written by me including the matrix and vector calculation functions.
          </p>
          <p>
            To play the game, click on the canvas to lock the mouse (press esc to exit lock mode). Use mouse movements to look around and the key inputs <strong>w, a, s, d</strong> to move, <strong>space</strong> to jump, and <strong>shift</strong> for a sprint effect that increases movement speed. Press <strong>r</strong> to reset the player.
          </p>
        </div>
      </div>
    </main>
  );
}
