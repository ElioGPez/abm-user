<template>
  <div class="container">
      <Tabla :items="items" :fields="fields"/>
  </div>

</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import Tabla from "../components/Tabla.vue";


export default {
  name: "List",
  components: {
    Tabla
  },
  data() {
    return {
      fields: [
        { key: "id", label: "Id" },
        { key: "name", label: "Name" },
        { key: "actions", label: "Actions" },
      ],
    };
  },
  methods: {
    ...mapActions(["getUsers"]),
  },
  computed: {
    ...mapGetters({
      items: "usuarios",
    }),  
  },
  mounted() {
    this.getUsers().then((resp) => {
      //this.items = resp.data;
    });
  },
};
</script>
