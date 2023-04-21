<script setup>
const { data: books } = await useFetch("http://localhost:5000/books");
</script>

<template>
  <h1 style="color: red">Books Page</h1>

  <template v-for="book in books" :key="book._id">
    <div>
      <h2>{{ book.title }}</h2>
      <p>{{ book.page }}</p>
      <nuxt-link :to="{ path: `/books/${book._id}` }"
        >go to book detail page</nuxt-link
      >
    </div>
  </template>
</template>

<script>
export default {
  name: "BooksPage",
};
</script>
