import React ,{useState,useCallback,useEffect} from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";
import CRUDEdit from "../../components/CRUDEdit/CRUDEdit";
import { getCourse, getUnitsTable } from "../../requests/courses";
import Button from "../../uiKit/Atoms/Button/Button";
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
  const sendCourse = ()=>{
    alert('hola')
  }
  /* 
  const deleteRowUnits = async () => {

  }
  const createRowUnits = async () => {

  } */
  let obj = {
    value : 'hola',
    item2 : 'mundo',
  }
  const hola = ({value,item2}) => { 
    console.log(item2);
    console.log(value)
  }
  hola(obj)
 
  return (
    <div className="login-wrapper">
     {/*  <div>{course}</div> */}
      <button onClick={sendCourse} >Publicar</button>
      <Button  color="oranje" className="dot" text="hola mundo" onClick={sendCourse}/>
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
