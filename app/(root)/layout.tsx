import type { Metadata } from "next";
import Sidebar from "@/components/layout/sidebar";
import NavBar from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "TransPay - Seamless levy payment.",
  description: "Powered By ISCE",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <NavBar />
      <div className=" ">
        <Sidebar />
        <div className=" pt-[60px] md:ml-[208px]">{children}</div>
      </div>
    </div>
  );
}
