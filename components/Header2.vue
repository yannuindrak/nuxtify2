<template>
  <v-navigation-drawer v-model="drawer" color:="indigo-lighten-5"  :width="250">
    <v-list>
      <v-list-item
        color="black"
        title="SATU RSSA"
        subtitle="Satu Data Untuk RSSA"
        prepend-icon="mdi-wifi-strength-4"
      >
      </v-list-item>

      <v-divider class="mx-3 my-2"></v-divider>
      <v-text-field
        label="Search Collection"
        variant="solo"
        class="mx-3 my-2"
      ></v-text-field>
      <v-divider class="mx-3 my-2"></v-divider>
      <v-list-item
        prepend-icon="mdi-account-group"
        title="Kepegawaian"
        class="Kepegawaian"
        color="blue"
        to="/kepegawaian/modulkepegawaian"
      ></v-list-item>

      <!-- <v-list-group value="Users"
        >
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-medical-bag"
            title="Ppi"
          ></v-list-item>
        </template>

        <v-list-group value="Admin">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Admin"
            prepend-icon="mdi-medical-bag"></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            :title="title"
            :prepend-icon="icon"
            :value="title"
          ></v-list-item>
        </v-list-group>

        <v-list-group value="Actions">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Actions"></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"
          ></v-list-item>
        </v-list-group>
      </v-list-group> -->

 
      <v-list-item
        prepend-icon="mdi-hand-back-left"
        title="Modul Cuci Tangan"
        class="cucitangan"
        color="blue"
        to="/modulcucitangan/"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-shield-check-outline"
        title="Modul Apd"
        class="apd"
        color="blue"
        to="/modulapd/"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="Pasien"
        class="pasien"
        color="blue"
        to="/pasien/"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-tie"
        title="Rekam Medis"
        class="rekammedis"
        color="blue"
        to="/rekammedis/"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-text-account"
        title="User"
        class="datauser"
        color="blue"
        to="/user/"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-cable-data"
        title="Data 1"
        class="datasatu"
        color="blue"
        to="/datasatu/"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-page-next-outline"
        title="Data 2"
        class="datadua"
        color="blue"
        to="/datadua/"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-access-point-network"
        title="Data 3"
        class="datatigar"
        color="blue"
        to="/datatiga/"
      ></v-list-item>
 
      
      
    </v-list>
  </v-navigation-drawer>
 
  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-app-bar-title>Data RSSA</v-app-bar-title>
  </v-app-bar>

</template>
 
<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>