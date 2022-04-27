import React from 'react';
import Table from '../../components/Table/Table';
const handleSubmit = async e => {
  e.preventDefault();

  console.log('eliminar token');

}

export default function Dashboard() {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  )
  
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [pageCount, setPageCount] = React.useState(0)
  const fetchIdRef = React.useRef(0)
  
  const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
  
    const fetchId = ++fetchIdRef.current
  
    setLoading(true)
  
    setTimeout(() => {
      if (fetchId === fetchIdRef.current) {
        const startRow = pageSize * pageIndex
        const endRow = startRow + pageSize
          let data = [];
          for (let i = startRow; i < endRow; i++) {
              data.push({
                  firstName: 'Ricky' + i,
                  lastName: 'Martin' + i,
                  age: Math.floor(Math.random() * 60),
                  visits: Math.floor(Math.random() * 100),
                  progress: Math.floor(Math.random() * 100),
                  status:  'single'
              });
          }
        setData(data)
        setPageCount(Math.ceil(1000 / pageSize))
  
        setLoading(false)
      }
    }, 1000)
  }, [])
  
  return(
    <div className="login-wrapper">
      <h2>Dashboard</h2>
      <form onSubmit={handleSubmit}>
          <div>
            <button type="submit">Signout</button>
          </div>
      </form>
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