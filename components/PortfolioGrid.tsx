import React from 'react';

const PortfolioGrid: React.FC = () => {
  const portfolioItems = [
    { id: 1, thumb: 'thumb.jpg', title: 'Innovation in Every Swipe', tag: 'Development' },
    { id: 2, thumb: 'thumb-2.jpg', title: 'Building Visual Identities', tag: 'Web Design' },
    { id: 3, thumb: 'thumb-3.jpg', title: 'Innovation in Every Swipe', tag: 'Development' },
    { id: 4, thumb: 'thumb-4.jpg', title: 'Turning Clicks Into Conversions', tag: 'Digital Marketing' },
    { id: 5, thumb: 'thumb-5.jpg', title: 'Elevating Brand Websites', tag: 'UI/UX Design' },
    { id: 6, thumb: 'thumb-6.jpg', title: 'Turning Clicks Into Conversions', tag: 'Web Design' },
    { id: 7, thumb: 'thumb-7.jpg', title: 'Venus Rebrand', tag: 'Digital Marketing' },
    { id: 8, thumb: 'thumb-8.jpg', title: 'Electro Hub', tag: 'Design' },
    { id: 9, thumb: 'thumb-9.jpg', title: 'Simple Logistics', tag: 'Agency' },
    { id: 10, thumb: 'thumb-10.jpg', title: 'Simple Logistics', tag: 'Digital Marketing' },
    { id: 11, thumb: 'thumb-11.jpg', title: 'Simple Logistics', tag: 'Design' },
    { id: 12, thumb: 'thumb-12.jpg', title: 'Corporate Branding', tag: 'Agency' },
  ];

  const renderItems = (items: typeof portfolioItems) => (
    <div className="row">
      {items.map((item) => (
        <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
          <div className="tp-portfolio-grid-item mb-50">
            <a href="/portfolio-details" className="tp-portfolio-sa-thumb d-block mb-25 fix">
              <img className="w-100" src={`/assets/img/portfolio/grid/${item.thumb}`} alt="" />
            </a>
            <div className="tp-portfolio-sa-content">
              <h4 className="tp-portfolio-sa-item-title tp-text-common-white fs-25 lh-1 mb-15">
                <a className="underline-black" href="/portfolio-details">{item.title}</a>
              </h4>
              <span className="tp-portfolio-sa-item-tag fw-700 fs-16 tp-text-grey-2 tp-ff-heading tp-bg-grey-8 d-inline-block">{item.tag}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* tp-portfolio-area-start */}
      <div className="tp-portfolio-colum-spacing pre-header tp-portfolio-area">
        <div className="container containers">
          <div className="row">
            <div className="col-lg-7">
              <div className="tp-service-hero-left p-relative mb-40">
                <h2 className="fs-70 fs-lg-60 fs-xs-40 tp-text-common-white">We Make Digital Beautiful</h2>
                <span className="tp-service-hero-shape tpswing d-none d-sm-inline-block">
                  <svg width="52" height="94" viewBox="0 0 52 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 16.1098C5.58433 24.0984 22.6118 44.5692 38.3295 38.0785C46.3521 34.5835 58.2264 23.6551 45.206 5.12554C40.2943 -1.86444 30.6673 -0.666183 25.559 14.1127C22.6118 22.6393 15.2441 43.0714 22.612 61.0456C26.5006 70.5321 38.1332 85.2111 49.1356 90.0043M49.1356 90.0043C44.0601 87.3414 32.8285 84.2126 28.5061 93M49.1356 90.0043C45.8611 88.1736 40.0979 80.8174 43.2414 66.0385M10.2322 38.0785C9.38015 41.6962 8.2675 54.4237 15.144 64.4094" stroke="#f8f8f8" strokeWidth="1.5" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="tp-service-hero-right mt-130">
                <p className="fs-20 lh-140-per tp-text-grey-2">We craft digital experiences that engage,<br /> convert, and grow your business. From branding<br /> to development, we provide end-to-end<br /> solutions tailored to your needs.</p>
              </div>
            </div>
            <div className="col-12">
              <div className="tp-portfolio-inner-tab-wrap mt-40">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All Projects</button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Marketing</button>
                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Agency</button>
                    <button className="nav-link" id="nav-four-tab" data-bs-toggle="tab" data-bs-target="#nav-four" type="button" role="tab" aria-controls="nav-four" aria-selected="false">Branding</button>
                    <button className="nav-link" id="nav-five-tab" data-bs-toggle="tab" data-bs-target="#nav-five" type="button" role="tab" aria-controls="nav-five" aria-selected="false">Design</button>
                    <button className="nav-link" id="nav-six-tab" data-bs-toggle="tab" data-bs-target="#nav-six" type="button" role="tab" aria-controls="nav-six" aria-selected="false">Development</button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-portfolio-area-end */}

      {/* portfolio area start */}
      <div className="tp-portfolio-inner-ptb pre-header pb-100">
        <div className="container container-1800 containers">
          <div className="tp-portfolio-tab-content-wrap">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
                {renderItems(portfolioItems)}
              </div>
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>
                {renderItems(portfolioItems.filter(item => item.tag === 'Digital Marketing' || item.tag === 'Marketing'))}
              </div>
              <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex={0}>
                {renderItems(portfolioItems.filter(item => item.tag === 'Agency'))}
              </div>
              <div className="tab-pane fade" id="nav-four" role="tabpanel" aria-labelledby="nav-four-tab" tabIndex={0}>
                {renderItems(portfolioItems.filter(item => item.tag === 'Branding'))}
              </div>
              <div className="tab-pane fade" id="nav-five" role="tabpanel" aria-labelledby="nav-five-tab" tabIndex={0}>
                {renderItems(portfolioItems.filter(item => item.tag === 'Design' || item.tag === 'UI/UX Design' || item.tag === 'Web Design'))}
              </div>
              <div className="tab-pane fade" id="nav-six" role="tabpanel" aria-labelledby="nav-six-tab" tabIndex={0}>
                {renderItems(portfolioItems.filter(item => item.tag === 'Development'))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* portfolio area end */}
    </>
  );
};

export default PortfolioGrid;

