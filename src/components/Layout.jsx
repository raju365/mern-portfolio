import Grain from "./Grain";

const Layout = ({ children }) => {
  return (
    <main className="bg-[#0b0b0f] text-[#eaeaea] overflow-hidden relative">
      {children}
      <Grain />
    </main>
  );
};

export default Layout;
