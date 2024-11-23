import { IBook } from "@/app/interface";
import Image from "next/image";

export async function BookList() {
  const books: IBook[] | undefined = await fetch(
    "http://localhost:8080/books?_limit=12",
    {
      cache: "no-store",
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="grid grid-cols-4 gap-8">
      {books?.map((book) => (
        <div key={book.id} className="flex flex-col gap-3">
          <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
            <Image src={book.image} alt={book.name} width={500} height={500} />
          </div>
          <div className="flex flex-col gap-3 flex-grow">
            <h4 className="text-lg font-bold lg:text-xl">{book.name}</h4>
            <p className="text-sm">
              By : <span>{book.author}</span>
              <br />
              <span className="text-gray-700">
                First published {book.publishDate}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
