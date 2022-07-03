import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Home: NextPage = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <a
        href="/models/ar.usdz"
        className="w-3 h-3 text-black bg-white"
        rel="ar"
      >
        Show me AR Stuff!
      </a>
    </div>
  );
};

export default Home;
