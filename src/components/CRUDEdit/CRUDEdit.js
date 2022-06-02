import React ,{useCallback} from "react";
import Table from "../Table/Table";
import './_CRUDEdit.scss';


export default function CRUDEdit({textSearch,columnsNames,getData,updateRow, deleteRow, createRow,title}) {

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const [search, setSearch] = React.useState('');

  const handleSearch = (event) => {
    let value = event.target.value;
    if( value.length >=3  || value.length===0 ){
      setSearch(value);
    }
  };

  const fetchData = useCallback(async ({ pageSize, pageIndex }) => {
    setLoading(true);
    let rawData = await getData({ pageIndex, pageSize , search });
    console.log('data', data);
    if (rawData.status==='success') {
      let {paginationInfo,data} = rawData;
      if(updateRow|| deleteRow)
        data = data.map(item => {
          return {
            ...item,
            editar: <>
                      {updateRow?<button onClick={() => updateRow(item)}>Editar</button>:null}          
                      {deleteRow?<button onClick={() => deleteRow(item)}>Eliminar</button>:null}         
                    </>
          }
        })
      if(createRow)
        data.push({
          editar: <>
                    <button onClick={() => createRow()}>Nuevo</button>
                  </>
        })
      setData(data);
      setPageCount(Math.ceil(paginationInfo.total / pageSize));
      setLoading(false);
    }
  }, [search]);

  const columns = React.useMemo(
    () => columnsNames,
    []
  );
  return (
    <div className="login-wrapper">
          <br></br>
          <h1>{title?title:'Editar'}</h1>
          <br></br>
          {/* {data.length?
          <> */}
            <br></br>
            <label htmlFor="search">
                {textSearch}
                <input id="search" type="text" onChange={handleSearch} />
            </label>
            <br></br>
            <Table
              columns={columns}
              data={data}
              fetchData={fetchData}
              loading={loading}
              pageCount={pageCount}
              />
            <br></br>
         {/*  </>
          :null} */}
    </div>
  );
}
