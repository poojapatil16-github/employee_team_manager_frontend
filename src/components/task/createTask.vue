<template>
  <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h3>Add Task</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addTask">
                    <div class="form-group">
                        <label>Code:</label>
                        <input type="text" class="form-control" v-model="item.code"/>
                    </div>
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="text" class="form-control" v-model="item.name"/>
                    </div>
                    <div class="form-group">
                        <label>Description:</label>
                        <input type="text" class="form-control" v-model="item.description"/>
                    </div>
                    <div class="form-group">
                        <label>Project:</label>
                        <input type="text" class="form-control" v-model="item.project"/>
                    </div>
                   
                   <div class="form-group">
                        <label class="mr-3">Log:</label>
                        <button class="btn btn-secondary" aria-controls="exampleModal" @click="exampleModal = true">
                    Add Logs</button>
                    </div>
                    

                    <MDBModal
                        id="exampleModal"
                        tabindex="-1"
                        labelledby="exampleModalLabel"
                        v-model="exampleModal">
                    
                        <MDBModalHeader>
                            <MDBModalTitle id="exampleModalLabel"> Add Logs here </MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <div class="form-group">
                                <label>employee_code:</label>
                                <input type="text" class="form-control" v-model="item.employee_code"/>
                            </div>
                            <div class="form-group">
                                <label>logedTime:</label>
                                <input type="text" class="form-control" v-model="item.logedTime"/>
                            </div>
                            <div class="form-group">
                                <label>logStartDate:</label>
                                <input type="Date" class="form-control" v-model="item.logStartDate"/>
                            </div>
                        </MDBModalBody>
                        <MDBModalFooter>
                          <button class="btn btn-secondary" >Add</button>
                        </MDBModalFooter>
                    </MDBModal>

                    <div class="form-group mt-2">
                        <input type="submit" class="btn btn-primary" value="Create"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import TaskService from "../../services/task.service";
import {
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';
export default {
  components: {
            MDBModal,
      MDBModalHeader,
      MDBModalTitle,
      MDBModalBody,
      MDBModalFooter,
      
  },
      setup() {
      const exampleModal = ref(false);

      return {
        exampleModal,
      };
    },
  data() {
      return {
          item: {}
      }
  },
  methods: {
      addTask() {
          console.log("Inside data1");
          TaskService.createTask(this.item).then(
              (response) => {
                  this.content = response.data;
                  console.log("response data"+this.content);
                  },
                  (error) => {
                      this.content =(error.response && error.response.data && error.response.data.message) || 
                        error.message || error.toString();
                    }
                );
        }
    }
}
</script>