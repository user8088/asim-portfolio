import React from 'react';
import Loader from '@/components/Loader';
import MagicCursor from '@/components/MagicCursor';
import BackToTop from '@/components/BackToTop';
import Offcanvas from '@/components/Offcanvas';
import Header from '@/components/Header';
import FooterTwo from '@/components/FooterTwo';
import PortfolioDetails from '@/components/PortfolioDetails';

export default function PortfolioDetailsPage() {
  return (
    <>
      <Loader />
      <MagicCursor />
      <BackToTop />
      <Offcanvas />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          <main>
            <PortfolioDetails />
          </main>
          <FooterTwo />
        </div>
      </div>
    </>
  );
}

