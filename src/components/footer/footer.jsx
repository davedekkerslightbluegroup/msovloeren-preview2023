import { FaCaretSquareUp} from "react-icons/fa";
import './footer.css';

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };


    return (
        <div className="Footer">
            <footer className="footer footer-bar">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="text-sm-start">
                                <p className="mb-0">© {new Date().getFullYear()} MSO Vloeren. Design by <a href="https://www.lightbluegroup.com/" rel="noopener" className="text-reset">lightblue</a>.</p>
                            </div>
                        </div>
                        <div className="row justify-content-right">
                            <button onClick={scrollToTop} className="btn btn-icon btn-primary back-to-top"><FaCaretSquareUp /> Naar Boven</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

