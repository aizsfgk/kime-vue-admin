<template>
  <div class="card-container">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>

  .card-container {
    border-radius: 4px;
    margin: 0px 6px 12px 6px;
    background-color: #FFF;
    .card-header {
      border-bottom: 1px solid #e8eaec;
      padding: 14px 16px;
      line-height: 1;
      font-weight: 600;
    }
    .card-body {
      padding: 10px;
      min-height: 120px;
    }
  }
</style>
