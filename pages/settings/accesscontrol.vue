<template>
  <v-table height="300px">
    <v-app-bar :elevation="1">
      <v-list-item
        color="black"
        title="DATA ACCESS CONTROL"
        subtitle="Settings"
        prepend-icon="mdi-shield-account-variant-outline"
      >
      </v-list-item>
    </v-app-bar>
    <thead>
      <h2>Halaman ACCESS CONTROL</h2>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Calories</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
definePageMeta({
  layout: "settings",
});
</script>
