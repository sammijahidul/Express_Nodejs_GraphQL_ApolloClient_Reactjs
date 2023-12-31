import React from 'react';
import AddClientModal from '../components/AddClientModal';
import AddProjectModal from '../components/AddPojectModal';
import Project from '../components/Project';
import Client from '../components/Client';

const Home = () => {
  return (
    <>
        <div className='d-flex gap-3 mb-4'>
            <AddClientModal />
            <AddProjectModal />
        </div>
        <Project />
        <hr />
        <Client /> 
    </>
  )
}

export default Home;