export function Hero() {
  return (
    <section className="container py-5">
      <div className="w-full bg-purple-50 border border-solid border-purple-600 p-10 rounded-md relative">
        <span className="text-sm text-gray-800 absolute bg-purple-300 left-1 top-1 py-2 px-4 rounded-md">
          Static Page
        </span>

        <div className="flex flex-col gap-4 items-center justify-center min-h-[25rem]">
          <h2 className="text-4xl font-bold">Home Page</h2>
        </div>
      </div>
    </section>
  );
}
