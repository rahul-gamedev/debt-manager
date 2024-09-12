// dashboard
// list - all debts & details
// maybe Settings

import { Button, buttonVariants } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import { LayoutDashboard, SquareMenu } from "lucide-react";
import React from "react";
import NavBar from "./navBar";
import Link from "next/link";

const sidebar = () => {
  return (
    <div className="">
      <NavBar />
      <Separator className="my-4" />
      <div className="flex flex-col">
        <Link
          href={"/"}
          className={buttonVariants({ variant: "side", size: "side" })}
        >
          <LayoutDashboard className="mr-2" size={18} />
          Dashboard
        </Link>
        <Link
          href={"/debts"}
          className={buttonVariants({ variant: "side", size: "side" })}
        >
          <SquareMenu className="mr-2" size={18} />
          Debt List
        </Link>
      </div>
      <Separator className="my-4" />
    </div>
  );
};

export default sidebar;
