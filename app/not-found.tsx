import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-light flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-8xl md:text-9xl font-klein font-bold text-primary mb-4">
          404
        </h1>
        <p className="text-xl font-klein text-navy mb-2">Page Not Found</p>
        <p className="text-gray-500 font-poppins text-sm mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-poppins font-medium rounded-full hover:bg-primary-dark transition-colors text-sm"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
