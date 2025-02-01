import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import MobileNavBar from "@/components/MobileNavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Khaoula", lastName: "Tagorti" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-4 flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width="30" height="30" alt="menu icon" />
          <div>
            <MobileNavBar user={loggedIn} />
          </div>
        </div>
      </div>
      {children}
    </main>
  );
}
