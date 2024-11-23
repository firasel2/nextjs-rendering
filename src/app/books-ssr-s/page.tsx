import { Suspense } from "react";
import { BookList } from "./sub-sections/book-list";

export const dynamic = "force-dynamic";

export default function Books() {
  return (
    <>
      <section className="container py-5">
        <div className="flex flex-col gap-2 mb-10">
          <h2 className="text-4xl font-bold text-center">All Books</h2>
          <p className="text-center text-sm text-gray-500">
            This page is server-side rendered with streaming enabled, allowing
            for progressive loading of content
          </p>
        </div>
        <Suspense
          fallback={
            <div className="text-3xl text-blue-500 font-semibold min-h-[50vh] flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <BookList />
        </Suspense>
      </section>
    </>
  );
}
