<template>
  <v-navigation-drawer color="white" rail permanent>
    <v-list density="compact" nav>
      <v-btn
        density="comfortable"
        class="mx-auto mt-2"
        icon="mdi-plus-outline"
        size="36"
      ></v-btn>
      <NuxtLink to="/menu/"
        ><v-btn icon="mdi-cube-outline" class="mx-auto mt-6" size="36"></v-btn
      ></NuxtLink>
      <NuxtLink to="/settings/"
        ><v-btn
          density="comfortable"
          icon="mdi-cog"
          class="mx-auto mt-6"
          size="36"
        ></v-btn
      ></NuxtLink>
      <v-btn
        density="comfortable"
        class="mx-auto mt-6"
        icon="mdi-account"
        size="36"
      ></v-btn>
      <v-btn
        density="comfortable"
        class="d-block text-center mx-auto mt-16"
        icon="mdi-alert"
        size="36"
      ></v-btn>
      <v-divider class="mx-3 my-5"></v-divider>
      <v-btn
        density="comfortable"
        class="d-block text-center mx-auto mt-5"
        icon="mdi-logout"
        size="36"
      ></v-btn>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
