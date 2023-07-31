import React from 'react'
import style from './Block.module.css';

export default function Block({ bgColor = '#EDEDED' }) {
  return (
    <div
      className={style.block}
      style={{background: `${bgColor}`}}
    >
    </div>
  )
}
