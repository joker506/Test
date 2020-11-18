<template>
  <div class="app">
    <b-form-group label="Your Country:">
      <b-form-input
        v-model="country"
        required
        placeholder="Enter country"
      ></b-form-input>
    </b-form-group>
    <b-btn variant="primary" @click="setParamCountry">Save</b-btn>
    <Modal v-if="attention" />
  </div>
</template>

<script>
import Modal from "@/pages/Modal";
import { mapState } from "vuex";
import { state } from "~/store";
export default {
  name: "PagePrifile",
  components: {
    Modal
  },

  data() {
    return {
      country: "USA"
    };
  },
  methods: {
    setParamCountry() {
      this.$store.commit("country/SET_PARAM_COUNTRY", this.country);
    }
  },

  computed: {
    ...mapState({
      count: state => state.country.Country
    }),
    attention() {}
  }
};
</script>
