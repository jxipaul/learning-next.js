"use client";
import { usePathname } from "next/navigation";
export default function Post() {
const pathname = usePathname();
return <p> {pathname}</p>;//hmm, pathname holds the path of the url in the form of a variable I reckon
}