import React from 'react';
import Loader from '@/components/Loader';
import MagicCursor from '@/components/MagicCursor';
import BackToTop from '@/components/BackToTop';
import Offcanvas from '@/components/Offcanvas';
import Header from '@/components/Header';
import FooterTwo from '@/components/FooterTwo';
import BlogGrid from '@/components/BlogGrid';

export default function BlogGridPage() {
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
            <BlogGrid />
          </main>
          <FooterTwo />
        </div>
      </div>
    </>
  );
}

