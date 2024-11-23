import Image from "next/image";
import { IMember } from "./interface";

export async function MembersList() {
  const members: IMember[] | null = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((response) => response.json());

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <section className="py-5 container">
      <div className="grid grid-cols-4 gap-8">
        {members?.map((member) => (
          <div
            key={member.id}
            className="border border-solid bg-green-50 border-green-600 rounded-md flex flex-col gap-4 p-5"
          >
            <span className="w-14 aspect-square block rounded-full bg-green-200" />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.email}</p>
              <p className="text-sm text-gray-600">{member.phone}</p>
            </div>
            <div>
              <h4 className="text-md font-medium">Company:</h4>
              <p className="text-sm text-gray-600">{member.company.name}</p>
              <p className="text-sm text-gray-600">
                {member.company.catchPhrase}
              </p>
              <p className="text-sm text-gray-600">{member.company.bs}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
