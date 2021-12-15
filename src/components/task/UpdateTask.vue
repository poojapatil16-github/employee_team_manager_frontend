<template>
  <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h3>Edit Task Details</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateItem">
                     <div class="form-group">
                        <label>Code:</label>
                        <input type="text" class="form-control" v-model="item.code"/>
                    </div>
                    <div class="form-group">
                        <label>Employee_code:</label>
                        <input type="text" class="form-control" v-model="item.employee_code"/>
                    </div>
                    <div class="form-group">
                        <label>LogedTime:</label>
                        <input type="text" class="form-control" v-model="item.logedTime"/>
                    </div>
                    <div class="form-group">
                        <label>LogStartDate:</label>
                        <input type="Date" class="form-control" v-model="item.logStartDate"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Update"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import TaskService from "../../services/task.service";

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
  
             getOne(code)
            {
              TaskService.getOneTask(code).then((response) => {
                  this.items = response.data;
              });
            },

            updateItem()
            {
                TaskService.updateTask(this.item).then(() => {
                  this.$router.push({name: 'showTask'});
                });
            }
        }
    }
</script>