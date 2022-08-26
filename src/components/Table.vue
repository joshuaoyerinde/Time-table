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
                <th>Name</th>
                <th>Course</th>
                <th>Semester</th>
                <th>date</th>
                <th>level</th>
                <th>venue</th>
                <th>time</th>
              </tr>
            </thead>
            <tbody class="p-2">
              <tr class="card-header mb-2">
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
                
              </tr>
              <tr class="card-header mb-2">
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
                
              </tr>
            </tbody>
          </table>
        </div>
     <button class="btn btn-primary shadow" @click="generate_Time">Print Time Table</button>
      </div>
    </div>
   </div>
</template>

<script>
export default {
    data:()=>({

    })
}
</script>

<style lang="css">
    
</style>