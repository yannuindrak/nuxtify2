<template>
  <v-navigation-drawer color="white">
    <!--  -->

    <v-list>
      <v-list-item
        color="black"
        subtitle="Satu Data Untuk RSSA"
        title="SATU RSSA"
        prepend-icon="mdi-wifi-strength-4 black"
      >
      </v-list-item>
    </v-list>
    <v-divider class="mx-0 my-2"></v-divider>

    <v-list>
      <v-list-item
        prepend-icon="mdi-database-outline"
        title="Data Model"
        value="DataModel"
        to="/settings/datamodel"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-shield-account-variant-outline"
        title="Access Control"
        value="AccessControl"
        to="/settings/accesscontrol"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-anchor"
        title="Webhooks"
        value="home"
        to="/settings/webhooks"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-lightning-bolt-outline"
        title="Flows"
        value="Flows"
        to="/settings/flows"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-flash-triangle"
        title="Extensions"
        value="Extensions"
        to="/settings/extensions"
      ></v-list-item>
      <v-divider class="mx-3 my-2"></v-divider>
      <v-list-item
        prepend-icon="mdi-tune"
        title="Settings"
        value="Settings"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-palette-outline"
        title="Appereance"
        value="Appereance"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-bookmark-outline"
        title="Bookmarks"
        value="Bookmarks"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-translate"
        title="Translations"
        value="Translations"
      ></v-list-item>
      <v-divider class="mx-3 my-2"></v-divider>
      <v-list-item
        prepend-icon="mdi-bug-outline"
        title="Report Bug"
        value="Report "
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-check-decagram-outline"
        title="Request Feature"
        value="Request"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-kangaroo"
        title="Directus 10.9.0"
        value="Directus"
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
