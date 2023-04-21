<script setup>
const { data: readers } = await useFetch("http://localhost:5000/readers");
console.log(readers);
</script>
<template>
  <h1>Readers Page</h1>

  <template v-for="reader in readers" :key="_id">
    <div>
      <p>{{ reader.name }}</p>
      <p>{{ reader.surname }}</p>
      <p>{{ reader.description }}</p>
      <nuxt-link :to="{ path: `/readers/${reader._id}` }"
        >go to reader profile</nuxt-link
      >
    </div>
  </template>
</template>

<script>
export default {
  name: "ReadersPage",
};
</script>
