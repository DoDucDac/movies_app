import Navbar from "../components/navbar";

const ContentLayout = ({ children }: any) => {
  return (
    <div className="mv-content-layout-container">
      <Navbar />
      {children}
    </div>
  );
};

export default ContentLayout;
