<template>
  <v-data-table :items="items">
    <v-app-bar :elevation="1">
      <v-list-item
        color="black"
        title="WEBHOOKS"
        subtitle="Settings"
        prepend-icon="mdi-anchor"
        class=""
      >
      </v-list-item>
    </v-app-bar>
    <h2>Halaman WEBHOOKS</h2>
    <template v-slot:header.id="{ column }">
      {{ column.title.toUpperCase() }}
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: "T-Shirt",
        size: "M",
        color: "Red",
        price: 19.99,
        quantity: 10,
      },
      {
        id: 2,
        name: "Jeans",
        size: "32",
        color: "Blue",
        price: 49.99,
        quantity: 5,
      },
      {
        id: 3,
        name: "Sweater",
        size: "L",
        color: "Green",
        price: 29.99,
        quantity: 7,
      },
      {
        id: 4,
        name: "Jacket",
        size: "XL",
        color: "Black",
        price: 89.99,
        quantity: 3,
      },
      {
        id: 5,
        name: "Socks",
        size: "One Size",
        color: "White",
        price: 9.99,
        quantity: 20,
      },
    ],
  }),
};
definePageMeta({
  layout: "settings",
});
</script>
