import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Landing = () => {
  return (
    <div className="mt-20 w-full">
      <section className="space-y-5 w-1/2 pr-20">
        <div className="text-5xl space-y-5">
          <h1>Premium quality</h1>
          <div className="flex gap-5 items-center">
            <h1>Food for your</h1>
            <h1>healthy</h1>
          </div>
          <h1>& Daily Life</h1>
        </div>
        <p className="max-w-[600px] text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="flex gap-5">
          <Input placeholder="Enter your location" />
          <Button>Get Started</Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
