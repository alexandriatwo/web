import About from "../../../src/assets/about-images.png";
import Future from "../../../src/assets/Future-img.png";

const Main = () => {
  return (
    <div>
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
                    Alexandria 2.0 is about creating a digital Renaissance, a
                    center to further the pursuit of knowledge and the values of
                    enlightenment.
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
          <div className="time-machine-wrap text-center wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="400ms">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <h4 className="heading wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                  If You Had a Time Machine, Would You:
                </h4>
              </div>
            </div>
            <div className="row mb-4 mt-3 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="col-md-4">
                <div className="radio-wrap">
                  <input
                    type="radio"
                    value="Prefer not to time travel"
                    name="radio"
                  />{" "}
                  Prefer not to time travel
                </div>
              </div>
              <div className="col-md-4">
                <div className="radio-wrap">
                  <input
                    type="radio"
                    value="Go back and Kill Hitler"
                    name="radio"
                  />{" "}
                  Go back and Kill Hitler
                </div>
              </div>
              <div className="col-md-4">
                <div className="radio-wrap">
                  <input
                    type="radio"
                    value="Save the Library of Alexandria"
                    name="radio"
                  />{" "}
                  Save the Library of Alexandria
                </div>
              </div>
            </div>
            <div className="row wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="col-md-12">
                <button className="gradient-button">submit</button>
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
                    <h6 className="author wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">About Author</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="heading heading-text first-text rect mb-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
                      C ore{" "}
                    </h1>{" "}
                    <h1 className="heading heading-text second-text mb-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
                      {" "}
                      Values
                    </h1>
                    <p className="pe-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
                      Alexandria 2.0 is a fo.rum world’s ideas. We are calling
                      for new forms of civil discourse and democracy of
                      information to further the pursuit of knowledge.<br></br>
                      <i>-LIBRARIAN OF ALEXANDRIA 2.0</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-fluid wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms" src={About} alt="about" />
            </div>
          </div>
        </div>
      </div>

      <div className="our-future p-80">
        <div className="container">
          <div className="row">
            <div className="future-wrap align-items-center">
              <div className="col-md-6 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                <img className="img-fluid" src={Future} alt="future" />
              </div>
              <div className="col-md-6">
                <div className="future-text">
                  <div className="row">
                    <div className="col-md-12">
                      <h1 className="heading heading-text first-text rect mb-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                        o ur{" "}
                      </h1>
                      <h1 className="heading heading-text second-text mb-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                        {" "}
                        future
                      </h1>
                      <p className="pe-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                        The future we dream of will not come to pass unless we
                        build it. This is the calling of thinkers, artists,
                        creators, and visionaries in every age. We have not yet
                        reached the pinnacle of human achievement, nor the
                        limits of science. Great advances lay before us still.
                        Help us build a bridge to our future.
                      </p>
                      <button className="gradient-button wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">read more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
