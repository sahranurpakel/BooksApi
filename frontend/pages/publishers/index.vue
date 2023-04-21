<script setup>
const { data: publishers } = await useFetch(
  "http://localhost:5000/publishers/"
);
</script>

<template>
  <h1 style="color: purple">Publisher Page</h1>
  <template v-for="publisher in publishers" :key="publisher._id">
    <div>
      <h2>{{ publisher.name }}</h2>
    </div>
    <div>
      <p>
        {{ publisher.description }}
      </p>
    </div>
  </template>
</template>
<script>
export default {
  name: "PublisherPage",
};
</script>
