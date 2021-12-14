<template>
    <div class="container mt-5">
        <h1>All Teams Details</h1>

        <table class="table mt-5">
            <thead class="thead-dark">
            <tr>
                <th>Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Actions</th>
            </tr>
            </thead>

            <tbody>
                <tr v-for="item in items" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.startDate }}</td>
                    <td>{{ item.endDate }}</td>
                    <td><router-link :to="{name: 'UpdateTeam', params: { name: item.name }}" class="btn btn-primary mr-3">Edit</router-link>
                    <button v-on:click="deleteItem(item.name)" class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import TeamService from "../../services/team.service";

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
              TeamService.getTeams().then((response) => {
                  this.items = response.data;
              });
            },
            deleteItem(name)
            {
              TeamService.deleteTeams(name).then((response) => {
                  this.items = response.data;
                  this.fetchItems();
                  console.log("deleted");
              });
            }
        }
    }
</script>



