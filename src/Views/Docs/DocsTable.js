import React from "react";
import Table from "../../components/Table/Table";
import customerList from "../../assets/Jsons/customers-list.json";
import TableSimple from "../../components/TableSimple/TableSimple";
import Button from "../../uiKit/Button/Button";
import IconoTutor from "../../assets/images/icono de tutor.png";

const DocsTable = () => {

  // Table Multi Pagination

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  // const fetchIdRef = React.useRef(0);

  const fetchData = () => {
    setLoading(true);
    //const customerList= await namefuncion ()
    setData(customerList);
    setPageCount(customerList.length);
    setLoading(false);
  };

  const columns = [
    {
      Header: "Curso",
      columns: [
        {
          Header: "id",
          accessor: "id",
        },
        {
          Header: "tutor",
          accessor: "tutor",
        },
        {
          Header: "fecha",
          accessor: "fecha",
        },
        {
          Header: "hora",
          accessor: "hora",
        },
        {
          Header: "curso",
          accessor: "curso",
        },
        {
          Header: "modalidad",
          accessor: "modalidad",
        },
      ],
    },
  ];

  // Table Simple

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

  return (
    <div className="views-docs">
      <h1>TABLA CON MULTI PAGINACIÓN </h1>

      <Table
        columns={columns}
        data={data}
        fetchData={fetchData}
        loading={loading}
        pageCount={pageCount}
      />
       
      <h1>TABLA CON PAGINACIÓN SIMPLE </h1>

      <TableSimple
        limit="10"
        headData={customerTableHead}
        renderHead={(item, index) => renderHead(item, index)}
        bodyData={customerList}
        renderBody={(item, index) => renderBody(item, index)}
      />
    </div>
  );
};

export default DocsTable;
