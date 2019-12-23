<template>
  <div class="info-wrapper">
    <router-link class="back-link" :to="{ name: 'MainPage', params: {} }">⇦ Back</router-link>

    <div class="info-field">
      <h4 v-if="selectedUser">ID: { user.id }</h4>
      <h4 v-else>This is a new user!</h4>

      <b>First Name</b>
      <input v-model="firstName" class="input" type="text" name="" value="">

      <b>Last Name</b>
      <input v-model="lastName" class="input" type="text" name="" value="">

      <b>Email</b>
      <input v-model="email" class="input" type="text" name="" value="">

      <b>Phone Number</b>
      <input v-model="phone" class="input" type="text" name="" value="">

    </div>

    <div class="button-wrapper">
      <button type="button" class="create-button" @click="createUser">Create</button>
    </div>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { CREATE_USER } from '@/store/mutationtypes';

export default {
  name: 'EditUserPage',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };
  },
  computed: {
    ...mapState(['selectedUser']),
  },
  methods: {
    ...mapMutations([CREATE_USER]),
    createUser(){
      console.log('Create User:', this.firstName, this.lastName, this.email, this.phone);
    }
  }
}
</script>

<style lang="scss">
.info-wrapper {
  margin: 2rem;
  font-size: 1.2rem;
  text-align: left;
}

.back-link {
  font-weight: bold;
  text-decoration: none;
}

.info-field {
  flex-direction: column;
  display: flex;

  b {
    margin-top: 1rem;
    margin-bottom: .5rem;
    color: #0099ff;
  }

  .input {
    font-size: 1.5rem;
    color: gray;
  }
}

.button-wrapper {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .create-button {
    font-size: 1.2rem;
    padding: .5rem 5rem;
    background-color: #42b983;
    border-radius: 2rem;
    font-weight: bold;
    color: white;
  }
}

</style>
