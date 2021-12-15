<template>
  <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h3>Edit Employee Deatils</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateItem">
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
                        <input type="submit" class="btn btn-primary" value="Update Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import EmployeeService from "../../services/employee.service";

export default{
        data(){
            return{
                item:{}
            }
        },

        created: function(){
            this.getOne();
        },

        methods: {
  
             getOne(name)
            {
              EmployeeService.getOneEmployee(name).then((response) => {
                  this.items = response.data;
              });
            },

            updateItem()
            {
                EmployeeService.updateEmployee(this.item).then(() => {
                  this.$router.push({name: 'ShowEmployee'});
                });
            }
        }
    }
</script>