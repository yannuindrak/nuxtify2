<template>
  <v-card class="mx-auto">
    <h3 class="justify-center">TAMBAH USER</h3>
    <v-form @submit.prevent="addUser">
      <v-combobox
        label="Jenis User"
        :items="['Umum', 'Dokter', 'Perawat']"
        outlined
      ></v-combobox>
      <v-text-field
        v-model="newUser.nip"
        label="NIP"
        required
        solo
      ></v-text-field>
      <v-text-field
        v-model="newUser.nama_pegawai"
        label="Nama"
        solo
      ></v-text-field>
      <v-text-field
        v-model="newUser.pwd"
        label="Password"
        required
        type="password"
      ></v-text-field>
      <v-combobox
        label="Roles"
        :items="roles"
        item-title="rolename"
        item-value="roleid"
      ></v-combobox>
      <v-btn type="submit" color="primary">Tambah User</v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
const pilihanRoles = ref();
const newUser = ref({
  nip: "",
  nama_pegawai: "",
  role: "", // Add role property to store selected role value
});

const { data: roles } = useFetch("/api/roles");

//BERHASIL TAMBAH DATA
async function addUser() {
  try {
    const user = await $fetch("/api/user/userdetail", {
      method: "POST",
      body: JSON.stringify({
        nip: newUser.value.nip,
        nama_pegawai: newUser.value.nama_pegawai,
      }),
      headers: { "Content-Type": "application/json" }, // Added for clarity
    });

    console.log("User berhasil ditambahkan!"); // Success message
    alert("User berhasil ditambahkan!"); // Display alert

    // Optionally, clear the form after successful submission
    newUser.value = { nip: "", nama_pegawai: "" };
  } catch (error) {
    console.error("Kesalahan menambahkan user:", error);
    alert("Error: " + error.message); // Display error alert
  }
}

onMounted(async () => {
  await roles.value;

  pilihanRoles.value = roles.value.map((role) => ({
    value: role.roleid, // Replace with the actual ID property
    text: role.rolename, // Replace with the actual property for role name
  }));

  console.log(pilihanRoles); // Verify data in console
});
</script>
