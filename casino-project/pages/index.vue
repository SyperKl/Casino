<template>
  <div class="home-page">
    <h1>Добро пожаловать в Казино</h1>
    
    <div class="featured-games">
      <h2>Популярные игры</h2>
      <div class="games-grid">
        <div class="game-card" v-for="game in featuredGames" :key="game.id">
          <h3>{{ game.name }}</h3>
          <NuxtLink :to="`/games/${game.id}`">Играть</NuxtLink>
        </div>
      </div>
    </div>
    
    <div class="promo-banner">
      <h2>Бонус для новых игроков!</h2>
      <p>Зарегистрируйтесь сегодня и получите бонус на первый депозит</p>
      <NuxtLink to="/register" class="btn">Регистрация</NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Временные данные для примера
const featuredGames = [
  { id: 1, name: 'Покер' },
  { id: 2, name: 'Блэкджек' },
  { id: 3, name: 'Рулетка' },
  { id: 4, name: 'Слоты' }
];
</script>

<style scoped>
.home-page {
  padding: 2rem;
}

h1 {
  margin-bottom: 2rem;
  text-align: center;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0 2rem;
}

.game-card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
}

.promo-banner {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}

.btn {
  display: inline-block;
  background: #ff9800;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-top: 1rem;
}
</style>