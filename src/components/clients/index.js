import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { data } from './Constants';

const Clients = () => {
  return (
    <div className="container mt-5 text-center">
      <h2>ATENCIÓN AL ADMINISTRADO: Elena Rodriguez</h2>
      <hr />
      <div className="card text-center" v-if="accountCustomer">
        <div className="card-header">
          DATOS GENERALES
        </div>
        <div className="card-body">
          <h4 className="card-title">Administrado</h4>
          <p className="card-text">PELAEZ BENITES JUAN BERNARDO</p>
        </div>
        <div className="card-footer text-muted">
          <button type="button" className="btn btn-success">INICIO</button>
        </div>
      </div>
      <MDBDataTable
        striped
        bordered
        small
        data={data}
      />
    </div>
  );
};

export default Clients;