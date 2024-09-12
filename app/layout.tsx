import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ResizablePanelGroup, ResizablePanel } from "@/components/ui/resizable";
import NavBar from "./_components/navBar";
import Dashboard from "./_components/dashboard";
import SideBar from "./_components/sidebar";
// const font = font({ subsets: ["latin"] });
const font = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Debt Manager",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={15}>
              <div className="p-6 fixed ">
                <SideBar />
              </div>
            </ResizablePanel>
            {/* <ResizableHandle /> */}
            <ResizablePanel defaultSize={80}>
              <div className="bg-white m-6 px-14 py-8 rounded-3xl drop-shadow-md">
                {children}
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </body>
    </html>
  );
}
