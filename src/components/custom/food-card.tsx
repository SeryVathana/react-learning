import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HandHeart, Star, UsersRound } from "lucide-react";

const FoodCard = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <img className="rounded-sm" src="https://i.pinimg.com/564x/49/e8/a8/49e8a877294b37f0a16f5ec79b6cb60d.jpg" />
      </CardHeader>
      <CardContent className="space-y-5 font-semibold">
        <h3 className="text-2xl">Ramachandra Parlour</h3>
        <div className="flex items-center justify-between text-xl">
          <p className="text-muted-foreground">south indian</p>
          <div className="flex items-center gap-3">
            <Star className="text-green-500" />
            <p>4.0</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-xl">
          <div className="flex items-center gap-3">
            <HandHeart className="text-yellow-500" />
            <p>30 min</p>
          </div>
          <div className="flex items-center gap-3">
            <UsersRound className="text-yellow-500" />
            <p>200 for two</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
