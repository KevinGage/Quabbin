import React from 'react';
import styles from './Winner.module.css';
import classNames from 'classnames/bind';

function Winner({place, name, year, info}) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx(styles.winner, {
      first: place === 1,
      second: place === 2,
      third: place === 3
    })}
    >
      {name}<br />
      {year}<br />
      {info.map((info) => {
        return <div>{info}</div>
      })}
    </div>
  );
}

export default Winner;