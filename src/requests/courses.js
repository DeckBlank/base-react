import { http } from "./axios";


export const getCourse = async ({ idCourse }) => {
    let options = {
      method: "GET",
      url: `/v1/courses/${idCourse}`,
    };
    return {"status":"success","message":"Datos obtenidos exitosamente","data":{"_id":"61c2419691d2d787fb7e56a9","cover":"https://mab3.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/04/27154135/Almu-ciencia-y-tecnologia-5-1.png","price":50,"teacher":8427,"titleCourse":"Ciencia y Tecnología 5"}}
    //return await http(options);
  };

export const getUnitsTable = async ({ pageIndex, pageSize ,idCourse , search}) => {
    let options = {
      method: "GET",
      url: `/v1/units/${idCourse}?page=${pageIndex}&limit=${pageSize}&search=${search}`,
    };
    return {
      "status": "success",
      "message": "Units heres!!",
      "data": [
          {
              "_id": "61c2418c9476c9be828f9693",
              "unitTitle": "Ambiente sano, la salud y la contaminación",
              "unitIndex": 54465
          },
          {
              "_id": "61c2418f9476c9be828f96a4",
              "unitTitle": "Ecosistemas: contaminación y animales ",
              "unitIndex": 54466
          },
          {
              "_id": "61c241929476c9be828f96b8",
              "unitTitle": "Inventos y descubrimientos ",
              "unitIndex": 54467
          },
          {
              "_id": "61c241939476c9be828f96c3",
              "unitTitle": "Electricidad y magnetismo",
              "unitIndex": 54468
          },
          {
              "_id": "61c241949476c9be828f96c8",
              "unitTitle": "Terremotos",
              "unitIndex": 54469
          }
      ],
      "pagination": false,
      "paginationInfo": {
          "count": 5,
          "currentPage": 1,
          "perPage": 10,
          "total": 5
      },
      "count": 5
  }
    return await http(options);
};
