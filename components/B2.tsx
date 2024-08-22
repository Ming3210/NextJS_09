import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function B2() {
  return (
    <div className="w-[300px]">
      <h2>B2</h2>
      <Input
        type="email"
        placeholder="Email"
        defaultValue={"Rikkei Education"}
      />
      <Input type="number" placeholder="" defaultValue={10} />
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  );
}
