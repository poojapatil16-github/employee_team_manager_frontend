<template>
  <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h3>Employee Details</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addEmployee">
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="text" class="form-control" v-model="item.name"/>
                    </div>
                    <div class="form-group">
                        <label>Join Date:</label>
                        <input type="Date" class="form-control" v-model="item.joinDate"/>
                    </div>
                    <div class="form-group">
                        <label>TeamCode:</label>
                        <input type="text" class="form-control" v-model="item.teamCode"/>
                    </div>
                    <div class="form-group">
                        <label>skills:</label>
                        <input type="text" class="form-control" v-model="item.skills"/>
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
import EmployeeService from "../../services/employee.service";
export default {
  components: {
  },
  data() {
      return {
          item: {}
      }
  },
  methods: {
      addEmployee() {
          EmployeeService.createEmployee(this.item).then(
              (response) => {
                  this.content = response.data;
                  alert('Employee created successfully!');
                  },
                  (error) => {
                      this.content =(error.response && error.response.data && error.response.data.message) || 
                        error.message || error.toString();
                    }
                );
        }
    }
}
</script>