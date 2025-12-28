import React from 'react';
import Loader from '@/components/Loader';
import MagicCursor from '@/components/MagicCursor';
import BackToTop from '@/components/BackToTop';
import Offcanvas from '@/components/Offcanvas';
import Header from '@/components/Header';
import FooterTwo from '@/components/FooterTwo';
import BlogDetails from '@/components/BlogDetails';

export default function BlogDetailsPage() {
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
            <BlogDetails />
          </main>
          <FooterTwo />
        </div>
      </div>
    </>
  );
}

