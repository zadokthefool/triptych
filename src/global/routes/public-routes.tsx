import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { pages } from '@constants';
// Home page
import HomePage from '@home/pages/home-page';

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={pages.home.path} element={<HomePage />} />
      <Route path="*" element={<Navigate to={pages.home.path} />} />
    </Routes>
  );
};

export default PublicRoutes;
