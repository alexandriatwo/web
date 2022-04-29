import React from "react";
import logo from "../src/assets/logo.gif";
import About from "../src/assets/about-images.png";
import Future from "../src/assets/Future-img.png";
import facebook from "../src/assets/fb-icon.png";
import twitter from "../src/assets/twitter.png";
import pinterest from "../src/assets/pinterest.png";
import reddit from "../src/assets/reddit.png";
import insta from "../src/assets/insta.png";

import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";


function App() {
    return (
        <div className="wrapper">
            <div className="header_top">
                <div className="top-bar">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-sm-2">
                                <a className="brand" href="Home.html"><img src={logo} className="img-responsive" alt="logo" /></a>
                            </div>
                            <div className="col-sm-10">
                                <ul className="header-info mb-0 d-flex justify-content-end list-unstyled">
                                    <li><FaPhoneAlt /><a href="tel: 1231234567">(123) 123-4567</a></li>
                                    <li><FaEnvelope />info@alexandria.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <div className="col-md-7">
                            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
                                <div class="hamburger-toggle">
                                    <FaBars className="hamburger" />
                                </div>
                            </button>
                            <div className="collapse navbar-collapse" id="navbar-content">
                                <ul className="nav navbar-nav flex-row">
                                    <li className="nav-item nav-link">
                                        <a href="#About_Us" className="nav-anchor">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item nav-link">
                                        <a href="#About_Us" className="nav-anchor">
                                            Library
                                        </a>
                                    </li>
                                    <li className="nav-item nav-link">
                                        <a href="#About_Us" className="nav-anchor">
                                            Gallery
                                        </a>
                                    </li>
                                    <li className="nav-item nav-link">
                                        <a href="#About_Us" className="nav-anchor">
                                            Video
                                        </a>
                                    </li>
                                    <li className="nav-item nav-link">
                                        <a href="#About_Us" className="nav-anchor">
                                            Quote
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <form className="d-flex input-group justify-content-end">
                                <button className="btn search" type="button"><FaSearch />
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>


            </div >
            <div className="banner" id="#home">
                <div className="container">
                    <div className="row">
                        <div className="text">
                            <div
                                className="col-xl-7 col-lg-6 col-md-8 wow fadeInLeft animated"
                                data-wow-duration="1000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="text-wrap">
                                    <h1 className="heading">Alexandria 2.0:</h1>
                                    <h3 className="tagline">Digital Renaissance</h3>
                                    <p>
                                        Alexandria 2.0 is about creating a digital Renaissance, a center to
                                        further the pursuit of knowledge and the
                                        values of enlightenment.
                                    </p>
                                </div>
                                <div
                                    className="col-xl-5 col-lg-6 col-md-4 wow fadeInLeft animated"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="600ms"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="time-machine">
                <div className="container">
                    <div className="time-machine-wrap text-center">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <h4 className="heading">If You Had a Time Machine, Would You:</h4>
                            </div>
                        </div>
                        <div className="row mb-4 mt-3">
                            <div className="col-md-4">
                                <div className="radio-wrap">
                                    <input type="radio" value="Prefer not to time travel" name="radio" /> Prefer not to time travel
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="radio-wrap">
                                    <input type="radio" value="Go back and Kill Hitler" name="radio" /> Go back and Kill Hitler
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="radio-wrap">
                                    <input type="radio" value="Save the Library of Alexandria" name="radio" /> Save the Library of Alexandria
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <button className="gradient-button">
                                    submit
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="about-author p-80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="author-wrap">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h6 className="author">About Author</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1 className="heading heading-text first-text rect mb-0">C ore </h1> <h1 className="heading heading-text second-text mb-0"> Values</h1>
                                        <p className="pe-5">Alexandria 2.0 is a fo.rum world’s ideas. We are calling
                                            for new forms of civil discourse and democracy of
                                            information to further the pursuit of knowledge.<br></br>
                                            <i>-LIBRARIAN OF ALEXANDRIA 2.0</i></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src={About} alt="about" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-future p-80">
                <div className="container">
                    <div className="row">
                        <div className="future-wrap align-items-center">
                            <div className="col-md-6">
                                <img className="img-fluid" src={Future} alt="future" />
                            </div>
                            <div className="col-md-6">
                                <div className="future-text">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h1 className="heading heading-text first-text rect mb-0">o ur </h1>
                                            <h1 className="heading heading-text second-text mb-0"> future</h1>
                                            <p className="pe-5">The future we dream of will not come to pass unless we build it. This is the calling of thinkers, artists, creators, and visionaries in every age. We have not yet reached the pinnacle of human achievement, nor the limits of science. Great advances lay before us still. Help us build a bridge to our future.</p>
                                            <button className="gradient-button">
                                                read more
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="p-80 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div id="footer-sidebar-first" className="footer-sidebar footer-sidebar-first widget-area" role="complementary">
                                <aside id="twitter_timeline-1" className="widget widget_twitter_timeline">
                                    <h2 className="widget-title">Follow me on Twitter</h2>
                                    <a className="twitter-timeline" data-width="250" data-height="260" data-theme="light" data-border-color="#f0f0f1" data-lang="EN" data-partner="jetpack" data-chrome="noheader nofooter" href="https://twitter.com/logosliber">My Tweets</a>
                                </aside>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div id="footer-sidebar-second" className="footer-sidebar footer-sidebar-first widget-area" role="complementary">
                                <aside id="twitter_timeline-3" className="widget widget_twitter_timeline"><h2 className="widget-title">Our Blog List</h2>
                                    <ul className="list-unstyled">
                                        <li className="has-post-thumbnail">
                                            <div className="postlist-thumbnail">
                                                <a href="https://alexandria2.live/2021/08/01/the-archetypes-and-the-collective-unconscious/">
                                                    <img src="https://alexandriatwo.files.wordpress.com/2021/08/download-23.jpg?w=150&amp;h=150&amp;crop=1" className="img-postlist img-responsive wp-post-image" alt="" loading="lazy"
                                                        data-attachment-id="1268" data-permalink="https://alexandria2.live/download-23/" data-orig-file="https://alexandriatwo.files.wordpress.com/2021/08/download-23.jpg" data-orig-size="269,400" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="Archetypes and the Collective Unconscious" data-image-description="&lt;p&gt;https://alexandriatwo.files.wordpress.com/2021/08/c.-g.-jung-collected-works-volume-9i_-the-archetypes-of-the-collective-unconscious.pdf&lt;/p&gt;
                                                " data-image-caption="" data-medium-file="https://alexandriatwo.files.wordpress.com/2021/08/download-23.jpg?w=202" data-large-file="https://alexandriatwo.files.wordpress.com/2021/08/download-23.jpg?w=269" />
                                                </a>
                                            </div>
                                            <div className="postlist-content">
                                                <h6 className="postlist-title"><a href="https://alexandria2.live/2021/08/01/the-archetypes-and-the-collective-unconscious/">The Archetypes and the Collective Unconscious</a></h6>
                                                <div className="postlist-date">August 1, 2021</div>
                                            </div>
                                        </li>
                                        <li className="has-post-thumbnail">
                                            <div className="postlist-thumbnail">
                                                <a href="https://alexandria2.live/2021/08/01/the-archetypes-and-the-collective-unconscious/">
                                                    <img src="https://alexandriatwo.files.wordpress.com/2021/08/download-23.jpg?w=150&amp;h=150&amp;crop=1" className="img-postlist img-responsive wp-post-image" alt="" loading="lazy" data-attachment-id="1268" data-permalink="https://alexandria2.live/download-23/" data-orig-file="https://alexandriatwo.files.wordpress.com/2021/08/download-23.jpg" data-orig-size="269,400" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="Archetypes and the Collective Unconscious" data-image-description="&lt;p&gt;https://alexandriatwo.files.wordpress.com/2021/08/c.-g.-jung-collected-works-volume-9i_-the-archetypes-of-the-collective-unconscious.pdf&lt;/p&gt;
                                                " data-image-caption="" data-medium-file="https://alexandriatwo.files.wordpress.com/2021/08/download-23.jpg?w=202" data-large-file="https://alexandriatwo.files.wordpress.com/2021/08/download-23.jpg?w=269" />
                                                </a>
                                            </div>
                                            <div className="postlist-content">
                                                <h6 className="postlist-title"><a href="https://alexandria2.live/2021/08/01/the-archetypes-and-the-collective-unconscious/">The Archetypes and the Collective Unconscious</a></h6>
                                                <div className="postlist-date">August 1, 2021</div>
                                            </div>
                                        </li>
                                        <li className="has-post-thumbnail">
                                            <div className="postlist-thumbnail">
                                                <a href="https://alexandria2.live/2021/08/01/the-archetypes-and-the-collective-unconscious/">
                                                    <img src="https://alexandriatwo.files.wordpress.com/2021/08/download-23.jpg?w=150&amp;h=150&amp;crop=1" className="img-postlist img-responsive wp-post-image" alt="" loading="lazy" data-attachment-id="1268" data-permalink="https://alexandria2.live/download-23/" data-orig-file="https://alexandriatwo.files.wordpress.com/2021/08/download-23.jpg" data-orig-size="269,400" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="Archetypes and the Collective Unconscious" data-image-description="&lt;p&gt;https://alexandriatwo.files.wordpress.com/2021/08/c.-g.-jung-collected-works-volume-9i_-the-archetypes-of-the-collective-unconscious.pdf&lt;/p&gt;
                                                " data-image-caption="" data-medium-file="https://alexandriatwo.files.wordpress.com/2021/08/download-23.jpg?w=202" data-large-file="https://alexandriatwo.files.wordpress.com/2021/08/download-23.jpg?w=269" />
                                                </a>
                                            </div>
                                            <div className="postlist-content">
                                                <h6 className="postlist-title"><a href="https://alexandria2.live/2021/08/01/the-archetypes-and-the-collective-unconscious/">The Archetypes and the Collective Unconscious</a></h6>
                                                <div className="postlist-date">August 1, 2021</div>
                                            </div>
                                        </li>
                                    </ul>
                                </aside>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div id="footer-sidebar-third" className="footer-sidebar footer-sidebar-first widget-area" role="complementary">
                                <aside id="twitter_timeline-3" className="widget widget_twitter_timeline">
                                    <h2 className="widget-title">Follow Us</h2>
                                    <div className="site-social-menu">
                                        <ul id="menu-social" className="social-menu list-unstyled d-flex">
                                            <li className="menu-item"><a href="https://www.facebook.com/Alexandria-20-103903611633701/"><img src={facebook} alt="icon" /></a></li>
                                            <li className="menu-item"><a href="https://twitter.com/logosliber"><img src={twitter} alt="icon" /></a></li>
                                            <li className="menu-item"><a href="https://www.pinterest.com/AlexandriaTwo/"><img src={pinterest} alt="icon" /></a></li>
                                            <li className="menu-item"><a href="https://www.instagram.com/logosliber/"><img src={insta} alt="icon" /></a></li>
                                            <li className="menu-item"><a href="https://www.reddit.com/r/Alexandria2/"><img src={reddit} alt="icon" /></a></li>
                                        </ul>
                                    </div>
                                    <h2 className="widget-title">Quick Links</h2>
                                    <div className="site-secondary-menu">
                                        <ul id="menu-footer" className="secondary-menu list-unstyled">
                                            <li className="menu-item"><a href="https://alexandria2.live/" aria-current="page">About Us</a></li>
                                            <li className="menu-item"><a href="https://alexandria2.live/?page_id=66">Contact Us</a></li>
                                            <li className="menu-item"><a href="https://alexandria2.live/?page_id=71">Libray</a></li>
                                            <li className="menu-item"><a href="https://alexandria2.live/?page_id=71">Gallery</a></li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4">
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
        </div>


    );
}

export default App;  