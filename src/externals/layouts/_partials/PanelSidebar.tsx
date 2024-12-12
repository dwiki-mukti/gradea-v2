/* eslint-disable @next/next/no-img-element */
"use client";

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
          <img
            src={"/public/images/main-logo.png"}
            alt="logo-app"
            className="mx-auto brand-logo"
          />
          <img
            src={"/public/images/main-logo-mini.png"}
            alt="logo-app"
            className="mx-auto brand-logo-mini"
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
