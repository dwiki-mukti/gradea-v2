"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { usePanelContext } from "../contexts/PanelContext";
import PanelHeader from "./_partials/PanelHeader";
import PanelSidebar from "./_partials/PanelSidebar";
// import BreadcrumbStack from '../components/breadcumbs/BreadcrumbStack';
import {
  ChartPieIcon,
  DocumentCheckIcon,
  HomeModernIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

export default function PanelLayout({ children }: { children: ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { BreadcumbValue, setBreadcumbValue } = usePanelContext();
  const pathName = usePathname();

  useEffect(() => {
    return () => setBreadcumbValue([]);
  }, [pathName]);

  return (
    <div className="wrapper bg-slate-100" id="wrapper-panel">
      {/* max-w-screen-2xl */}
      <div className="wrapper-content">
        <div>
          <PanelSidebar
            sidebarItems={[
              {
                label: "Dashboard",
                ItemIcon: <ChartPieIcon className="w-5" />,
                path: "/dashboard",
              },
              {
                label: "Vendor",
                ItemIcon: <HomeModernIcon className="w-5" />,
                sidebarChilds: [
                  {
                    label: "Daftar Vendor",
                    isActive: true,
                    path: "/vendor",
                  },
                  {
                    label: "Vendor Blacklist",
                    path: "/vendor/blacklist",
                  },
                ],
              },
              {
                label: "Pengajuan",
                ItemIcon: <DocumentCheckIcon className="w-5" />,
                sidebarChilds: [
                  {
                    label: "Vendor Baru (10)",
                    path: "/approval/vendor/new",
                  },
                  {
                    label: "Blacklist",
                    path: "/approval/vendor/blacklist",
                  },
                  {
                    label: "Perubahan Data",
                    path: "/approval/vendor/update",
                  },
                ],
              },
              {
                label: "Logout",
                ItemIcon: <LockClosedIcon className="w-6" />,
                path: "/auth/logout",
              },
            ]}
          />
        </div>
        <div className="container-fluid">
          <div data-old-className="px-panel">
            <PanelHeader />
            {/* <div className='pt-1 pb-4'>
                            <BreadcrumbStack navigations={BreadcumbValue} />
                        </div> */}
          </div>
          <main className="pb-[2rem]">{children}</main>
        </div>
      </div>
    </div>
  );
}
