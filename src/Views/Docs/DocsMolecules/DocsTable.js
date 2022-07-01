import React from "react";
import { Icon } from "@iconify/react";
// COMPONENTS
import Table from "../../../uiKit/Molecules/Table/Table";
import TableSimple from "../../../uiKit/Molecules/TableSimple/TableSimple";
import Button from "../../../uiKit/Atoms/Button/Button";
// JSONS
import CustomerList from "../../../assets/Jsons/TableList/customers-list.json";
// IMAGES
import IconoTutor from "../../../assets/images/icono de tutor.png";
import Title from "../../../uiKit/Atoms/Title/Title";

const DocsTable = () => {
  // Table Multi Pagination
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  // const fetchIdRef = React.useRef(0);

  const fetchData = () => {
    setLoading(true);
    //const CustomerList= await namefuncion ()
    setData(CustomerList);
    setPageCount(CustomerList.length);
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
        <span className="p-03 w-100p br-15 bg-green d-flex ai-center txta-center jc-center">
          {item.estado}
        </span>
        
        <Button classname="btn-edit" hovertxtcolor="silver" txtcolor="black">
          <Icon icon="majesticons:more-menu-vertical" />
        </Button>
      </td>
    </tr>
  );

  return (
    <section className="d-flex fd-column g-2">
      <Title
        title="Docs Table"
        classname="p-sticky top-0 txt-black bb-title f-s mb-1 pl-3 pt-1 pr-1 pb-1"
      />
      <div className="ph-3">
        <h2>TABLA CON PAGINACIÓN SIMPLE </h2>

        <TableSimple
          limit="10"
          headData={customerTableHead}
          renderHead={(item, index) => renderHead(item, index)}
          bodyData={CustomerList}
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
    </section>
  );
};

export default DocsTable;
