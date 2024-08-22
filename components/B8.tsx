import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function B8({ className, ...props }: CardProps) {
  return (
    <>
      <h2>B8</h2>
      <Card className={cn("w-[380px]", className)} {...props}>
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 text-center">
          <div className="w-full flex items-center justify-center gap-5">
            <Button variant={"secondary"}>
              <FaGithub />
            </Button>
            <Button variant={"secondary"}>
              <FaGoogle />
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <hr className=" w-[30%]" />
            <p className="text-[13px]">OR CONTINUE WITH</p>
            <hr className=" w-[30%]" />
          </div>
          <div className="text-start">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
            <br />
            <Label htmlFor="email">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
            <br />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Check className="mr-2 h-4 w-4" /> Mark all as read
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
