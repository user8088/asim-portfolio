import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="tp-hero-area pre-header tp-hero-pp-spacing p-relative fix">
      <div className="tp-hero-pp-shape-wrap d-none d-lg-block">
        <span>
          <svg width="104" height="208" viewBox="0 0 104 208" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_587_64" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="104" height="208">
              <rect width="104" height="208" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_587_64)">
              <circle cy="104" r="103.5" stroke="white" />
              <circle cy="94" r="94" fill="#FF8C00" />
              <circle cx="60" cy="23" r="15" fill="white" />
            </g>
          </svg>
        </span>
      </div>
      <div className="container-fluid container-1800 containers">
        <div className="row">
          <div className="col-lg-7 col-md-11 offset-lg-1">
            <div className="tp-hero-content p-relative ml-75 mb-30">
              <div className="tp-hero-sa-subtitle mb-35">
                <div className="tp-hero-sa-subtitle-inner">
                  <span className="tp-ff-heading fw-500 fs-18 tp-text-common-white">Research,<br /> Wireframe, Design</span>
                  <span className="d-block">
                    <svg width="180" height="6" viewBox="0 0 180 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM175 3.5L180 5.88675V0.113249L175 2.5V3.5ZM4.5 3.5H175.5V2.5H4.5V3.5Z" fill="#999" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="tp-hero-pp-title-wrap mb-120">
                <span className="tp-ff-heading fw-500 fs-35 fs-xs-25 tp-text-common-white d-inline-block mb-35">I’m Gabriel Mathiwes,</span>
                <h2 className="tp-hero-pp-title tp-text-common-white fw-500 fs-100 fs-xl-80 fs-lg-70 fs-xs-40 lh-1 text-uppercase mb-45">Senior Product <br />
                  <img src="/assets/img/hero/pp/bg.png" alt="" /> Designer.</h2>
                <p className="tp-hero-pp-para tp-ff-heading fw-500 fs-25 tp-text-grey-2 lh-130-per">Crafting seamless & delightful experiences<br /> for modern products.</p>
              </div>
              <span className="tp-ff-heading fw-500 fs-18 tp-text-common-white mb-10 d-inline-block">Follow Me</span>
              <div className="tp-hero-pp-social d-flex flex-wrap">
                <div className="tp-hero-social tp-hero-pp-social d-flex flex-wrap">
                  <a href="#"><i className="fa-brands fa-dribbble"></i></a>
                  <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                  <a href="#"><i className="fa-brands fa-behance"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span className="borders">Download Resume</span>
              </div>
              <div className="tp-about-wd-shape tp-hero-pp-shape tp-about-sa-shape">
                <span className="shape-1 d-inline-block mr-10">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 40C0 17.9086 17.9086 0 40 0V40H0Z" fill="#FF8C00" />
                  </svg>
                </span>
                <span className="shape-1" data-speed="0.9">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 40C40 17.9086 22.0914 0 0 0V40H40Z" fill="white" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-40">
            <div className="tp-hero-pp-thumb fix">
              <img data-speed="0.9" src="/assets/img/hero/pp/thumb.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

