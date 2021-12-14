import axios from 'axios';
// import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/v1/team';

class TeamService {

  createTeam(team) {
    return axios.post(API_URL , {
      name: team.name,
      startDate: team.startDate,
      endDate: team.endDate
    });
  }

  getTeams() {
    return axios.get(API_URL);
  }

  getOneTeams(name) {
    return axios.get(API_URL,{ params: { name: name }});
  }

  updateTeam(team) {
    return axios.put(API_URL , {
      name: team.name,
      startDate: team.startDate,
      endDate: team.endDate
    });
  }

  deleteTeams(name) {
    return axios.delete(API_URL,{ params: { name: name }});
  }
}

export default new TeamService();
