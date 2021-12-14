<template>
    <div>
        <h1 class="mt-5">Log</h1>

        <table class="table table-hover mt-5">
            <thead>
            <tr>
                <td>employee_code</td>
                <td>logedTime</td>
                <td>logStartDate</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="item in items" :key="item.code">
                    <td>{{ item.logs.employee_code }}</td>
                    <td>{{ item.logs.logedTime }}</td>
                    <td>{{ item.logs.logStartDate }}</td>
                    
                </tr>
            </tbody>
        </table>
        
    </div>


</template>

<script>
import TaskService from "../../services/task.service";

    export default {
        data(){
            return{
                items: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
              TaskService.getOneTask(this.item).then((response) => {
                  this.items = response.data;
                  this.$router.push({name: 'showTask'});
                  console.log("response data"+this.items)
              });
            },
        }
    }
</script>



