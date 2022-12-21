import Footer from "../components/footer";
import Navbar from "../components/navbar";

const ContentLayout = ({ children }: any) => {
    return (
        <div className="mv-content-layout-container">
            <div className="mv-navbar">
                <Navbar />
            </div>
            <div className="mv-content-children-container">{children}</div>
            <Footer />
        </div>
    );
};

export default ContentLayout;
