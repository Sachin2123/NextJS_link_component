import Image from "next/image";
import Link from "next/link";

// sachin
export default function Home() {
  const val = [{ name: "Sachin" }, { name: "Dhoni" }];
  return (
    <div>
      <Link href="/about">About</Link>

      {val.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </div>
  );
}
