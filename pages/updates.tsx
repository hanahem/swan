import React from 'react';
import Donate from '../components/Donate';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Updates from '../components/Updates';

const UpdatesPage = () => {
  return (
    <div
      className={`w-full sm:w-7/12 flex flex-col items-center justify-center m-auto text-center py-20 min-h-screen relative`}
    >
      <Header />
      <Updates />
      <Donate />
      <Footer />
    </div>
  );
};

export default UpdatesPage;
