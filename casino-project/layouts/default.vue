<template>
  <div class="casino-app">
    <header>
      <nav>
        <NuxtLink to="/">Главная</NuxtLink>
        <NuxtLink to="/games">Игры</NuxtLink>
        <NuxtLink to="/profile">Профиль</NuxtLink>
        <NuxtLink to="/login">Вход</NuxtLink>
      </nav>
    </header>
    
    <main>
      <slot />
    </main>
    
    <footer>
      <p>© 2025 Casino Project. Все права защищены.</p>
    </footer>
  </div>
</template>

<style>
.casino-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

header, footer {
  padding: 1rem;
  background: #1a1a2e;
  color: white;
}

nav {
  display: flex;
  gap: 1rem;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>