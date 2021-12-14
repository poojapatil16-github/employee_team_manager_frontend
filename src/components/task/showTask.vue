<template>
    <div>
        <h1 class="mt-5">Tasks</h1>

        <table class="table table-hover mt-5">
            <thead>
            <tr>
                <td>Code</td>
                <td>Name</td>
                <td>Description</td>
                <td>Project</td>
                <td>Logs</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="item in items" :key="item.code">
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.project }}</td>
                    <td><router-link :to="{name: 'showLogs', params: { code: item.code }}" class="btn btn-primary mr-3">Logs</router-link></td>
                    <td><router-link :to="{name: 'UpdateTask', params: { name: item.name }}" class="btn btn-primary mr-3">Edit</router-link>
                    <button v-on:click="deleteItem(item.code)" class="btn btn-danger">Delete</button></td>
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
              TaskService.getTask().then((response) => {
                  this.items = response.data;
                  console.log("response data"+this.items)
              });
            },
            deleteItem(code)
            {
              console.log("delete Emp in emp",code);
              TaskService.deleteTask(code).then((response) => {
                  this.items = response.data;
                  this.fetchItems();
                  console.log("deleted");
              });
            }
        }
    }
</script>



