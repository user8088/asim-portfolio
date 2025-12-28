import React from 'react';

const BlogGrid: React.FC = () => {
  return (
    <>
      {/* tp-service-hero-area-start */}
      <div className="tp-service-hero-area tp-service-hero-spacing p-relative z-index-1">
        <span className="tp-service-hero-shape-2 p-absolute">
          <svg className="line-2" viewBox="0 0 402 339" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="413.5" cy="413.5" r="353.5" transform="matrix(-1 0 0 1 820 0)" stroke="#D9D9D9" strokeOpacity="0.05" strokeWidth="120" />
          </svg>
        </span>
        <div className="container">
          <div className="row pb-45">
            <div className="col-lg-7">
              <div className="tp-service-hero-left p-relative z-index-1 mb-40">
                <h2 className="fs-70 fs-lg-60 fs-xs-40 tp-text-common-white">Latest News &<br /> Insights.</h2>
                <div className="tp-service-details-icon">
                  <img className="tp-live-anim-spin" src="/assets/img/breadcrumb/icon.png" alt="" />
                </div>
                <span className="tp-service-hero-shape tpswing d-none d-sm-inline-block">
                  <svg width="52" height="94" viewBox="0 0 52 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 16.1098C5.58433 24.0984 22.6118 44.5692 38.3295 38.0785C46.3521 34.5835 58.2264 23.6551 45.206 5.12554C40.2943 -1.86444 30.6673 -0.666183 25.559 14.1127C22.6118 22.6393 15.2441 43.0714 22.612 61.0456C26.5006 70.5321 38.1332 85.2111 49.1356 90.0043M49.1356 90.0043C44.0601 87.3414 32.8285 84.2126 28.5061 93M49.1356 90.0043C45.8611 88.1736 40.0979 80.8174 43.2414 66.0385M10.2322 38.0785C9.38015 41.6962 8.2675 54.4237 15.144 64.4094" stroke="#fff" strokeWidth="1.5" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="tp-service-hero-right mt-135">
                <p className="fs-20 lh-140-per tp-text-grey-2">We don’t just design—we craft immersive<br /> digital experiences that connect brands with<br /> their audiences in meaningful ways. From<br /> branding and UI/UX design to web development<br /> and digital marketing, we create solutions that<br /> blend creativity, strategy, and technology.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-breadcrumb-wrap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tp-breadcrumb-list">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><span></span></li>
                    <li>News & Insight</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-service-hero-area-end */}

      {/* tp-blog-banner-area-start */}
      <div className="p-blog-banne-area tp-about-me-banner scale-up-img">
        <img data-speed="0.4" className="img-cover scale-up" src="/assets/img/breadcrumb/thumb-7.jpg" alt="" />
      </div>
      {/* tp-blog-banne-area-end */}

      {/* tp-blog-area-start */}
      <div className="tp-blog-area pt-140 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="tp-blog-subtitle mb-30 tp_fade_anim" data-delay=".3">
                <span className="tp-section-subtitle tp-ff-heading fw-500 tp-text-common-white fs-16 mb-35"><span className="borders d-inline-block"></span>Latest Journal</span>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tp-blog-title-wrap ml-20 mb-45">
                <h2 className="tp-section-title tp-text-common-white fs-70 fs-lg-50 fs-xs-40 fw-700 text-uppercase mb-50 tp_fade_anim" data-delay=".5">Updated Blog</h2>
                <div className="d-flex align-items-start tp_fade_anim" data-delay=".7">
                  <span className="mr-40 tp-service-shape d-inline-block">
                    <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="12" width="30" height="30" fill="white" />
                      <rect x="15" width="30" height="30" fill="#FF8C00" />
                    </svg>
                  </span>
                  <p className="fs-18 tp-text-grey-2 lh-28">Strategists dedicated to creating stunning,<br /> functional websites that align with your unique<br /> business goals.</p>
                </div>
              </div>
            </div>
            {[
              { id: 1, thumb: 'thumb.jpg', category: 'Web Design', title: 'Mastering customer journeys with marketing funnel analytics.' },
              { id: 2, thumb: 'thumb-2.jpg', category: 'AI Trends', title: 'Our Creative Process for High-Impact Branding.' },
              { id: 3, thumb: 'thumb-3.jpg', category: 'Web Design', title: 'Our Creative Process for High-Impact Branding.' },
              { id: 4, thumb: 'thumb-4.jpg', category: 'Web Design', title: 'Our Creative Process for High-Impact Branding.' },
              { id: 5, thumb: 'thumb-5.jpg', category: 'AI Trends', title: 'Top 5 Web Design Mistakes That Hurt Conversions.' },
              { id: 6, thumb: 'thumb-6.jpg', category: 'Web Design', title: 'Why User-Centered Design is the Key to Digital Success.' },
            ].map((blog) => (
              <div key={blog.id} className="col-lg-4 col-md-6">
                <div className="tp-blog-item tp--hover-item mb-60 tp_fade_anim" data-delay=".4" data-fade-from="left" data-ease="bounce">
                  <a href="/blog-details" className="tp-blog-thumb d-block mb-30 p-relative fix d-inline-block">
                    <div className="tp--hover-img" data-displacement="/assets/img/imghover/strip.png" data-intensity="0.2" data-speedin="1" data-speedout="1">
                      <img className="w-100" src={`/assets/img/blog/${blog.thumb}`} alt="" />
                    </div>
                  </a>
                  <div className="tp-blog-content text-center">
                    <div className="tp-blog-meta mb-15">
                      <span>{blog.category}</span>
                      <span className="borders"></span>
                      <span>02 Feb, 2025</span>
                    </div>
                    <h3 className="fs-25 lh-120-per tp-text-common-white"><a className="underline-black" href="/blog-details">{blog.title}</a></h3>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-12">
              <div className="tp-blog-pagenation-wrap pt-20">
                <a href="#" className="tp-blog-pagenation-nav">
                  <svg className="mr-10" width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.32503 9.91054L0.279989 5.63362C0.194002 5.56483 0.123373 5.47086 0.0744866 5.36023C0.0256005 5.2496 0 5.12579 0 5C0 4.87421 0.0256005 4.7504 0.0744866 4.63977C0.123373 4.52914 0.194002 4.43518 0.279989 4.36638L6.32503 0.0894619C6.44282 0.0111909 6.57854 -0.0168364 6.71077 0.00979851C6.84301 0.0364334 6.96425 0.116215 7.05538 0.236567C7.1465 0.356918 7.20233 0.510993 7.21407 0.674501C7.2258 0.838009 7.19277 1.00165 7.12018 1.13963L5.36702 4.26665L24.4012 4.26665C24.56 4.26665 24.7123 4.34391 24.8246 4.48144C24.9369 4.61897 25 4.8055 25 5C25 5.1945 24.9369 5.38103 24.8246 5.51856C24.7123 5.65609 24.56 5.73335 24.4012 5.73335L5.36702 5.73335L7.12018 8.86038C7.19277 8.99835 7.2258 9.16199 7.21407 9.3255C7.20233 9.48901 7.1465 9.64308 7.05538 9.76343C6.96425 9.88378 6.84301 9.96357 6.71077 9.9902C6.57854 10.0168 6.44282 9.98881 6.32503 9.91054Z" fill="currentColor" />
                  </svg>
                  Previous
                </a>
                <div className="tp-blog-pagenation">
                  <ul>
                    <li><a className="active" href="#">01</a></li>
                    <li><a href="#">02</a></li>
                    <li><a href="#">03</a></li>
                    <li><a href="#">04</a></li>
                  </ul>
                </div>
                <a href="#" className="tp-blog-pagenation-nav">
                  NEXT
                  <svg className="ml-10" width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-blog-area-end */}

      {/* tp-text-slider-area-start */}
      <div className="tp-text-slider-area pt-25 pb-25 tp-bg-theme-primary">
        <div className="swiper-container tp-text-slider-active">
          <div className="swiper-wrapper slide-transtion">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="swiper-slide">
                <div className="tp-text-slider-item">
                  <span>{item % 2 === 0 ? 'Design' : 'Research'}</span>
                  <span className="icons">
                    <svg width="68" height="12" viewBox="0 0 68 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M59.416 11.8926L67.62 6.76034C67.7367 6.67779 67.8325 6.56504 67.8989 6.43228C67.9652 6.29953 67.9999 6.15095 67.9999 6C67.9999 5.84905 67.9652 5.70048 67.8989 5.56772C67.8325 5.43496 67.7367 5.32221 67.62 5.23966L59.416 0.107354C59.2561 0.0134291 59.0719 -0.0202036 58.8925 0.0117582C58.713 0.04372 58.5485 0.139459 58.4248 0.28388C58.3011 0.428302 58.2254 0.613192 58.2094 0.809402C58.1935 1.00561 58.2383 1.20198 58.3369 1.36755L60.7161 5.11998L0.812592 5.11998C0.597076 5.11998 0.390396 5.21269 0.238007 5.37773C0.0856171 5.54277 0 5.7666 0 6C0 6.2334 0.0856171 6.45724 0.238007 6.62227C0.390396 6.78731 0.597076 6.88003 0.812592 6.88003C0.812592 6.88003 49.0381 6.88003 60.7161 6.88003L58.3369 10.6325C58.2383 10.798 58.1935 10.9944 58.2094 11.1906C58.2254 11.3868 58.3011 11.5717 58.4248 11.7161C58.5485 11.8605 58.713 11.9563 58.8925 11.9882C59.0719 12.0202 59.2561 11.9866 59.416 11.8926Z" fill="#030303" />
                    </svg>
                  </span>
                  <span>development</span>
                  <span className="borders"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* tp-text-slider-area-end */}
    </>
  );
};

export default BlogGrid;

