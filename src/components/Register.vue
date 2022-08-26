<template>
<!-- nav -->
<nav class="navbar navbar-expand-lg navbar-light shadow-sm" id="mainNav">
    <div class="container-fluid px-4 px-lg-5">
        <a class="navbar-brand" href="index.html"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav ms-auto py-4 py-lg-0">
                <li class="nav-item"><router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/dash">Home</router-link></li>
                <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="about.html">Log Out</a></li>
            </ul>
        </div>
    </div>
 </nav>
    <div class="container-fluid box-top">
        <!--  -->
        <div class="row px-5 py-4">
            <!-- <div class="col-md-4 col-sm-12">
                
            </div> -->
            <div class="col-4">
                <div class="list-group" id="list-tab" role="tablist">
                <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab">Home</a>
                <router-link class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" to="/time" role="tab" aria-controls="profile">View Time-Tables</router-link>
                <a class="list-group-item list-group-item-action disabled" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Departments</a>
                <a class="list-group-item list-group-item-action disabled" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
                </div>
            </div>
            <div class="col-md-8">
                <!-- card -->
                <div class="card">
                    <div class="card-body">
                    <div class="card-title">Register Time Table here</div>
                        <!--accordion  -->
                        <div class="accordion shadow-sm" id="accordionExample">
                            <div class="card border-1">
                                <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <span class="float-right"><i class='fas fa-plus-circle' style='font-size:20px'></i> </span>
                                       Add Course And the Lecturer In charge
                                    </button>
                                </h2>
                                </div>

                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <div class="row">
                                           <div class="col-md-6"><input v-model="time_table.tutors_name" type="text" class="form-control" placeholder="Tutor's Name"></div>
                                           <div class="col-md-6"><input v-model="time_table.course" type="text" class="form-control mb-2" placeholder="Course Title"></div>
                                           <div class="col-md-6"><input  v-model="time_table.semester" type="text" class="form-control" placeholder="Semester"></div>
                                           
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <!--  -->
                            <div class="card border-1">
                                <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                     <span class="float-right"><i class='fas fa-plus-circle' style='font-size:20px'></i> </span>
                                        Add the Department, Course code and the Level
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div class="row">
                                           <div class="col-md-4"><input v-model="time_table.department" type="text" class="form-control" placeholder="Department"></div>
                                           <div class="col-md-4"><input v-model="time_table.level" type="text" class="form-control mb-2" placeholder="Level"></div>
                                           <div class="col-md-4"><input v-model="time_table.course_code" type="text" class="form-control mb-2" placeholder="Course Code"></div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <!--  -->
                            <div class="card border-1">
                                <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                     <span class="float-right"><i class='fas fa-plus-circle' style='font-size:20px'></i> </span>
                                        Add Time And Vunue
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div class="row">
                                        <div class="col-md-6">
                                            <label for="">Start Time</label>
                                            <input v-model="time_table.start_time" type="time" class="form-control mb-2" placeholder="Time">
                                        </div>
                                        <div class="col-md-6">
                                            <label for="">End Time</label>
                                            <input v-model="time_table.end_time" type="time" class="form-control mb-2" placeholder="Time">
                                        </div>
                                        <div class="col-md-6">
                                            <label for="">Venue</label>
                                            <input type="text" v-model="time_table.venue" class="form-control mb-2" placeholder="Venue">
                                        </div>
                                        <div class="col-md-6">
                                            <label for="">Date</label>
                                            <input type="date" v-model="time_table.date" class="form-control" placeholder="Date">
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button @click="regiterTimeTabsle" class="btn btn-primary mt-2 px-5 py-2 shadow-sm">Register</button>
                        <!--col md8  -->

                    </div>
                </div>
                <!-- card -->
            </div>
            <!--  -->

        </div>
    </div>
</template>

<script>
import './time.css'
import axios from 'axios'
export default {
    data() {
        return {
            time_table:{
                tutors_name:"",
                course:"",
                semester:"",
                department:"",
                level:"",
                course_code:"",
                start_time:"",
                end_time:"",
                venue:"",
                date:"",
            }
        }
    },
    methods:{
        //time table function
        regiterTimeTabsle(){
            for(let value in this.time_table){
                if (this.time_table[value] == "") {
                    console.log(`${value} is empty`)
                }else{
                    console.log("niceone")
                      axios.get('http://localhost:5000/home').then(res => {
                        console.log(res.data)
                    })
                }
               
            }
          
        }
        // 
    }
}
</script>

<style lang="css" scoped>
    .box-top{
        margin-top: 100px;
    }
</style>