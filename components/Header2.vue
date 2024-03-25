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

      <v-list-group value="Users"
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
      </v-list-group>
      <v-list-item
        prepend-icon="mdi-fountain-pen"
        title="Antrianoperasi"
        class="Antrianoperasi"
        color="blue"
        to="/operasi/antrianoperasi"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-flash-triangle"
        title="Spt"
        class="Spt"
        color="blue"
        to="/spt/dataperminspt"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-hand-back-left"
        title="Modul Data Cuci Tangan"
        class="my-0"
        color="blue"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-shield-check-outline"
        title="Modul Data Apd"
        class="my-0"
        color="blue"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>


  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-app-bar-title>Application</v-app-bar-title>
  </v-app-bar>

</template>
 
<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>