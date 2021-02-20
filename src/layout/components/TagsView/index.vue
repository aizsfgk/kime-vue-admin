<template>
  <div class="tags-view-container">
    <span class="title">
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TagsView',
  props: {
    title: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>

@import '@/styles/variables.scss';

.tags-view-container {
  margin-top: 3px;
  margin-left: 2px;
  // min-height: 30px;
  width: 100%;
  // background-color: $menuBg;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  // border-radius: 10px;

  .title {
    display: inline-block;
    font-size: 20px;
    // margin: 20px;
    padding: 15px;
    font-family: $fontFamily;
    font-weight: bolder;
    color:rgb(33, 43, 83);
  }
}
</style>
