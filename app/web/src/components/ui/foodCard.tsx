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
    <div className="flex">
      <Checkbox />
    </div>
  );
}

export { FoodCard };
