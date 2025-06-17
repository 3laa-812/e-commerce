import Link from "next/link";
import CartButton from "./cart-button";
import { UserIcon } from "lucide-react";

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full mt-2">
        <Link href={"/sign-in"} className="header-button">
          <UserIcon className="h-5 w-5" />
          <span>Sign In</span>
        </Link>

        <CartButton />
      </nav>
    </div>
  );
};

export default Menu;
