<template>
  <v-card class="mx-auto">
    <h3>Tambah User</h3>
    <v-container>
      <v-form @submit.prevent="addUser">
        <v-row no-gutters>
          <v-col>
            <v-sheet class="pa-2 ma-2">
              <v-combobox
                v-model="pilihanJenisUser"
                label="Jenis User"
                :items="['Umum', 'Dokter', 'Perawat']"
              ></v-combobox>
              <v-text-field
                v-model="newUser.nip"
                label="NIP"
                required
              ></v-text-field>
              <v-text-field
                v-if="pilihanJenisUser === 'Umum'"
                v-model="newUser.nama_pegawai"
                label="Nama"
              ></v-text-field>
              <v-combobox
                v-if="pilihanJenisUser === 'Dokter'"
                v-model="selectedDokter"
                label="Dokter"
                :items="dokter"
                item-title="namadokter"
                item-value="kddokter"
              ></v-combobox>
              <v-combobox
                v-if="pilihanJenisUser === 'Perawat'"
                v-model="selectedPerawat"
                label="Perawat"
                :items="perawat"
                item-title="nama"
                item-value="idperawat"
              ></v-combobox>
              <v-text-field
                v-model="newUser.pwd"
                label="Password"
                type="password"
              ></v-text-field>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet class="pa-2 ma-2">
              <v-combobox
                label="Roles"
                v-model="selectedRoles"
                :items="roles"
                item-title="rolename"
                item-value="roleid"
              ></v-combobox>
              <v-combobox
                label="Unit"
                v-model="selectedUnit"
                :items="unit"
                item-title="nama_unit"
                item-value="kode_unit"
              ></v-combobox>

              <v-text-field
                v-model="newUser.nipb"
                label="NIP/NIPTT"
                required
              ></v-text-field>
              <v-btn type="submit" color="primary">Tambah User</v-btn>
            </v-sheet>
          </v-col>

          <v-responsive width="100%"></v-responsive>
        </v-row>
      </v-form>
    </v-container>
  </v-card>
  -
  <v-data-table
    :headers="headers"
    :items="dataUser"
    :items-per-page="9"
    :search="search"
  >
    <!--judul tabel dan button new item di pojok kanan-->
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Data User RSSA</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          density="compact"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="600px">
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
                      v-model="editedItem.nip"
                      label="NIP"
                    ></v-text-field
                    ><br />
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      v-model="editedItem.nama_pegawai"
                      label="Nama Pegawaik"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      v-model="editedItem.rolename"
                      label="NIP / NIPTTK"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      v-model="editedItem.nama_unit"
                      label="Departemen"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      v-model="editedItem.nama_grupunit"
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
              >Apakah anda yakin mau menghapus data ini?</v-card-title
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
      <v-icon class="me-2" size="small" @click="detailItem(item)">
        mdi-account-details
      </v-icon>
      <v-icon class="me-2" size="small" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <!--end of actions-->
  </v-data-table>
</template>

<script setup>
const pilihanJenisUser = ref("Umum"); // Initial user type
const pilihanRoles = ref();
const pilihanUnit = ref();
const pilihanDokter = ref();
const pilihanPerawat = ref();

const selectedDokter = ref();
const selectedPerawat = ref();
const selectedRoles = ref();
const selectedUnit = ref();

const search = ref();
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

const newUser = ref({
  nip: "",
  nama_pegawai: "",
  pwd: "",
  roles: "",
  kdunit: "",
  departemen: "",
  nipb: "",
});
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
  return editedIndex.value === -1 ? "New Data" : "Edit Data";
});
//end of tambahan

const { data: userSimRS } = useFetch("/api/user/userjoin");
const { data: userDetailData } = useFetch("/api/user/userdetail"); // Assuming userDetail endpoint

//tambahan
function detailItem(item) {
  editedIndex.value = userDetail.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
}

function editItem(item) {
  editedIndex.value = dataUser.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
}
function deleteItem(item) {
  editedIndex.value = dataUser.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialogDelete.value = true;
}
function deleteItemConfirm() {
  dataUser.value.splice(editedIndex.value, 1);
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
    Object.assign(dataUser.value[editedIndex.value], editedItem.value);
  } else {
    dataUser.value.push(editedItem.value);
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
const { data: roles } = useFetch("/api/roles");
const { data: unit } = useFetch("/api/unit");
const { data: dokter } = useFetch("/api/dokter");
const { data: perawat } = useFetch("/api/perawat");

//BERHASIL TAMBAH DATA
async function addUser() {
  try {
    const user = await $fetch("/api/user/userdetail", {
      method: "POST",
      body: JSON.stringify({
        nip: newUser.value.nip,
        nama_pegawai:
          pilihanJenisUser.value === "Umum"
            ? newUser.value.nama_pegawai
            : pilihanJenisUser.value === "Dokter"
            ? selectedDokter.value.namadokter
            : selectedPerawat.value.nama,
        kdperawat:
          pilihanJenisUser.value === "Perawat"
            ? selectedPerawat.value.idperawat
            : null,
        kddokter:
          pilihanJenisUser.value === "Dokter"
            ? selectedDokter.value.kddokter
            : null,
        pwd: newUser.value.pwd,
        roles: selectedRoles.value.roleid,
        kdunit: selectedUnit.value.kode_unit,
        departemen: selectedUnit.value.nama_unit,
        nipb: newUser.value.nipb,
        aktif: 1,
      }),
      headers: { "Content-Type": "application/json" }, // Added for clarity
    });

    console.log("User berhasil ditambahkan!"); // Success message
    alert("User berhasil ditambahkan!"); // Display alert

    // Optionally, clear the form after successful submission
    newUser.value = {
      nip: "",
      nama_pegawai: "",
      pwd: "",
      roles: "",
      kdunit: "",
      departemen: "",
      nipb: "",
    };
  } catch (error) {
    console.error("Kesalahan menambahkan user:", error);
    alert("Error: " + error.message); // Display error alert
  }
}

onMounted(async () => {
  await roles.value;
  await unit.value;
  await dokter.value;
  await perawat.value;

  pilihanRoles.value = roles.value.map((role) => ({
    value: role.roleid, // Replace with the actual ID property
    text: role.rolename, // Replace with the actual property for role name
  }));

  pilihanUnit.value = unit.value.map((unitt) => ({
    value: unitt.kode_unit,
    text: unitt.nama_unit,
  }));

  pilihanDokter.value = dokter.value.map((dokterr) => ({
    value: dokterr.kddokter,
    text: dokterr.namadokter,
  }));

  pilihanPerawat.value = perawat.value.map((perawat) => ({
    value: perawatt.idperawat,
    text: perawatt.nama,
  }));
});
</script>
