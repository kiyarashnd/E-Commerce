import style from './Header.module.css';
import { TfiLayoutGrid2, TfiLayoutListThumb } from 'react-icons/tfi';
// import { useGlobalContext } from './context';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllEnable } from './enableSlice';
import { closeGrid, openGrid } from './enableSlice';

const Header = ({ length, sortData }) => {
  const dispatch = useDispatch();

  // const { openGrid, closeGrid } = useGlobalContext();
  const { isGridEnable } = useSelector(selectAllEnable);

  function handleGrid() {
    // openGrid();
    dispatch(openGrid({ status: true }));
  }
  function handleRow() {
    // closeGrid();
    dispatch(closeGrid({ status: false }));
  }

  return (
    <section className={style.container}>
      <div className={style['btn-container']}>
        <button
          className={`${style.btn} ${isGridEnable ? style.active : null}`}
          onClick={handleGrid}
        >
          <TfiLayoutGrid2 className={style.icon} />
        </button>
        <button
          className={`${style.btn} ${isGridEnable ? null : style.active}`}
          onClick={handleRow}
        >
          <TfiLayoutListThumb className={style.icon} />
        </button>
      </div>
      <p className={style.para}>{`${length} item${
        length > 1 ? 's' : ''
      } found`}</p>
      <hr className={style.line} />
      {/* <div className={style.underline}></div> */}

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='sort' className={style.label}>
          sort by
        </label>
        <select
          name='sort'
          id='sort'
          className={style['sort-input']}
          onChange={(e) => sortData(e.target.value)}
        >
          <option value='lowest'>price (lowest)</option>
          <option value='highest'>price (highest)</option>
        </select>
      </form>
    </section>
  );
};

export default Header;
