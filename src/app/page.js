import Image from "next/image";
import Card from "./component/Card";

export default function Home() {
  return (
   <div className="flex flex-wrap justify-center items-center">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
   </div>
  );
}
