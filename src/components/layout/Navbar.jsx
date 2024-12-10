import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center px-4">
        <div className="text-lg font-bold">Portfolio</div>

        <div className="ml-auto flex gap-4">
          <Button variant="ghost">Formation</Button>
          <Button variant="ghost">Projets</Button>
          <Button variant="ghost">Skills</Button>
          <Button variant="ghost">Contact</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
