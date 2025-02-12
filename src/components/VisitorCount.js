import React from 'react';
import styles from './VisitorCount.module.css';

export default function VisitorCount() {
  return (
    <div className={styles.visitorCount}>
      <span>今日访问：123</span>
      <span className={styles.separator}>|</span>
      <span>总访问量：45,678</span>
    </div>
  );
} 