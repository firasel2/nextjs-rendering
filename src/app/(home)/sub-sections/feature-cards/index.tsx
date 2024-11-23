import { ClientComponent } from "./sub-compnents/client";
import { ServerComponent } from "./sub-compnents/server";

export function FeatureCards() {
  return (
    <section className="container py-5">
      <div className="w-full grid grid-cols-2 gap-10">
        <ClientComponent />
        <ServerComponent />
      </div>
    </section>
  );
}
