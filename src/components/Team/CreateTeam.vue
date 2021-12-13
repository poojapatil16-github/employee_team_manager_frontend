<template>
  <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h3>Add Team</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addTeam">
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
                        <input type="submit" class="btn btn-primary" value="Create"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
  },
  data() {
      return {
          item: {}
      }
  },
  methods: {
      addTeam() {
           let uri = 'http://localhost:8080/api/team/create';
            this.axios.post(uri, this.item).then((response) => {
                console.log(response.data)
            });
        }
    }
}
</script>