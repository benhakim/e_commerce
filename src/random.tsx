
import React from "react";

interface CounterProps {
  initial?: number;
}
hello worldhh

hello worldhh
hello world
hello worldhello world
hello world

export default function Counter({ initial = 0 }: CounterProps) {
  const [count, setCount] = React.useState(initial);

  return (
    <div className="p-6 max-w-sm mx-auto rounded-2xl shadow-xl">
      <h1 className="text-2xl font-bold mb-4">Nvim Practice TSX</h1>

      <p className="text-lg mb-4">Count: {count}</p>

      <div className="flex gap-4">
        <button
          className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button
          className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
