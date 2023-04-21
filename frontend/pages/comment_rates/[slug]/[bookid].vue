<script setup>
const route = useRoute();
</script>

<template>
  <h1>ADD COMMENT VİYYY</h1>

  <div>
    <form @submit.prevent="submitForm">
      <p>
        <input
          v-model="comment"
          type="text"
          name="comment"
          placeholder="Enter Comment"
        />
      </p>
      <p>
        <input
          v-model="rate"
          type="number"
          name="rate"
          placeholder="Enter your rate"
        />
      </p>
      <p><button type="submit">Send</button></p>
    </form>
  </div>
</template>
<script>
const route = useRoute();
export default {
  methods: {
    async submitForm() {
      await $fetch(
        `http://localhost:5000/comment_rates/${route.params.slug}/${route.params.bookid}/`,
        {
          method: "PUT",
          body: {
            comment: this.comment,
            rate: this.rate,
          },
        }
      ).then(() => {
        useRouter().push(`/books/${route.params.bookid}`);
      });
    },
  },
};
</script>
