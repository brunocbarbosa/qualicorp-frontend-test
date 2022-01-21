import React from 'react';
import { Route, Routes  } from 'react-router-dom';

import FormPage from './pages/FormPage';

function routePage(){
  return(
    <Routes>
      <Route path='/' exact element={<FormPage />} />
    </Routes>
  );
}

export default routePage;