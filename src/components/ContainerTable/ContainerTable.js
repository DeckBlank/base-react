import React from "react";
import Table from "../Table/Table";
import customerList from "../../assets/Jsons/customers-list.json";
import Button from "../../uiKit/Button/Button";
import IconoTutor from "../../assets/images/icono de tutor.png";
import "./_ContainerTable.scss";

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
    <td>
      <div className="tutor-flex-td">
        <img src={IconoTutor} alt="Logo del Tutor" /> {item.tutor}
      </div>
    </td>
    <td>{item.alumno}</td>
    <td>{item.fecha}</td>
    <td>{item.hora}</td>
    <td>{item.curso}</td>
    <td>{item.modalidad}</td>
    <td className="span-state-container">
      <span className="span span-width btn-radius span-flex-state bg-green">
        {item.estado}
      </span>
      <Button className="btn-state btn-width btn-radius txt-silver">
        <i className="fas fa-solid fa-bell"></i>
      </Button>
    </td>
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
