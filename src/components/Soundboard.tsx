import React from 'react';

// Define the props for a single sound button
interface SoundButtonProps {
  soundName: string;
  soundFile: string; // Path to the sound file in the public directory
  buttonText: string;
  buttonColor?: string; // Optional: for styling
}

const SoundButton: React.FC<SoundButtonProps> = ({ soundName, soundFile, buttonText, buttonColor }) => {
  const playSound = () => {
    const audio = new Audio(soundFile);
    audio.play().catch(error => console.error("Error playing sound:", error));
  };

  return (
    <button
      onClick={playSound}
      className={`m-2 p-4 rounded-lg text-white font-bold shadow-md hover:opacity-80 transition-opacity ${buttonColor || 'bg-blue-500'}`}
      aria-label={`Play ${soundName} sound`}
    >
      {buttonText}
    </button>
  );
};

// Define the props for the Soundboard component
interface SoundboardProps {
  sounds: Array<Omit<SoundButtonProps, 'soundName'>>; // soundName can be derived from buttonText or soundFile if needed
}

const Soundboard: React.FC<SoundboardProps> = ({ sounds }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">Fun Soundboard!</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
        {sounds.map((sound, index) => (
          <SoundButton
            key={index}
            soundName={sound.buttonText} // Or a more descriptive name if available
            soundFile={sound.soundFile}
            buttonText={sound.buttonText}
            buttonColor={sound.buttonColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Soundboard;

