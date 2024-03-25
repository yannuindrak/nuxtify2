<template>
  <h3>Data User SIM RS</h3>
  <v-data-table items-per-page="itemsPerPage" v-model="selected">
    <thead>
      <tr>
        <th class="text-left">Nipb</th>
        <th class="text-left">Nama Pegawai</th>
        <th class="text-left">Instalasi</th>
        <th class="text-left">Roles</th>
        <th class="text-left">Action</th>
        <th class="text-left"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in dataUser" :key="item.nip">
        <td>{{ item.nipb }}</td>
        <td>{{ item.nama_pegawai }}</td>
        <td>{{ item.departemen }}</td>
        <td>{{ item.roles }}</td>
        <td><v-btn>Edit</v-btn></td>
        <td><v-btn>Delete</v-btn></td>
      </tr>
    </tbody>
  </v-data-table>
</template>

<script>
definePageMeta({
  layout: "menu",
});

export default {
  data: () => ({
    itemsPerPage: 5,
    userSimRS: "",
    dataUser: [],
  }),
  methods: {
    async getDataUser() {
      await fetch(`/api/user`)
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
</script>
