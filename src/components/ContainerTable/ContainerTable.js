import React from "react";
import Table from "../Table/Table";
import "./_ContainerTable.scss";
import customerList from "../../assets/Jsons/customers-list.json";
import SearchBtn from "../../uiKit/SearchBtn/SearchBtn";
import Button from "../../uiKit/Button/Button";
import Dropdown from "../../uiKitRelease/Dropdown/Dropdown";

const customerTableHead = [
  "id",
  "tutor",
  "alumno",
  "fecha",
  "hora",
  "curso",
  "modalidad",
  "estado",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.tutor}</td>
    <td>{item.alumno}</td>
    <td>{item.fecha}</td>
    <td>{item.hora}</td>
    <td>{item.curso}</td>
    <td>{item.modalidad}</td>
    <td>{item.estado}</td>
  </tr>
);

const CustomersList = () => {
  return (
    <div>
      <h2 className="page-header">Inicio</h2>
      <div className="section-table">
      <Button className="btn btn-width btn-radius txt-white btn-fuchsia btn-hover-fuchsia btn-flex-row">
        <i className="fas fa-solid fa-bell"></i>
        Filtro
      </Button>
        <SearchBtn />
        <Table
          limit="10"
          headData={customerTableHead}
          renderHead={(item, index) => renderHead(item, index)}
          bodyData={customerList}
          renderBody={(item, index) => renderBody(item, index)}
        />
        <Button className="btn btn-width btn-radius txt-white btn-green btn-hover-green btn-flex-row">
          <i className="fas fa-solid fa-bell"></i>
          Excel
        </Button>
      </div>
    </div>
  );
};

export default CustomersList;
