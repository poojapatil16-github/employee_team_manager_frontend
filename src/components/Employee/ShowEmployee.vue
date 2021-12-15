<template>
    <div>
        <h1 class="mt-5">Employees</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>Name</td>
                <td>join Date</td>
                <td>TeamCode</td>
                <td>skills</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="item in items" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.joinDate }}</td>
                    <td>{{ item.teamCode }}</td>
                    <td>{{ item.skills }}</td>
                    <td><router-link :to="{name: 'UpdateEmployee', params: { name: item.name }}" class="btn btn-primary mr-3">Edit</router-link>
                    <button v-on:click="deleteItem(item.name)" class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import EmployeeService from "../../services/employee.service";

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
              EmployeeService.getEmployee().then((response) => {
                  this.items = response.data;
              });
            },
            deleteItem(name)
            {
              EmployeeService.deleteEmployee(name).then((response) => {
                  this.items = response.data;
                  this.fetchItems();
              });
            }
        }
    }
</script>



