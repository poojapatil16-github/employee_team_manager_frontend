import axios from 'axios';
// import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/v1/task';

class TaskService {

  createTask(task) {
    return axios.post(API_URL , {
        code: task.code,
        name: task.name,
        description: task.description,
        project: task.project,
        logs: [
            {
                employee_code: task.employee_code,
                logedTime:task.logedTime,
                logStartDate:task.logStartDate
            }
          ]
    });
  }

  getTask() {
    return axios.get(API_URL);
  }

  getOneTask(code) {
    return axios.get(API_URL,{ params: { code: code }});
  }

  updateTask(task) {
    return axios.put(API_URL , {
      code: task.code,
      logs: [
        {
            employee_code: task.employee_code,
            logedTime:task.logedTime,
            logStartDate:task.logStartDate
        }
      ]
    });
  }

  deleteTask(code) {
    return axios.delete(API_URL,{ params: { code: code }});
  }
}

export default new TaskService();
