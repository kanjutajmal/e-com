import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import search from "../assets/search.svg";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Exclusive</h1>

      <nav className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/contact-us">Contact</Link>
        <Link to="/about-us">About</Link>
        <Link to="/sign-up">Sign Up</Link>
      </nav>

      <div className="relative w-64">
        <Input placeholder="Search..." className="pr-10" />
        <img
          src={search}
          alt="search"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer opacity-60"
        />
      </div>
    </header>
  );
};

export default Header;
