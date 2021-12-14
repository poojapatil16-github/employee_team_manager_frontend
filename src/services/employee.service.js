import axios from 'axios';
// import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/v1/employee';

class EmployeeService {

  createEmployee(emp) {
    return axios.post(API_URL , {
      name: emp.name,
      joinDate: emp.joinDate,
      skills:  emp.skills.split(","),
      teamCode: emp.teamCode,
    });
  }

  getEmployee() {
    return axios.get(API_URL);
  }

  getOneEmployee(name) {
    return axios.get(API_URL,{ params: { name: name }});
  }

  updateEmployee(emp) {
    return axios.put(API_URL , {
        name: emp.name,
        joinDate: emp.joinDate,
        skills: emp.skills,
        teamCode: emp.teamCode,
    });
  }

  deleteEmployee(name) {
      console.log("delete emp in service",name);
    return axios.delete(API_URL,{ params: { name: name }});
  }
}

export default new EmployeeService();
