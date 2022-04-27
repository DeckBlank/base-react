import React ,{useState,useCallback} from "react";
import Table from "../../components/Table/Table";
import './_Dashboard.scss';


export default function Dashboard() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const fetchIdRef = React.useRef(0);

  const fetchData = useCallback(async ({ pageSize, pageIndex }) => {
    const fetchId = ++fetchIdRef.current;
    setLoading(true);
    let data = await fetch(`http://localhost:3012/v1/courses?page=${pageIndex}&limit=${pageSize}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      //body: JSON.stringify(credentials)
    })
    .then(data => data.json())
    .catch(error => console.log(error));
    console.log(data);
    if (data.status==='success') {
      console.log(data.data);
      setData(data.data);
      setPageCount(Math.ceil(data.paginationInfo.total / pageSize));
      setLoading(false);
    }
    /* setTimeout(() => {
      if (fetchId === fetchIdRef.current) {
        const startRow = pageSize * pageIndex;
        const endRow = startRow + pageSize;
        let data = [];
        for (let i = startRow; i < endRow; i++) {
          data.push({
            firstName: "Ricky" + i,
            lastName: "Martin" + i,
            age: Math.floor(Math.random() * 60),
            visits: Math.floor(Math.random() * 100),
            progress: Math.floor(Math.random() * 100),
            status: "single",
          });
        }
        setData(data);
        setPageCount(Math.ceil(1000 / pageSize));

        setLoading(false);
      }
    }, 1000); */
  }, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Curso",
        columns: [
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "Nombre curso",
            accessor: "name",
          },
        ],
      },
      {
        Header: "Información",
        columns: [
          {
            Header: "Matriculados",
            accessor: "enrolled",
          },
          {
            Header: "Estado",
            accessor: "status",
          },
          {
            Header: "Costo",
            accessor: "price",
          },
        ],
      },
    ],
    []
  );
  return (
    <div className="login-wrapper">
      {'sdsd'}
      <Table
        columns={columns}
        data={data}
        fetchData={fetchData}
        loading={loading}
        pageCount={pageCount}
      />
    </div>
  );
}
