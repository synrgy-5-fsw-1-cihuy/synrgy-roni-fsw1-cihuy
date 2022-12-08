import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
