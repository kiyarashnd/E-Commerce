import style from './Header.module.css';
import { TfiLayoutGrid2, TfiLayoutListThumb } from 'react-icons/tfi';
import { useGlobalContext } from './context';

const Header = ({ length }) => {
  const { isGridEnable, openGrid, closeGrid } = useGlobalContext();

  function handleGrid() {
    openGrid();
  }
  function handleRow() {
    closeGrid();
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
        <label htmlFor='sort'>sort by</label>
        <select name='sort' id='sort' className={style['sort-input']}>
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
        </select>
      </form>
    </section>
  );
};

export default Header;
