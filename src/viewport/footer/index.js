import facebook from "../../../src/assets/fb-icon.png";
import twitter from "../../../src/assets/twitter.png";
import pinterest from "../../../src/assets/pinterest.png";
import reddit from "../../../src/assets/reddit.png";
import insta from "../../../src/assets/insta.png";
import Bloglist from "./blogList";

const Footer = () => {
  return (
    <footer className="p-80 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div
              id="footer-sidebar-first"
              className="footer-sidebar footer-sidebar-first widget-area"
              role="complementary"
            >
              <aside
                id="twitter_timeline-1"
                className="widget widget_twitter_timeline"
              >
                <h2 className="widget-title wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">Follow me on Twitter</h2>
                <a
                  className="twitter-timeline wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms"
                  data-width="250"
                  data-height="260"
                  data-theme="light"
                  data-border-color="#f0f0f1"
                  data-lang="EN"
                  data-partner="jetpack"
                  data-chrome="noheader nofooter"
                  href="https://twitter.com/logosliber"
                >
                  My Tweets
                </a>
              </aside>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <Bloglist />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div
              id="footer-sidebar-third"
              className="footer-sidebar footer-sidebar-first widget-area"
              role="complementary"
            >
              <aside
                id="twitter_timeline-3"
                className="widget widget_twitter_timeline"
              >
                <h2 className="widget-title wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">Follow Us</h2>
                <div className="site-social-menu">
                  <ul
                    id="menu-social"
                    className="social-menu list-unstyled d-flex wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms"
                  >
                    <li className="menu-item">
                      <a
                        href="https://www.facebook.com/Alexandria-20-103903611633701/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={facebook} alt="icon" />
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="https://twitter.com/logosliber" target="_blank" rel="noreferrer">
                        <img src={twitter} alt="icon" />
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="https://www.pinterest.com/AlexandriaTwo/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={pinterest} alt="icon" />
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="https://www.instagram.com/logosliber/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={insta} alt="icon" />
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="https://www.reddit.com/r/Alexandria2/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={reddit} alt="icon" />
                      </a>
                    </li>
                  </ul>
                </div>
                <h2 className="widget-title wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">Quick Links</h2>
                <div className="site-secondary-menu">
                  <ul id="menu-footer" className="secondary-menu list-unstyled">
                    <li className="menu-item wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                      <a
                        href="https://alexandria2.live/"
                        aria-current="page"
                        target="_blank"
                        rel="noreferrer"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="menu-item wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                      <a
                        href="https://alexandria2.live/?page_id=66"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="menu-item wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                      <a
                        href="https://alexandria2.live/?page_id=71"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Libray
                      </a>
                    </li>
                    <li className="menu-item wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                      <a
                        href="https://alexandria2.live/?page_id=71"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Gallery
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <div className="row pt-4 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
          <div className="col-md-12">
            <div className="subscribe-wrap">
              <form id="subscribe-blog" className="d-flex">
                <div id="subscribe-email">
                  <label>SUBSCRIBE FOR UPDATES</label>
                  <input
                    type="email"
                    name="email"
                    className="has-undefinedpx-font-size"
                    placeholder="Enter your email address to follow this blog and receive notifications of new posts by email."
                    value=""
                    id="subscribe-field"
                  />
                </div>

                <div id="subscribe-submit">
                  <button type="submit" className="gradient-button">
                    Get in touch
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="copyright text-center">
              <p>Copyright © 2022. alexandria2. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
