<script setup>
const route = useRoute();
const {
  data: reader,
  pending,
  refresh,
} = await useAsyncData("reader", () =>
  $fetch(`http://localhost:5000/readers/${route.params.id}`)
);
console.log(reader);
</script>
<template>
  <h1>Profile</h1>
  <div>
    <template v-if="pending">
      <h1>LOADING</h1>
    </template>
    <template v-else>
      <div>
        <p>{{ reader[0].name }}</p>
      </div>
      <template v-for="book in reader[0].books_id">
        <div>
          <h1>okuduğu kitaplar</h1>
          <h2>{{ book.title }}</h2>
          <p>{{ book.author }}</p>
          <nuxt-link :to="{ path: `/books/${book._id}` }"
            >go to book detail
          </nuxt-link>
        </div>
      </template>
    </template>
  </div>
</template>
