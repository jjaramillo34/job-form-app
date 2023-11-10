import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import JobForm from '@/components/JobForm'
import JobForm from "@/components/JotFormEmbed";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <JobForm />
    </>
  );
}
