import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="py-5">
      <div className="container">
        <div className="bg-gray-50 py-3 px-4 border-0 flex items-center justify-between gap-6 rounded-lg mx-auto">
          <div className="flex items-center gap-10">
            <h1 className="text-3xl">
              <svg
                width="1.3em"
                height="1em"
                viewBox="0 0 512 482"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M126.786 481.894H148.367V316.802C148.367 314.104 147.288 311.407 145.13 309.249C113.298 277.417 96.0337 235.335 96.0337 190.555C96.0337 97.2192 171.566 21.6871 264.362 21.6871C357.159 21.6871 432.691 97.2192 432.691 190.016V197.569C432.691 199.727 433.231 201.885 434.31 203.504L482.866 287.668H459.667C453.732 287.668 448.877 292.524 448.877 298.458V369.135C448.877 389.636 432.152 406.901 411.111 406.901H334.499C328.565 406.901 323.709 411.757 323.709 417.691V481.894H345.29V428.482H411.111C443.482 428.482 470.457 402.045 470.457 369.135V309.249H501.21C504.986 309.249 508.763 307.091 510.381 303.854C512.539 300.616 512.539 296.3 510.381 293.063L453.732 195.411V190.016C454.272 85.3499 369.028 0.106445 264.362 0.106445C159.697 0.106445 74.4531 85.3499 74.4531 190.016C74.4531 239.112 92.7966 285.51 126.786 321.118V481.894Z"
                  fill="#282D33"
                />
                <path
                  d="M52.333 481.894V316.802C19.962 284.431 0 239.651 0 190.016C0 91.2845 80.3878 10.8968 179.659 10.8968C278.39 10.8968 358.778 91.2845 358.778 190.016V198.109L416.506 298.458H374.963V369.135C374.963 395.571 353.382 417.691 326.407 417.691H249.796V481.894H52.333Z"
                  fill="black"
                />
                <path
                  d="M257.888 324.895L318.314 265.008L257.888 204.583L242.782 219.689L287.562 265.008L242.782 309.788L257.888 324.895Z"
                  fill="#ffffff"
                />
                <path
                  d="M288.641 254.218H97.6522V275.799H288.641V254.218ZM225.517 206.201L241.163 190.555L195.844 145.776L241.163 100.456L225.517 85.3499L165.631 145.776L225.517 206.201Z"
                  fill="#ffffff"
                />
                <path
                  d="M385.753 134.985H194.765V156.566H385.753V134.985Z"
                  fill="#ffffff"
                />
              </svg>
            </h1>
            <ul className="flex items-center gap-10">
              <li className="font-medium">
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#">Members</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="px-6">
              Login
            </Button>
            <Button variant="default" className="px-6">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
