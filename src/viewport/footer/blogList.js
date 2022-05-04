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
          <h2 className="widget-title">Our Blog List</h2>
          <ul className="list-unstyled">
            {isLoading && <p>Loading...</p>}

            {!isLoading &&
              !isError &&
              blogListData.map(({ id, date, title: { rendered }, link }) => {
                return (
                  <li className="has-post-thumbnail" key={id}>
                    <div className="postlist-thumbnail">
                      <a href="https://alexandria2.live/2021/08/01/the-archetypes-and-the-collective-unconscious/">
                        <img
                          src="https://alexandriatwo.files.wordpress.com/2021/08/download-23.jpg?w=150&amp;h=150&amp;crop=1"
                          className="img-postlist img-responsive wp-post-image"
                          alt=""
                          loading="lazy"
                          data-attachment-id="1268"
                          data-permalink="https://alexandria2.live/download-23/"
                          data-orig-file="https://alexandriatwo.files.wordpress.com/2021/08/download-23.jpg"
                          data-orig-size="269,400"
                          data-comments-opened="1"
                          data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0"}'
                          data-image-title="Archetypes and the Collective Unconscious"
                          data-image-description="&lt;p&gt;https://alexandriatwo.files.wordpress.com/2021/08/c.-g.-jung-collected-works-volume-9i_-the-archetypes-of-the-collective-unconscious.pdf&lt;/p&gt;
                                                "
                          data-image-caption=""
                          data-medium-file="https://alexandriatwo.files.wordpress.com/2021/08/download-23.jpg?w=202"
                          data-large-file="https://alexandriatwo.files.wordpress.com/2021/08/download-23.jpg?w=269"
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
