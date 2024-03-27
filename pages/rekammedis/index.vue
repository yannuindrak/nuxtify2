<template>
  <v-card class="mx-auto">
    <v-data-table :headers="headers" :items="dataUser" :items-per-page="8">
      <!--judul tabel dan button new item di pojok kanan-->
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Data User SIM RS</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ props }">
              <v-btn class="mb-2" color="primary" dark v-bind="props">
                TAMBAH DATA
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field
                        v-model="editedItem.name"
                        label="NIP"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field
                        v-model="editedItem.calories"
                        label="Nama Pegawai"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field
                        v-model="editedItem.fat"
                        label="NIP / NIPTTK"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field
                        v-model="editedItem.carbs"
                        label="Departemen"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field
                        v-model="editedItem.protein"
                        label="Aktif"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="close">
                  BATAL
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="save">
                  SIMPAN
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <!--end of v-slot top-->

      <!--actions kolom edit dan delete -->
      <template v-slot:item.actions="{ item }">
        <v-icon class="me-2" size="small" @click="detaillUser(item)">
          mdi-account-details
        </v-icon>
        <v-icon class="me-2" size="small" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon size="small" @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <!--end of actions-->
    </v-data-table>
  </v-card>
</template>
<!-- <script>
  export default {
    data: () => ({
      userDetail:"",
      dataUserdetail:[],
  
  
      userSimRS: "",
      dataUser: [],
      headers: [
        { title: "NIP", value: "nip", sortable: true },
        { title: "Nama Pegawai", value: "nama_pegawai", sortable: true },
        { title: "Role", value: "rolename", sortable: true},
        { title: "Nama Unit", value: "nama_unit", sortable: true },
        { title: "Nama Grup Unit", value: "nama_grupunit", sortable: true },
        { title: "Actions", key: 'actions', sortable: false },
      ],
    }),
    methods: {
      async getDataUser() {
        await fetch('/api/user/userdata')
          .then((response) => response.json())
          .then((userSimRS) => {
            this.dataUser = userSimRS;
          });
      },
  
      async getDataUserDetail() {
        await fetch('/api/user')
          .then((response) => response.json())
          .then((userDetail) => {
            this.dataUserdetail = userDetail;
          });
      },
      
    },
    created() {
      this.getDataUser();
    },
  };
  
  </script> -->

<script setup>
import { ref, onMounted } from "vue";

const userDetail = ref();
const dataUser = ref();
const headers = [
  { title: "NIP", value: "nip", sortable: true },
  { title: "Nama Pegawai", value: "nama_pegawai", sortable: true },
  { title: "Role", value: "rolename", sortable: true },
  { title: "Nama Unit", value: "nama_unit", sortable: true },
  { title: "Nama Grup Unit", value: "nama_grupunit", sortable: true },
  { title: "Actions", key: "actions", sortable: false },
];

//tambahan

const dialog = ref(false);
const dialogDelete = ref(false);
const editedIndex = ref(-1);
const editedItem = ref({
  name: "",
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0,
});
const defaultItem = ref({
  name: "",
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0,
});
const formTitle = computed(() => {
  return editedIndex.value === -1 ? "New Item" : "Edit Item";
});
//end of tambahan

const { data: userSimRS } = useFetch("/api/user/userjoin");
const { data: userDetailData } = useFetch("/api/user/userjoin"); // Assuming userDetail endpoint

//tambahan
function editItem(item) {
  editedIndex.value = desserts.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
}
function deleteItem(item) {
  editedIndex.value = desserts.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialogDelete.value = true;
}
function deleteItemConfirm() {
  desserts.value.splice(editedIndex.value, 1);
  closeDelete();
}
function close() {
  dialog.value = false;
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  });
}
function closeDelete() {
  dialogDelete.value = false;
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  });
}
function save() {
  if (editedIndex.value > -1) {
    Object.assign(desserts.value[editedIndex.value], editedItem.value);
  } else {
    desserts.value.push(editedItem.value);
  }
  close();
}
watch(dialog, (val) => {
  val || close();
});
watch(dialogDelete, (val) => {
  val || closeDelete();
});
//end of tambahan

onMounted(async () => {
  // Await both fetches to ensure data is available before use
  await userSimRS.value;
  await userDetailData.value;

  dataUser.value = userSimRS.value; // Assuming userSimRS has user data
  userDetail.value = userDetailData.value; // Assuming userDetailData has detail data
});
</script>
