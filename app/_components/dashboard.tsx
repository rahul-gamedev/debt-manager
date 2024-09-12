// a typical charts layout and projections
// add debt button
//

import { Button } from "@/components/ui/button";
import React from "react";
import { Plus } from "lucide-react";

const dashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl ">Dashboard</h1>
        <Button variant={"primary"} size={"sm"}>
          <Plus className="mr-2" size={20}></Plus>
          Add New
        </Button>
      </div>

      <h1 className="my-56">Test Title</h1>
      <h1 className="my-56">Test Title</h1>
    </div>
  );
};

export default dashboard;
