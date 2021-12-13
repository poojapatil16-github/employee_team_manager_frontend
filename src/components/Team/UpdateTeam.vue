<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateItem">
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
                        <input type="submit" class="btn btn-primary" value="Update Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default{
        data(){
            return{
                item:{}
            }
        },

        created: function(){
            this.getItem();
        },

        methods: {
            getItem()
            {
              let uri = 'http://localhost:8080/api/team/find/' + this.$route.params.name;
                this.axios.get(uri).then((response) => {
                    this.item = response.data;
                });
            },

            updateItem()
            {
              let uri = 'http://localhost:8080/api/team/update/' + this.$route.params.name;
                this.axios.post(uri, this.item).then(() => {
                  this.$router.push({name: 'Index'});
                });
            }
        }
    }
</script>