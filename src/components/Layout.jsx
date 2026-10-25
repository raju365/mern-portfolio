import Grain from "./Grain";

const Layout = ({ children }) => {
  return (
    <main className="bg-black text-white overflow-x-clip relative">
      {children}
      <Grain />
    </main>
  );
};

export default Layout;