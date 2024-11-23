export function Footer() {
  return (
    <footer className="py-5">
      <div className="container">
        <p className="text-center text-sm text-gray-500 w-full py-5 px-8 rounded-md bg-gray-50">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
