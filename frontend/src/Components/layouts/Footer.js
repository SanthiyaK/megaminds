
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid bg-primary">
        <div className="row ">
          <div className="col-md-9 py-3 text-white">
            Get connected with us on social networks!
          </div>
          <div className="col-md-3 py-3 text-center text-white">
            <Link to="/" title="Apple">
              <i className="bi bi-apple text-light me-3"></i>
            </Link>
            <Link to="/" title="Windows">
              <i className="bi bi-windows text-light me-3"></i>
            </Link>
            <Link to="/" title="Android">
              <i className="bi bi-android2 text-light me-3"></i>
            </Link>
            |
            <Link to="/" title="Twitter">
              <i className="bi bi-twitter-x text-light ms-3 me-3"></i>
            </Link>
            <Link to="/" title="Facebook">
              <i className="bi bi-facebook text-light me-3"></i>
            </Link>
            <Link to="/" title="Instagram">
              <i className="bi bi-instagram text-light me-3"></i>
            </Link>
            <Link to="/" title="Youtube">
              <i className="bi bi-youtube text-light me-3"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white">
        <div className="row ">
          {/* <div className="col-md-3 py-3">
            <div className="h6">Company Name</div>
            <hr />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div> */}
          <div className="col-md-4 py-3">
            <div className="h6"><strong>About Us</strong></div>
            <hr />
            <ul className="list-group list-group-flush list-unstyled">
              <li >
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  About Us
                </Link>
              </li>
              <li >
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Careers
                </Link>
              </li>
              <li >
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Our Stores
                </Link>
              </li>
              <li >
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Corporate Sales
                </Link>
              </li>
              <li className="list-unstyled">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 py-3">
            <div className="h6"><strong>CUSTOMER SERVICE</strong></div>
            <hr />
            <ul className="list-group list-group-flush list-unstyled">
              <li >
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Help & FAQs
                </Link>
              </li>
              <li >
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Order Tracking
                </Link>
              </li>
              <li >
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                 Shipping & Delivery
                </Link>
              </li>
              <li >
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Orders History
                </Link>
              </li>
              <li >
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Advanced Search
                </Link>
              </li>
               <li >
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 py-3">
           
           
            <div className="h6">Customer Care</div>
            <hr />
            <i className="bi bi-telephone"></i> +1800 100 1000
            <br />
            <i className="bi bi-envelope"></i> megaminds@email.com
          </div>
        </div>
      </div>
      <div className="container-fluid bg-secondary text-white text-center">
        <div className="row">
          <div className="col-md-2 py-2">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-briefcase text-warning"></i> Partner with us
            </Link>
          </div>
          <div className="col-md-3 py-2">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-badge-ad text-info"></i> Advertise
            </Link>
          </div>
          <div className="col-md-3 py-2">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-gift"></i> Gift
            </Link>
          </div>
          <div className="col-md-3 py-2">
            © 2009-{new Date().getFullYear()} React-E-Commerce.com (
            {process.env.REACT_APP_VERSION})
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
