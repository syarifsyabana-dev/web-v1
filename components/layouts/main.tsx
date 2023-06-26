import React from "react";
import SideMenuLayout from "./menu";
import ControlMenu from "./control";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" dark:bg-slate-800 dark:text-slate-200">
      <div className="container mx-auto relative lg:px-8 xl:px-48">
        <ControlMenu />
        <SideMenuLayout />
        <main className="w-full lg:w-[calc(100%-300px)] ml-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
