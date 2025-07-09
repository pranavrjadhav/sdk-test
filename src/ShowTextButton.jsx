import { createSignal } from 'solid-js';

function ShowTextButton() {
  const [showText, setShowText] = createSignal(false);

  return (
    <div class="p-4 text-center">
      <button 
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setShowText(true)}
      >
        Show Text
      </button>

      {showText() && (
        <p class="mt-4 text-lg text-gray-700">Hello! This is the text.</p>
      )}
    </div>
  );
}

export default ShowTextButton;
