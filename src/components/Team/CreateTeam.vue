<template>
  <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h3>Create Team</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addTeam">
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="text" class="form-control" v-model="item.name"/>
                    </div>
                    <div class="form-group">
                        <label>Start Date:</label>
                        <input type="Date" class="form-control" v-model="item.startDate"/>
                    </div>
                    <div class="form-group">
                        <label>End Date:</label>
                        <input type="Date" class="form-control" v-model="item.endDate"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Create"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import TeamService from "../../services/team.service";
export default {
  components: {
  },
  data() {
      return {
          item: {}
      }
  },
  methods: {
      addTeam() {
          TeamService.createTeam(this.item).then(
              (response) => {
                  this.content = response.data;
                  alert('Team created successfully!');
                  },
                  (error) => {
                      this.content =(error.response && error.response.data && error.response.data.message) || 
                        error.message || error.toString();
                                          alert('Something went wrong!');
                    }
                );
        }
    }
}
</script>