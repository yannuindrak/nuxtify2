<template>
  <v-card class="mx-auto">
    <v-card-title>DATA USER SIMRS</v-card-title>
    <v-data-table :headers="headers" :items="dataUser" :items-per-page="8">
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editUser(item.nip)"
          >mdi-pencil</v-icon
        >
        <v-icon small @click="deleteUser(item.nip)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    userSimRS: "",
    dataUser: [],
    headers: [
      { title: "Nama", value: "nama_pegawai" },
      { title: "Departemen", value: "departemen" },
    ],
  }),
  methods: {
    async getDataUser() {
      await fetch(`/api/user/userdetail`)
        .then((response) => response.json())
        .then((userSimRS) => {
          this.dataUser = userSimRS;
        });
    },
  },
  created() {
    this.getDataUser();
  },
};
definePageMeta({
  layout: "menu",
});
</script>
