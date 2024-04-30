import FoodCard from "@/components/custom/food-card";
import Landing from "@/components/custom/landing";
import Navbar from "@/components/custom/navbar";

const Homepage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <header>
        <Navbar />
      </header>
      <main>
        <Landing />
      </main>
      <br></br>
      <FoodCard />
    </div>
  );
};

export default Homepage;
