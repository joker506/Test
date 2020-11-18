<template>
  <div class="app">
    <b-form-group label="Your Name:">
      <b-form-input
        v-model="users.name"
        required
        placeholder="Enter name"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Your Familia:">
      <b-form-input
        v-model="users.surname"
        required
        placeholder="Enter Familia"
      ></b-form-input>
    </b-form-group>
    <b-btn variant="primary" @click="setParamUser">Save</b-btn>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "PageUser",
  data() {
    return {
      users: { name: "", surname: "" }
    };
  },
  methods: {
    setParamUser() {
      this.$store.commit("user/SET_PARAM_USER", this.users);
    }
  }
};
</script>
