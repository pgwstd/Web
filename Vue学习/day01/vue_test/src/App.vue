<template>
  <div>
      <img alt="Vue logo" src="./assets/logo.png">
    <School/>
    <Student/>
  </div>
</template>

<script>
import School from './components/MySchool.vue'
import Student from './components/MyStudent.vue'

export default {
    name: 'App',
    components:{
        School,
        Student
    }
}

</script>
