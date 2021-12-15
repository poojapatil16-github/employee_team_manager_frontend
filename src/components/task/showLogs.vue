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
                 <template v-for="item in items" v-bind:key="item.code">
                    <tr v-for="newElement in item.logs" v-bind:key="newElement.employee_code">
                    <td>{{ newElement.employee_code }}</td>
                    <td>{{ newElement.logedTime }}</td>
                    <td>{{ newElement.logStartDate }}</td>
                    
                </tr>
                </template>
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
            fetchItems(code)
            {
              TaskService.getOneTask(code).then((response) => {
                  this.items = response.data;
                  this.$router.push({code: 'showTask'});
                  console.log("response logs"+this.items)
              });
            },
        }
    }
</script>



