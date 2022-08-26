<template>
<nav class="navbar navbar-expand-lg navbar-light shadow-sm" id="mainNav">
    <div class="container-fluid px-4 px-lg-5">
        <a class="navbar-brand" href="index.html"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav ms-auto py-4 py-lg-0">
                <li class="nav-item"><router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/time-table">Home</router-link></li>
                <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="about.html">Admin</a></li>
            </ul>
        </div>
    </div>
 </nav>
  <div class="container-fluid box-top">
    <div class="row justify-content-center">
      <!-- side nav time table -->
      <div class="col-md-11">
        <div class="text-secondary">Select The course you want to Generate</div>
        <div class="mt-4">
           <table class="table table-borderless">
            <thead class="thead-light">
              <tr>
                <th>#</th>
                <th>Department</th>
                <th>Name</th>
                <th>Course</th>
                <th>Semester</th>
                <th>Day</th>
                <th>level</th>
                <th>venue</th>
                <th>time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody class="p-2">
              <tr class="card-header mb-2" v-for="(table,i) in time_table" :key="i">
                <td><input type="checkbox" :value="i"  @change="checkTable(table)" class=""></td>
                <td>{{table.department}}</td>
                <td>Doe</td>
                <td>
                  <div class="d-flex">
                    E.E.D <br>
                    Entrepreneurship
                  </div>
                </td>
                <td>
                  Seconde Semester
                </td>
                <td>
                  Tuesday
                </td>
                <td>
                  300
                </td>
                <td>
                  200 cap
                </td>
                <td>
                  10:30am-12:30
                </td>
                <td>
                  <button class="btn btn-primary"> <i class="fa fa-edit"></i></button>
                  <button class="btn btn-danger ml-2"> <i class="fa fa-trash"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
     <button class="btn btn-primary shadow" @click="generate_Time">Generate Time Table</button>
      </div>
    </div>
  </div>
</template>

<script>
import './time.css'
import dommy from './dommy'
export default {
  name: 'HelloWorld',
  data:()=>({
      time_table:'',
      table:'',
      timeArray : []
  }),

  methods:{
      checkTable(data){
        this.timeArray.push(data)
        console.log(this.timeArray)

      },
      generate_Time(){
        this.$router.push('/table-sheet')
      }
  },

  created(){
    this.time_table = dommy
    console.log(dommy)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box-top{
    margin-top: 100px;
  }
  
</style>
