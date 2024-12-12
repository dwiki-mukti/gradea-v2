"use client";

import Image from "next/image";
import { ReactNode } from "react";
import SidebarItemPanel from "../_components/SidebarItemPanel";

interface sidebarItem {
  label: string;
  ItemIcon: ReactNode;
  isActive?: boolean;
  path?: string;
  sidebarChilds?: { label?: string; path?: string; isActive?: boolean }[];
}
export default function SidebarPanel({
  sidebarItems,
}: {
  sidebarItems: sidebarItem[];
}) {
  return (
    <>
      <aside className="sidebar">
        <div className="text-center pb-8 pt-10">
          <Image
            src={"/public/images/main-logo.png"}
            alt="logo-app"
            width={160}
            height={0}
            style={{ height: "auto", width: "7rem" }}
            className="mx-auto"
          />
        </div>
        <div className="text-sm">
          {sidebarItems.map((sidebarItem, indexSidebarItem) => (
            <SidebarItemPanel key={indexSidebarItem} {...sidebarItem} />
          ))}
        </div>
      </aside>
      <div
        className="sidebar-overlay"
        onClick={() => {
          /**
           * Hide sidebar on click overlay.
           */
          const sidebarEl = document.body.classList;
          if (!sidebarEl.contains("sidebar-collapse")) {
            sidebarEl.add("sidebar-collapse");
          }
        }}
      />
    </>
  );
}
