<template>
    <div>
        <h1 class="mt-5">Tasks</h1>

        <table class="table table-hover mt-5">
            <thead>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Description</th>
                <th>Project</th>
                <th>Logs</th>
                <th>Actions</th>
            </tr>
            </thead>

            <tbody>
                <tr v-for="item in items" :key="item.code">
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.project }}</td>
                    <td><button class="btn btn-secondary" aria-controls="exampleModal" @click="exampleModal = true">Logs</button></td>

                    <MDBModal
                        id="exampleModal"
                        tabindex="-1"
                        labelledby="exampleModalLabel"
                        v-model="exampleModal">
                
                        <MDBModalBody>
                            <div>
                                <h1>Log</h1>
                                <table class="table table-hover mt-5">
                                    <thead>
                                    <tr>
                                        <th>employee_code</th>
                                        <th>logedTime</th>
                                        <th>logStartDate</th>
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
                        </MDBModalBody>
                    </MDBModal>

                    <td><router-link :to="{name: 'UpdateTask', params: { code: item.code }}" class="btn btn-primary mr-3">Edit</router-link>
                    <button v-on:click="deleteItem(item.code)" class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import TaskService from "../../services/task.service";
import {
    MDBModal,
    MDBModalBody,
    
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';

    export default {
         components: {
            MDBModal,
      MDBModalBody,
      
  },
      setup() {
      const exampleModal = ref(false);

      return {
        exampleModal,
      };
    },
 
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
              });
            },
            deleteItem(code)
            {
              TaskService.deleteTask(code).then((response) => {
                  this.items = response.data;
                  this.fetchItems();
              });
            },
            fetchOneItems(code)
            {
              TaskService.getOneTask(code).then((response) => {
                  this.items = response.data;
              });
            },
        }
    }
</script>



