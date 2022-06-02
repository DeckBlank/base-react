import React ,{useState,useCallback,useEffect} from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";
import CRUDEdit from "../../components/CRUDEdit/CRUDEdit";
import { getCourse, getUnitsTable } from "../../requests/courses";
import './_Home.scss';


export default function Home() {
  const navigate = useNavigate();
  const [course, setCourse] = React.useState([]);
  const [title, setTitle] = React.useState(null);
  const  idCourse  = 983;
  
  const getInfoOfCourse = async (idCourse) => {
    let course = await getCourse({idCourse});
    if(course.status==='success'){
      setCourse(course.data);
    }
  }

  useEffect( () => {
    getInfoOfCourse(idCourse)
  }, [])

  const columnsNamesUnits = [
    {
      Header: "Unidades",
      columns: [
        {
          Header: "ID",
          accessor: "unitIndex",
        },
        {
          Header: "Nombre unidad",
          accessor: "unitTitle",
        },
        {
          Header: "",
          accessor: "editar",
        },
      ],
    }
  ];



  const updateRowUnits = async (row) => {
    navigate(`/unit/${row.unitIndex}`);
  }
  /* 
  const deleteRowUnits = async () => {

  }
  const createRowUnits = async () => {

  } */
 
  return (
    <div className="login-wrapper">
     {/*  <div>{course}</div> */}
      <CRUDEdit 
        title = {course.titleCourse}
        columnsNames={columnsNamesUnits} 
        getData={ ({ pageIndex, pageSize , search}) => getUnitsTable({ pageIndex, pageSize ,idCourse,search})}
         updateRow={updateRowUnits}
        /*deleteRow={deleteRowUnits}
        createRow={createRowUnits} */
        textSearch="Buscar Unidades: "
      ></CRUDEdit>
      <br></br>
    </div>
  );
}
