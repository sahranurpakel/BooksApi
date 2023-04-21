<script setup>
const route = useRoute();
const {
  data: book,
  pending,
  refresh,
} = await useAsyncData("book", () =>
  $fetch(`http://localhost:5000/books/${route.params.id}`)
);
const { data: comments } = await useAsyncData("comment", () =>
  $fetch(`http://localhost:5000/comment_rates/${route.params.id}`)
);
console.log(book);
</script>
<template>
  <h1 style="color: red">Books Page</h1>

  <div>
    <template v-if="pending">
      <div>
        <h1>LOADING</h1>
      </div>
    </template>
    <template v-else>
      <div>
        <h2>{{ book.detail.title }}</h2>
        <p>{{ book.detail.author }}</p>
        <p>{{ book.detail.page }}</p>
      </div>
    </template>
    <template v-for="reader in book.bookDetailReaders" :key="_id">
      <div>
        <h2>READERS</h2>
        <p>{{ reader.name }}</p>
      </div>
    </template>
  </div>

  <div>
    <h1>Comments</h1>
    <div>
      <template v-for="comment in comments">
        <p>Commenti Yazan kişi : {{ comment.name }}</p>
        <p>rate : {{ comment.rate }}</p>
        <template v-for="innercomment in comment.comments">
          <p>Commentleri : {{ innercomment.comment }}</p>
        </template>
        <br />
        <nuxt-link
          :to="{ path: `/comment_rates/${comment.user_id}/${book.detail._id}` }"
          >Add a new comment
        </nuxt-link>
      </template>
    </div>
  </div>
</template>
