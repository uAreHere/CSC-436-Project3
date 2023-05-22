import Link from "next/link";
import ActionsFooter from "./ActionsFooter";

const Header = () => {
  return (
    <header className="barge bg-white flex justify-between items-center">
      <p className="h1">
        <Link
          className="hover:text-brutal-yellow duration-300 transition-all"
          href="/"
        >
          To-Do Clone
        </Link>
      </p>
      <ActionsFooter />
    </header>
  );
};

export default Header;
