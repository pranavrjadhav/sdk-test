import { createSignal } from 'solid-js';

export default function CounterCard() {
  const [count, setCount] = createSignal(0);

  return (
    <div class="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md text-center">
      <h2 class="text-xl font-semibold mb-4">Counter Card</h2>

      <div class="flex justify-center items-center space-x-4 mb-4">
        <button
          class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => {   console.log('[SolidJS] Decrement clicked'); setCount(count() - 1);  console.log('[SolidJS] Decrement clicked value'+ count());}}
        >
          -
        </button>

        <span class="text-2xl font-bold">{count()}</span>

        <button
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => {  console.log('[SolidJS] Increment clicked'); setCount(count() + 1);  console.log('[SolidJS] Increment clicked value'+count());}}
        >
          +
        </button>
      </div>

      <p class="text-gray-600">Current count: {count()}</p>
    </div>
  );
}
