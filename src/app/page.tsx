import BlifePage from "./components/home";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col justify-between text-black w-full">
      <div className="container flex flex-col items-center justify-center">
       <BlifePage />
      </div>
    </main>
  );
}
