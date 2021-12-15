<template>
  <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h3>Edit Team Details</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateTeam">
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
                        <input type="submit" class="btn btn-primary" value="Update"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import TeamService from "../../services/team.service";

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
              TeamService.getOneTeams(name).then((response) => {
                  this.items = response.data;
                  console.log("get one");
              });
            },

            updateTeam()
            {
                TeamService.updateTeam(this.item).then(() => {
                  this.$router.push({name: 'ShowTeam'});
                });
            }
        }
    }
</script>