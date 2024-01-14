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
@use 'sass-mq/mq';
// Font sizes
$font-size-large: 2.2rem;
$font-size-default: 2rem;
$font-size-small: 1.8rem;

:root {
  --content-card-font-color: black;
}

.content__releases-wrapper {
  width: 100%;
}

.content__releases-sort-button {
  background-color: var(--main-color);
  border: none;
  cursor: pointer;
  float: right;
  font-size: $font-size-small;
  height: fit-content;
  margin-bottom: 2rem;
  padding: 1rem;
  width: fit-content;

  &:hover {
    background-color: var(--sec-color);
    color: var(--main-color)
  }

  @include mq.mq($from: l) {
    float: left;
    font-size: $font-size-default;
  }
}

.content__releases {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  margin: 0;
  padding-left: 0;
  width: 100%;

  @include mq.mq($from: l) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
}

.content__releases .content__releases-card {
  background-color: var(--main-color);
}

.content__releases .content__releases-card:hover {
  background-color: var(--sec-color);
  color: var(--content-card-font-color);
}

.content__releases .content__releases-card:hover div {
  color: var(--content-card-font-color);
}

.content__releases .content__releases-card div {
  line-height: 1.2;
  color: var(--content-card-font-color);
  padding-left: 1rem;
}

.content__releases .content__releases-card div:nth-child(3) {
  margin-top: 0.3rem;
  margin-bottom: 1rem;
}

.content__releases .content__releases-card img {
  max-width: 100%;
  margin-bottom: 0.5rem;
}

.content__releases .content__releases-card-cat {
  font-size: 1.6rem;
  color: var(--content-card-font-color);

  @include mq.mq($from: l) {
    font-size: $font-size-default;
  }
}

.content_links {
  display: block;
  font-size: 1.6rem;
  margin-top: 2rem;
}

.content_links hr.hrr_releases {
  border: none;
  border-top: 0.15rem dashed var(--sec-color);
  margin: 1rem 0;
}
</style>
