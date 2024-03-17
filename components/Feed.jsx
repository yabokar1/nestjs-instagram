import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3">
      <section className="md:col-span-2 md:max-w-6xl mx-auto">
        <Stories />
        <Posts />
      </section>

      <section className="hidden md:inline-grid md:col-span-1">
        <div className="fixed w-[380px]">
          <MiniProfile />
        </div>

        {/* Suggestion */}
      </section>
    </main>
  );
}
