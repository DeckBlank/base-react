import React from 'react'
import Table from '../../components/TableOri/Table'
import customerList from "../../assets/Jsons/customers-list.json";
import { setDefaultHeader } from '../../requests/login';

const DocsTable = () => {

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const fetchIdRef = React.useRef(0);

  const  fetchData = () => {
      setLoading(true);
      //const customerList= await namefuncion ()
      setData(customerList);
      setPageCount(customerList.length);
      setLoading(false);
  }  

  const columns =  [
      {
        Header: "Curso",
        columns: [
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "Alumno",
            accessor: "alumno",
          },
        ],
      }
    ];

  return (
    <div>    
      <h1>TABLE CON PAGINACIÓN</h1><br/> 
      <Table
         columns={columns}
         data={data}
         fetchData={fetchData}
         loading={loading}
         pageCount={pageCount}
      />
    </div>
  )
}

export default DocsTable
