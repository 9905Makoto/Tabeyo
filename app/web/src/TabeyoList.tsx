import { useState } from "react";
import "./Select.css";
import { Link } from "react-router-dom";
import { Header } from "@/components/ui/header";
import { FoodCard } from "@/components/ui/foodCard";
import { Checkbox } from "@/components/ui/checkbox";

function TabeyoList() {
  return (
    <>
      <Header />
      <div className="relative -top-8 flex min-h-full flex-1 flex-col justify-center items-center px-6 lg:px-8 space-y-4">
        <div className="pr-36 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          <p>今日食べるリスト</p>
        </div>
        <div>
          <FoodCard />
        </div>
        <div>
          <FoodCard />
        </div>
        <div>
          <FoodCard />
        </div>
        <div>
          <FoodCard />
        </div>
        <div>
          <FoodCard />
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>
      </div>
    </>
  );
}

export default TabeyoList;
