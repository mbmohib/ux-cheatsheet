import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import Error from 'views/components/Error';
import { PreLoader } from 'views/ui';
// import { useLocation } from 'react-router-dom';

const Fetcher = ({ fetchData, label, loading, error, children }) => {
  const dispatch = useDispatch();
  // const location = useLocation();
  // const params = new URLSearchParams(location.search);
  // const queryParams = params.toString();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch, fetchData]);

  if (loading[label]) return <PreLoader />;
  if (error) return <Error message={error} />;

  return children();
};

const mapStateToProps = ({ ui }) => {
  return {
    loading: ui.loading,
    error: ui.error,
  };
};

export default connect(mapStateToProps)(Fetcher);
