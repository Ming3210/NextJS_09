import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function B4() {
  return (
    <Select>
      <h2>B4</h2>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">HTML</SelectItem>
          <SelectItem value="banana">CSS</SelectItem>
          <SelectItem value="blueberry">Javascript</SelectItem>
          <SelectItem value="grapes">NextJS</SelectItem>
          <SelectItem value="pineapple">ReactJS</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
