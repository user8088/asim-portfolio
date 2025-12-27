"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function ClientScripts() {
  return (
    <>
      <Script src="/assets/js/vendor/jquery.js" strategy="beforeInteractive" />
      <Script src="/assets/js/bootstrap-bundle.js" strategy="afterInteractive" />
      <Script src="/assets/js/plugin.js" strategy="afterInteractive" />
      <Script src="/assets/js/three.js" strategy="afterInteractive" />
      <Script src="/assets/js/hover-effect.umd.js" strategy="afterInteractive" />
      <Script src="/assets/js/split-type.js" strategy="afterInteractive" />
      <Script src="/assets/js/swiper-bundle.js" strategy="afterInteractive" />
      <Script src="/assets/js/swiper-gl.js" strategy="afterInteractive" />
      <Script src="/assets/js/effect-slicer.js" strategy="afterInteractive" />
      <Script src="/assets/js/magnific-popup.js" strategy="afterInteractive" />
      <Script src="/assets/js/nice-select.js" strategy="afterInteractive" />
      <Script src="/assets/js/purecounter.js" strategy="afterInteractive" />
      <Script src="/assets/js/isotope-pkgd.js" strategy="afterInteractive" />
      <Script src="/assets/js/imagesloaded-pkgd.js" strategy="afterInteractive" />
      <Script src="/assets/js/backtop.js" strategy="afterInteractive" />
      <Script src="/assets/js/ajax-form.js" strategy="afterInteractive" />
      <Script src="/assets/js/slider-init.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
      <Script src="/assets/js/tp-cursor.js" strategy="afterInteractive" />
    </>
  );
}

