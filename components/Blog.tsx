import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="tp-blog-area pt-150 pb-95">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="tp-blog-subtitle mb-30 tp_fade_anim" data-delay=".3">
              <span className="tp-section-subtitle tp-ff-heading fw-500 tp-text-common-white fs-16"><span className="borders d-inline-block"></span>Latest Journal</span>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="tp-blog-pp-title-wrap mb-60 tp_fade_anim" data-delay=".5">
              <h2 className="tp-section-pp-title tp-text-common-white fs-70 fs-lg-50 fs-xs-40 fw-700 mb-10">My Blog</h2>
              <p className="fs-18 lh-150-per tp-text-grey-2">Strategists dedicated to creating stunning,<br /> functional websites that align with your unique<br /> business goals.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="tp-blog-item tp--hover-item tp-blog-pp-item mb-40 tp_fade_anim" data-delay=".4" data-fade-from="left" data-ease="bounce">
              <a href="/blog-details" className="tp-blog-thumb d-block mb-30 p-relative fix d-inline-block">
                <div className="tp--hover-img" data-displacement="/assets/img/imghover/fluid.jpg" data-intensity="0.2" data-speedin="1" data-speedout="1">
                  <img className="w-100" src="/assets/img/blog/pp/thumb.jpg" alt="" />
                </div>
              </a>
              <div className="tp-blog-content text-center">
                <div className="tp-blog-meta mb-15">
                  <span>Web Design</span>
                  <span className="borders"></span>
                  <span>02 Feb, 2025</span>
                </div>
                <h3 className="tp-text-common-white fs-25 fs-xl-22 lh-140-per"><a className="underline-black" href="/blog-details">How to Conduct Effective 
                  User Research for Better Product Decisions</a></h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="tp-blog-item tp--hover-item tp-blog-pp-item mb-40 tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
              <a href="/blog-details" className="tp-blog-thumb d-block mb-30 p-relative fix d-inline-block">
                <div className="tp--hover-img" data-displacement="/assets/img/imghover/fluid.jpg" data-intensity="0.2" data-speedin="1" data-speedout="1">
                  <img className="w-100" src="/assets/img/blog/pp/thumb-2.jpg" alt="" />
                </div>
              </a>
              <div className="tp-blog-content text-center">
                <div className="tp-blog-meta mb-15">
                  <span>AI Trends</span>
                  <span className="borders"></span>
                  <span>02 Feb, 2025</span>
                </div>
                <h3 className="tp-text-common-white fs-25 fs-xl-22 lh-140-per"><a className="underline-black" href="/blog-details">How to Conduct Effective 
                  User Research for Better Product Decisions</a></h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="tp-blog-item tp--hover-item tp-blog-pp-item mb-40 tp_fade_anim" data-delay=".4" data-fade-from="right" data-ease="bounce">
              <a href="/blog-details" className="tp-blog-thumb d-block mb-30 p-relative fix d-inline-block">
                <div className="tp--hover-img" data-displacement="/assets/img/imghover/fluid.jpg" data-intensity="0.2" data-speedin="1" data-speedout="1">
                  <img className="w-100" src="/assets/img/blog/pp/thumb-3.jpg" alt="" />
                </div>
              </a>
              <div className="tp-blog-content text-center">
                <div className="tp-blog-meta mb-15">
                  <span>Web Design</span>
                  <span className="borders"></span>
                  <span>02 Feb, 2025</span>
                </div>
                <h3 className="tp-text-common-white fs-25 fs-xl-22 lh-140-per"><a className="underline-black" href="/blog-details"> How to Conduct Effective 
                  User Research for Better Product Decisions</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

