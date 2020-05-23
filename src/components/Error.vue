<template>
  <div class="">
    <b-container>
      <b-modal
        v-model="showSuccess"
        hide-backdrop
        hide-header-close
        hide-footer
        hide-header
      >
        <b-alert show fade variant="success" class="mb-n3 mt-n3 mr-n3 ml-n3">{{
          successMessage
        }}</b-alert>
      </b-modal>

      <b-modal
        v-model="showError"
        hide-backdrop
        hide-header-close
        hide-footer
        hide-header
      >
        <b-alert show fade variant="danger" class="mb-n3 mt-n3 mr-n3 ml-n3">{{
          errorMessage
        }}</b-alert>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    hideError() {
      let item = {
        errorMessage: null,
        showError: false,
      };
      this.$store.commit("setErrorAlert", item);
    },
    hideSuccess() {
      let item = {
        successMessage: null,
        showSuccess: false,
      };
      this.$store.commit("setSuccessAlert", item);
    },
  },
  watch: {
    showError() {
      setInterval(() => {
        this.hideError();
      }, 5000);
    },
    showSuccess() {
      setInterval(() => {
        this.hideSuccess();
      }, 5000);
    },
  },
  computed: {
    errorMessage() {
      return this.$store.state.errorAlertMessage;
    },
    showError() {
      return this.$store.state.showErrrorAlert;
    },
    successMessage() {
      return this.$store.state.successAlertMessage;
    },
    showSuccess() {
      return this.$store.state.showSuccessAlert;
    },
  },
};
</script>

<style scooped></style>
