import PageHero from "./hero.jsx";
import { PageNav } from "./navbar.jsx";
export default function PageHeader() {
  return (
    <header className="min-h-[80vh]">
      <PageNav />
      <PageHero />
    </header>
  );
}
