import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { getAllVideo } from '../actions/videos';


const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.videos)||1;
  const dispatch = useDispatch();

  
  useEffect(() => {
    if (page) {
      dispatch(getAllVideo(page));
    }
  }, [dispatch, page]);

  return (
    <Pagination
      
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/video?page=${item.page}`}/>
      )}
    />
  );
};

export default Paginate;