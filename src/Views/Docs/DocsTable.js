import React from "react";
import Table from "../../uiKit/Table/Table";
import customerList from "../../assets/Jsons/customers-list.json";
import TableSimple from "../../uiKit/TableSimple/TableSimple";
import Button from "../../uiKit/Button/Button";
import IconoTutor from "../../assets/images/icono de tutor.png";
import { BsThreeDotsVertical } from "react-icons/bs";

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
    "alumno",
    "fecha",
    "hora",
    "curso",
    "modalidad",
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
        {/* <Badge text={item.estado} bgcolor="green" txtcolor="white" classname="span-width" /> */}
        <span className="span span-width btn-radius span-flex-state bg-green">
          {item.estado}
        </span> 
        <Button  classname="btn-edit" hovertxtcolor="silver" txtcolor="black">
          <BsThreeDotsVertical/>
        </Button>
      </td> 
    </tr>
  );

  return (
    <div className="views-docs">
      <h2>TABLA CON PAGINACIÓN SIMPLE </h2>

      <TableSimple
        limit="10"
        headData={customerTableHead}
        renderHead={(item, index) => renderHead(item, index)}
        bodyData={customerList}
        renderBody={(item, index) => renderBody(item, index)}
      />

      <h2>TABLA CON MULTI PAGINACIÓN </h2>

      <Table
        columns={columns}
        data={data}
        fetchData={fetchData}
        loading={loading}
        pageCount={pageCount}
      />
    </div>
  );
};

export default DocsTable;
