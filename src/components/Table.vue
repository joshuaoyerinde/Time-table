<template>
   <div class="container mt-5">
       <div class="row justify-content-center">
      <!-- side nav time table -->
      <div class="col-md-11">
        <div class="text-secondary">Second semester Time table</div>
        <div class="mt-4">
           <table class="table table-borderless">
            <thead class="thead-light">
              <tr>
                <th>Tutors's Name</th>
                <th>Course</th>
                <th>Semester</th>
                <th>Date</th>
                <th>Day</th>
                <th>Level</th>
                <th>Venue</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody class="p-2">
              <tr class="card-header mb-2" v-for="data in tables" :key="data._id">
                <td>{{data.nameoflect}}</td>
                <td>
                   <div class="d-flex">
                    {{data.course}} <br>
                    {{data.course_code}}
                  </div>
                </td>
                <td>
                   {{data.semester}}
                </td>
                <td>
                  {{data.date}}
                </td>
                <td>{{new Date(data.date).toLocaleString('en-us', {weekday: 'short'})}}</td>
                <td>
                  {{data.level}}
                </td>
                <td>
                  {{data.venue}}
                </td>
                <td>
                  {{data.start_time}} - {{data.end_time}}
                </td>
                
              </tr>
             
            </tbody>
          </table>
        </div>
     <button class="btn btn-primary shadow d-print-none" @click="generate_Time">Print Time Table</button>
      </div>
    </div>
   </div>
</template>

<script>
export default {
    data:()=>({
        tables:[]
    }),

    methods:{
        getTables(){
          let get_timetable = JSON.parse(localStorage.getItem('save_tables'))
          this.tables = get_timetable
          console.log(this.tables)
        },
        generate_Time(){
          window.print()
        }
    },

    created(){
      this.getTables();
    },

    mounted(){
      this.getTables();
    }
}
</script>

<style lang="css">
    
</style>