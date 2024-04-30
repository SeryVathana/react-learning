import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="mt-5 flex py-5 justify-between">
      <div>
        <h1 className="text-2xl font-bold">Fitme</h1>
      </div>

      <div className="flex gap-3">
        <Input type="text" placeholder="Search" className="w-[300px]" />
        <Button variant={"ghost"}>
          <ShoppingCart />
        </Button>
        <Button>Sign in</Button>
      </div>
    </nav>
  );
};

export default Navbar;
