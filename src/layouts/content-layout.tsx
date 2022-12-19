import Footer from "../components/footer";
import Navbar from "../components/navbar";

const ContentLayout = ({ children }: any) => {
    return (
        <div className="mv-content-layout-container">
            <div className="mv-navbar">
                <Navbar />
            </div>
            {children}
            <Footer />
        </div>
    );
};

export default ContentLayout;
