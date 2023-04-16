import PageHero from "./hero.jsx";
import { PageNav } from "./navbar.jsx";
export default function PageHeader() {
  return (
    <header className="">
      <PageNav />
      <PageHero />
    </header>
  );
}
