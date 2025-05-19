import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-gray-900 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-primary-green">
        Welcome to the EV Product Page
      </h1>
      <p className="mb-4 text-lg text-gray-700 text-center max-w-md">
        Explore the details of our electric vehicles.
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
