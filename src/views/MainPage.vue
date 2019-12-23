<template>
  <div class="table-wrapper">
    <table>
      <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Phone</th>
      </tr>
      <tr v-for="user in userList" :key="user.id">
        <th>{{ user.id }}</th>
        <th>{{ user.firstname }}</th>
        <th>{{ user.lastname }}</th>
        <th>{{ user.email }}</th>
        <th>{{ user.age }}</th>
        <th>{{ user.phone }}</th>
      </tr>
    </table>

    <router-link class="add-button" :to="{ name: 'UserPage' }">Create User</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'MainPage',
  computed: {
    ...mapState(["userList"])
  }
};
</script>

<style lang="scss">
.table-wrapper {

  table {
    padding: 2rem;
    font-size: 1.5rem;
    width: 100%;

    th, td {
      border: 1px solid black;
      padding: 1rem;
      margin: 0;
    }
  }
}

.add-button {
  font-size: 1.2rem;
  padding: .5rem 5rem;
  background-color: #42b983;
  border-radius: 2.2rem;
  border: none;
  font-weight: bold;
  color: white;
  text-decoration: none;
}
</style>
