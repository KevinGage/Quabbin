import React from 'react';
import styles from './Winner.module.css';

function Winner({place, name, year, info}) {
  return (
    <div className={styles.winner}>
      {place}<br />
      {name}<br />
      {year}<br />
      {info.map((info) => {
        return <div>{info}</div>
      })}
    </div>
  );
}

export default Winner;