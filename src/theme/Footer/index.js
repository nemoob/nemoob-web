import React from 'react';
import Footer from '@theme-original/Footer';
import VisitStats from '@site/src/components/VisitStats';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <VisitStats />
    </>
  );
}
