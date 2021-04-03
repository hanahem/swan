import React from 'react';
import Donate from '../components/Donate';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProjectsList from '../components/ProjectsList';
import FilterProvider from '../utils/FilterProvider';

const IndexPage = () => {
  return (
    <FilterProvider>
      <div
        className={`w-full sm:w-7/12 flex flex-col items-center justify-center m-auto text-center py-20 min-h-screen relative`}
      >
        <Header />
        <ProjectsList />
        <Donate />
        <Footer />
      </div>
    </FilterProvider>
  );
};

export default IndexPage;
