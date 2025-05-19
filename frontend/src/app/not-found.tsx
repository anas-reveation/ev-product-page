import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-700 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        href="/product/ather-450x-3-7-kwh"
        className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
      >
        Go to Product Details
      </Link>
    </div>
  );
}
