<template>
  <header></header>

  <main>
    <table>
      <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Phone</th>
      </tr>
      <tr v-for="user in userList">
        <th>{{user.id}}</th>
        <th>{{user.firstname}}</th>
        <th>{{user.lastname}}</th>
        <th>{{user.email}}</th>
        <th>{{user.age}}</th>
        <th>{{user.phone}}</th>
      </tr>
    </table>
  </main>

  <footer></footer>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['userList']),
  }
}
</script>

<style lang="css">
</style>
