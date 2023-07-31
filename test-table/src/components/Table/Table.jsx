import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { contributionCount, formatDateToCustomFormat, rangeBlocks } from '../../utils';
import { getData } from '../../store/tableAction';
import Block from '../Block/Block';
import CustomPopover from '../CustomPopover/CustomPopover';

import style from './Table.module.css'


const Table = () => {
  const dispatch = useDispatch();
  const { data, months } = useSelector((state) => state.tableReducer)

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div className={style.table_wrapper}>
      <div className={style.table}>
        <div className={style.table_week}>
          <span className={style.table_weekMonday}>Пн</span>
          <span className={style.table_weekWednesday}>Ср</span>
          <span className={style.table_weekFriday}>Пт</span>
        </div>
        <div className={style.container}>
          <div className={style.months}>
            {months?.map((item, value) => { // Это для того чтобы точное место найти Месяцов над клетками
              let width = Math.round(item.column / 7) || 1
              return (
                <div 
                  className={style.months_inner} 
                  style={{ width: `${ width * 2 }${width === 2 ? 4 : width === 3 ? 8 : 0}px`}}
                >
                  { item.column > 1 && 
                    (item.value.length > 4 ? item.value.substring(0, 4) + '.' : item.value )
                  }
                </div>
              )
            })}
          </div>

          <div className={style.table_inner}>
            {
              Object.entries(data).map(([key, value]) => {
                return (
                  <CustomPopover
                    key={key}
                    modal={<>
                      <h4>{value} contributions</h4>
                      {formatDateToCustomFormat(`${key}`)}
                    </>}
                  >
                    <Block onClick={''} bgColor={contributionCount(value)} />
                  </CustomPopover>
                )
              })
            }
          </div>

          <div className={style.range}>
            <h3>Меньше</h3>
            {rangeBlocks.map((item) => (
              <CustomPopover key={item.color} modal={<h4>{item.contribute} contributions</h4>}>
                <Block onClick={''} bgColor={item.color} />
              </CustomPopover>
            ))}
            <h3>Больше</h3>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Table;