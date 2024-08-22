import React from "react";
import { Button } from "./ui/button";

export default function B1() {
  return (
    <div>
      <h2>B1</h2>
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"Sizelarge"}>Size large</Button>
      <Button variant={"Smalllarge"}>Size large</Button>
    </div>
  );
}
