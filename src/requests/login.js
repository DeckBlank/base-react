import { axiosConfig, http } from "./axios";

export const loginUser = async ({ email, password }) => {
  let options = {
    method: "POST",
    url: `/v1/account/sign-in`,
    data: JSON.stringify({
      email,
      password,
    }),
  };
  return {
    "status": "success",
    "message": "Datos obtenidos exitosamente",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijp7Imhhc2giOiI2Mjc1NTc4M2FkNmU5ZTM0MDcxMGRlZmMifSwiaWF0IjoxNjU0MjA2NzIzLCJleHAiOjE2NTQyMTM5MjN9.PcikAroU_UFzTiIQXX0w5NgFP2GHSHkIUqdLW2mt8bE",
        "user": true
    }
  }
  return await http(options);
};

export const setDefaultHeader = ({header,value},configHttp=axiosConfig) => {
   configHttp.defaults.headers[header] = value;
   configHttp.interceptors.request.use(function (config) {
        config.headers[header] =  value;
        return config;
    });
    console.log(configHttp.defaults);
}