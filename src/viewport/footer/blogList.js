import { Fragment } from "react";
import { useBlogList } from "../../APIS_HOOKS/blogList.hook";
import moment from "moment";

const Bloglist = () => {
  const [blogList] = useBlogList(null, 3);
  const { data: blogListData, isLoading, isError } = blogList;

  return (
    <Fragment>
      <div
        id="footer-sidebar-second"
        className="footer-sidebar footer-sidebar-first widget-area"
        role="complementary"
      >
        <aside
          id="twitter_timeline-3"
          className="widget widget_twitter_timeline"
        >
          <h2 className="widget-title wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">Our Blog List</h2>
          <ul className="list-unstyled">
            {isLoading && <p>Loading...</p>}

            {!isLoading &&
              !isError &&
              blogListData.map(({ id, date, title: { rendered }, link }) => {
                return (
                  <li className="has-post-thumbnail wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms" key={id}>
                    <div className="postlist-thumbnail">
                      <a href={link}>
                        <img
                          src="https://alexandriatwo.files.wordpress.com/2021/01/learn.png?w=100&h=100&crop=1"
                          className="img-postlist img-responsive wp-post-image"
                          alt=""
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <div className="postlist-content">
                      <h6 className="postlist-title">
                        <a href={link}>{rendered}</a>
                      </h6>
                      <div className="postlist-date"> {moment(date).format('MMMM D, YYYY')}</div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </aside>
      </div>
    </Fragment>
  );
};

export default Bloglist;
