<template>
    <div>
        <h1>Items</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>Name</td>
                <td>Start Date</td>
                <td>End Date</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="item in items" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.startDate }}</td>
                    <td>{{ item.endDate }}</td>
                    <td><router-link :to="{name: 'Edit', params: { name: item.name }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button v-on:click="deleteItem(item.name)" class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

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
              let uri = 'http://localhost:8080/api/team/findAll';
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
              });
            },
            deleteItem(name)
            {
              let uri = 'http://localhost:8080/api/team/delete/'+name;
              this.items.splice(name, 1);
              this.axios.get(uri);
            }
        }
    }
</script>



