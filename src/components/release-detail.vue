<template>
  <div class="content__release">
    <template v-for="block in content.body">
      <h1>{{ block.headline }}</h1>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {
        body: [
          {
            _uid: 'BUY6Drn9e1',
            component: 'foo',
            headline: 'Foo',
          },
          {
            _uid: 'gJZoSLkfZV',
            component: 'bar',
            title: 'Bar',
          },
          {
            _uid: 'X1JAfdsZxy',
            component: 'foo',
            headline: 'Another headline',
          },
        ],
      },
    };
  },
};
</script>
