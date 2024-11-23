export function FeatureCards() {
  return (
    <section className="container py-5">
      <div className="w-full grid grid-cols-2 gap-10">
        <div className="flex items-center justify-center aspect-[1.78] bg-cyan-50 border border-solid border-cyan-600 p-10 rounded-md">
          <h2 className="text-4xl font-bold text-cyan-800">
            Client Components
          </h2>
        </div>
        <div className="flex items-center justify-center aspect-[1.78] bg-green-50 border border-solid border-green-600 p-10 rounded-md">
          <h2 className="text-4xl font-bold text-green-800">
            Server Components
          </h2>
        </div>
        <div className="col-span-2 flex items-center justify-center aspect-[2.8] bg-sky-50 border border-solid border-sky-600 p-10 rounded-md">
          <h2 className="text-4xl font-bold text-sky-800">
            Partial Prerendering
          </h2>
        </div>
      </div>
    </section>
  );
}
