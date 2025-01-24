import { Link } from "@tanstack/react-router";
import { ThemeToggler } from "./theme-toggler";

export default function Header() {
  return (
    <header className="border-b-2">
      <div className="container flex gap-10 py-2 justify-between">
        <nav className="flex items-baseline gap-x-10">
          <Link to="/" className="[&.active]:font-bold font-light text-xl">
            gpburton
          </Link>{" "}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </nav>
        <ThemeToggler />
      </div>
    </header>
  );
}
