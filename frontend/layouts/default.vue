<template>
  <div>
    <nav>
      <h1>Navigation</h1>
      <ul>
        <li>
          <nuxt-link to="/"><li>Home</li></nuxt-link>
        </li>
        <li>
          <nuxt-link to="/books"><li>Books</li></nuxt-link>
        </li>
        <li>
          <nuxt-link to="/readers"><li>Readers</li></nuxt-link>
        </li>
        <li>
          <nuxt-link to="/publishers"><li>Publishers</li></nuxt-link>
        </li>
      </ul>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>
