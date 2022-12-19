import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContentLayout = ({ children }: any) => {
    return (
        <div className="mv-content-layout-container">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default ContentLayout;
