<template>
  <div>
    <b-table :items="items" :fields="fields" stacked="md" show-empty small>
      <template #cell(actions)="row">
        <b-button variant="danger" size="sm" @click="borrarUser(row.item.id)" class="mr-1">
          X
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";


export default {
  name: 'Tabla',
  props: {
    items: Array,
    fields: Array,
  },
  methods: {
    ...mapActions(["deleteUser","getUsers"]),
    borrarUser(item) {
      this.deleteUser(item).then((resp) => {
        alert(resp)
        this.getUsers();
      });
    },
  },
}
</script>

<style scoped>

</style>
