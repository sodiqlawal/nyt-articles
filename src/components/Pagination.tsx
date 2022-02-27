import type { FC } from "react";
import "styles/pagination.scss";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Pagination: FC<{
  total: number;
  page: number;
  limit: number;
  setPage: Function;
}> = ({ total, page, limit, setPage }) => {

  const next = () => {
    setPage((val: number) => val + 1);
  };

  const prev = () => {
    if(page > 1){
      setPage((val: number) => val - 1);
    }
  };

  const numberOfPages = () => {
    return Math.ceil(total/limit)
  }

  if(!total || total===0) return null;
  return (
    <div className="pagination">
      <div onClick={prev} className={page === 1 ? 'disabled' : 'active'}>
        <MdOutlineKeyboardArrowLeft size={20} />
        <p> Prev page </p>
      </div>
      <p>{`page ${page} of ${numberOfPages()}`}</p>
      <div onClick={next} className={page >= numberOfPages() ? 'disabled' : 'active'}>
        <p>Next page </p> <MdOutlineKeyboardArrowRight size={20} />
      </div>
    </div>
  );
};

export default Pagination;
