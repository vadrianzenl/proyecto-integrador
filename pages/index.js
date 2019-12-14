import React from 'react';
import Head from 'next/head';
import Clients from '../src/components/clients';

const Landing = () => {
  return (
    <div>
      <Head>
        <title>Gestión de Proyectos Software</title>
      </Head>
      <Clients />
    </div>
  );
};

export default Landing;
