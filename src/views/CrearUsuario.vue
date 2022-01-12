<template>
  <div class="container">
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email"
        label-for="input-1"

      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="ejemplo@gmail.com"
          required
        ></b-form-input>
      </b-form-group>
<br>
      <b-form-group id="input-group-2" label="Nombre" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Fulanito"
          required
        ></b-form-input>
      </b-form-group><br>
      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder=""
          required
          type="password"
        ></b-form-input>
      </b-form-group>
        <br>
      <b-button type="submit" variant="primary">Crear</b-button>
    </b-form>
  </div>  
</template>

<script>
import { mapActions } from "vuex";

  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          password: ''
        },
      }
    },
    methods: {
    ...mapActions(["createUser"]),
      onSubmit(event) {
        this.createUser(this.form).then((resp) => {
            this.$router.push('/')
    });
      },

    }
  }
</script>