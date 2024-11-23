"use client";

export function ClientComponent() {
  console.log("Client Component");
  return (
    <div className="flex flex-col items-center justify-center aspect-[1.78] bg-cyan-50 border border-solid border-cyan-600 p-10 rounded-md gap-4">
      <h2 className="text-4xl font-bold text-cyan-800">Client Components</h2>
      <button
        onClick={() => alert("This is a client-side event handler!")}
        className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors"
      >
        Click me!
      </button>
    </div>
  );
}
