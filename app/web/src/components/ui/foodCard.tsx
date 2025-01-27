"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Checkbox } from "@/components/ui/checkbox";

export default function FoodCard() {
  return (
    <Card>
      <CardContent>
        <Checkbox id="terms" />
        <label htmlFor="terms">ブルーベリー</label>
      </CardContent>
    </Card>
    // <Card className="flex">
    //   <CardContent>
    //     <div className="flex items-center space-x-4">
    //       <Checkbox id="terms" />
    //       <label
    //         htmlFor="terms"
    //         className="text-xl font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#8C6954]"
    //       >
    //         食材名
    //       </label>
    //     </div>
    //   </CardContent>
    // </Card>
  );
}

export { FoodCard };
