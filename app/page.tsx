import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <Button 
      size={"lg"} variant={"outline"}>
      <Link href={"/lol"}>Click Me</Link>
    </Button>
  )
}
