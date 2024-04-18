<template>
  <div class="content__releases-wrapper">
    <button type="button" class="content__releases-sort-button" @click="changeReleasesOrder">Oldest ↓</button>
    <ul class="content__releases">
      <li class="content__releases-card" v-for="release in content.releases" :key="release.id">
        <RouterLink :to="{ name: 'ReleaseDetails', params: { releaseDetails: release.id } }">
          <img :src="`/assets/img/${release.releaseImg}`" />
          <div>{{ release.releaseArtist }} - {{ release.releaseTitle }}</div>
          <div class="content__releases-card-cat">→ {{ release.releaseNumber }}</div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: []
    }
  },
  methods: {
    fetchData() {
      fetch('/releases.json')
      .then(res => res.json())
      .then(data => this.content = data)
      .catch(err => console.log(err.message))
    },
    changeReleasesOrder() {
      const cardsList = document.querySelectorAll('.content__releases-card');
      const reversedCards = Array.from(cardsList).reverse();
      const contentReleases = document.querySelector('.content__releases');
      const sortButton = document.querySelector('.content__releases-sort-button');

      if (contentReleases) {
        contentReleases.innerHTML = '';
        reversedCards.forEach(card => {
          contentReleases.appendChild(card);
        });
      }

      if (sortButton) {
        const buttonText = sortButton.textContent;
        sortButton.textContent = buttonText === 'Oldest ↓' ? 'Newest ↑' : 'Oldest ↓';
      }
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style lang="scss">
@import './Releases.scss';
</style>
