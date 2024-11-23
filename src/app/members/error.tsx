"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function MembersError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
      <h2 className="text-2xl font-semibold text-gray-900">
        Something went wrong!
      </h2>
      <Button
        onClick={reset}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors"
      >
        Try again
      </Button>
    </div>
  );
}
