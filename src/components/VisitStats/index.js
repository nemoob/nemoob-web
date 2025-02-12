import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css';

export default function VisitStats() {
  const location = useLocation();
  const [pageViews, setPageViews] = useState(0);
  const [totalViews, setTotalViews] = useState(0);

  useEffect(() => {
    const stats = JSON.parse(localStorage.getItem('pageStats') || '{}');
    const today = new Date().toISOString().split('T')[0];
    
    if (!stats[today]) {
      stats[today] = { total: 0, pages: {} };
    }
    if (!stats[today].pages[location.pathname]) {
      stats[today].pages[location.pathname] = 0;
    }
    
    stats[today].pages[location.pathname]++;
    stats[today].total++;
    
    localStorage.setItem('pageStats', JSON.stringify(stats));
    
    const totalCount = Object.keys(stats).reduce((sum, date) => 
      sum + stats[date].total, 0);
    
    setPageViews(stats[today].pages[location.pathname]);
    setTotalViews(totalCount);
  }, [location.pathname]);

  return (
    <div className={styles.visitStats}>
      <span>
        <span className={styles.label}>今日访问</span>
        <span className={styles.count}>{pageViews}</span>
      </span>
      <span className={styles.separator}>|</span>
      <span>
        <span className={styles.label}>总访问量</span>
        <span className={styles.count}>{totalViews}</span>
      </span>
    </div>
  );
}
