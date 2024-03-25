<template>
  <v-navigation-drawer color="white">
    <!--  -->
    <v-list>
      <v-list-item
        color="black"
        title="SATU RSSA"
        subtitle="Satu Data Untuk RSSA"
        prepend-icon="mdi-wifi-strength-4"
      >
      </v-list-item>

      <v-text-field
        label="Search Collection"
        variant="solo"
        class="mx-3 my-2"
      ></v-text-field>
      <v-list-item
        prepend-icon="mdi-account-group"
        title="Kepegawaian"
        class="my-0"
        color="blue"
      ></v-list-item>

      <v-list-group value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-medical-bag"
            title="Ppi"
          ></v-list-item>
        </template>

        <v-list-group value="Admin">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Admin"></v-list-item>
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
        title="Antrian Operasi"
        class="my-0"
        color="blue"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    open: ["Users"],
    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
    cruds: [
      ["Create", "mdi-plus-outline"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ],
  }),
};
</script>
