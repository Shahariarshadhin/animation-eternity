import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24 text-4xl font-bold">
      <div className="text-center">Welcome to Animation Eternity</div>
      <div className="flex gap-5">
        <div>
          <Link
            href="/explore-one"
            className="px-6 py-2 text-lg border-2 border-teal-400"
          >
            Explore One
          </Link>
        </div>
        <div>
          <Link
            href="/explore-two"
            className="px-6 py-2 text-lg border-2 border-teal-400"
          >
            Explore Two
          </Link>
        </div>
      </div>
    </main>
  );
}
