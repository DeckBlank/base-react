import React from 'react'
import Table from '../Table/Table'
import './_ContainerTable.scss'
import customerList from '../../../../assets/Jsons/customers-list.json'
import SearchBtn from '../SearchBtn/SearchBtn'

const customerTableHead = [
    'id',
    'tutor',
    'alumno',
    'fecha',
    'hora',
    'curso',
    'modalidad',
    'estado'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.tutor}</td>
        <td>{item.alumno}</td>
        <td>{item.fecha}</td>
        <td>{item.hora}</td>
        <td>{item.curso}</td>
        <td>{item.modalidad}</td>
        <td>{item.estado}</td>
    </tr>
)

const CustomersList = () => {
    return (
        <div>
            <h2 className="page-header">
                Contenido
            </h2>
            <SearchBtn/>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomersList