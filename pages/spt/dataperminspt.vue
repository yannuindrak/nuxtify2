<template>
  <div id="app">
    <v-app>
      <v-content class="container align-center px-1">
        <h2 class="font-weight-light mb-2">Vuetify CRUD Example</h2>
        <v-card>
          <v-data-table :headers="headers" :items="items"> </v-data-table>
        </v-card>
      </v-content>
    </v-app>
  </div>
</template>

<script>
definePageMeta({
  layout: "menu",
});

//   data: () => ({
//     userSimRS: "",
//     dataUser: [],
//   }),
//   methods: {
//     async getDataUser() {
//       await fetch(`/api/user`)
//         .then((response) => response.json())
//         .then((userSimRS) => {
//           this.dataUser = userSimRS;
//         });
//     },
//   },
//   created() {
//     this.getDataUser();
//   },
// };

//   data () {
//     userSimRS: "",
//     dataUser: [],
//      {
//         headers: [
//             { text: 'NIPB', value: 'nipb' },
//             { text: 'Nama Pegawai', value: 'nama_pegawai' },
//             { text: 'Departemen', value: 'departemen', sortable: false, width:"100" },
//             { text: 'Roles', value: 'roles', name:'roles', width:"180" },
//             { text: 'Action', value: 'actions', sortable: false },
//         ],
//         items: [],
//         dialog: false, // used to toggle the dialog
//         editedItem: {} // empty holder for create/update ops
//     }
//   },
// }),
// mounted() {
//     this.loadItems()
//   },
//   methods: {
//     loadItems() {
//         this.items = []
//         axios.get(`/api/user`,
//             { headers: { Authorization: "Bearer " + apiToken }})
//         .then((response) => {
//             // load the API response into items for datatable
//             this.items = response.data.records.map((item)=>{
//                 return {
//                     id: item.id,
//                     ...item.fields
//                 }
//             })
//         }).catch((error) => {
//             console.log(error)
//         })
//     },
</script>
