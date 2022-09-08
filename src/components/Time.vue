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
                <li class="nav-item"><router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</router-link></li>
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
        <div class="clear-fix">
            <div class="float-right">
                <div class="input-group input-group-sm mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm"> <i class="fa fa-search text-secondary"></i> </span>
                  </div>
                  <input type="text" v-model="input" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>

            </div>
        </div>
        <div class="mt-4">
           <table class="table table-borderless">
            <thead class="thead-light">
              <tr>
                <th>#</th>
                <th>Department</th>
                <th>Name</th>
                <th>Course</th>
                <th>Date</th>
                <th>Day</th>
                <th>Semester</th>
                <th>level</th>
                <th>venue</th>
                <th>time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody class="p-2">
              <tr class="card-header mb-2" v-for="(table, i) in _getTables" :key="i">
                <td><input type="checkbox" :value="i"  @change="checkTable(table)" class=""></td>
                <td>{{table.department}}</td>
                <td>{{table.nameoflect}}</td>
                <td>
                  <div class="d-flex">
                    {{table.course}} <br>
                    {{table.course_code}}
                  </div>
                </td>
                <td>
                  {{table.date}}
                </td>
                <td>
                  {{
                      new Date(table.date).toLocaleString('en-us', {weekday: 'long'})
                  }}
                  </td>
                <td>
                  {{table.semester}}
                </td>
                <td>
                  {{table.level}}
                </td>
                <td>
                  {{table.venue}}
                </td>
                <td>
                  {{table.start_time}} - {{table.end_time}}
                </td>
                <td>
                  <button class="btn btn-primary"> <i class="fa fa-edit"></i></button>
                  <button class="btn btn-danger ml-2" @click="_delete(table._id)"> <i class="fa fa-trash"></i></button>
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
// import dommy from './dommy'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data:()=>({
      time_table:'',
      table:'',
      timeArray : [],
      input:'',
      message:''
  }),

  computed:{
      _getTables(){
        let filtering = new RegExp(this.input, 'i');
       
        return this.time_table.filter(each => each.level.match(filtering) || each.course.match(filtering)); 
      }
  },
  methods:{

    _fetchTimeTable(){
          axios.get('tables').then(res=>{
            this.time_table = res.data.response
              console.log(res.data)
          }).catch(err =>{
              console.log(err)
          })
    },
    checkTable(data){
      this.timeArray.push(data)
      // console.log(this.timeArray)
    },
    _delete(id){
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        preConfirm:()=>{
          axios.delete(`remove_user/${id}`).then(res=>{
            console.log(res.data)
            if(res.data.resp == true){
                this._fetchTimeTable();
            }
          })
        }
      }).then((result) => {
        if (result.isConfirmed) {
          this._fetchTimeTable()
          this.$swal.fire(
            'Deleted!',
            'Data has been deleted.',
            'success',
          )
        }
      })
      
      // console.log(id)
    },
    generate_Time(){
        localStorage.setItem('save_tables', JSON.stringify(this.timeArray));
        this.$router.push('/table-sheet')
    }
  },

  created(){
    this._fetchTimeTable()
  },

  mounted() {
    this._fetchTimeTable()
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box-top{
    margin-top: 100px;
  }
  
</style>
