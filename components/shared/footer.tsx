"use client";

import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-black text-white underline-link">
      <div className="w-full">
        <Button
          variant={"ghost"}
          className="bg-gray-800 w-full rounded-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="h-4 w-4 mr-2" />
          Back to top
        </Button>
      </div>
      <div className="p-4">
        <div className="flex justify-center gap-3 text-sm">
          <Link href={"/page/conditions-of-use"}>Conditions of Use</Link>
          <Link href={"/page/privacy-notice"}>Privacy Notice</Link>
          <Link href={"/page/help"}>help</Link>
        </div>
        <div className="flex justify-center text-sm text-gray-400">
          <p> © {new Date().getFullYear()} {APP_NAME}, Inc. or its affiliates</p>
        </div>
        <div className="mt-8 flex justify-center text-sm text-gray-400">
          145,main street, New York, NY 10001, USA | +1 234 567 8900
        </div>
      </div>
    </footer>
  );
};

export default Footer;
