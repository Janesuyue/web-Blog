<template>
  <div class="preview">
    <div class="preview_title">Preview</div>
    <div class="preview_page">
        <slot/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preview {
  width: 100%;
  .preview_title {
    font-size: 1rem;
    font-weight: 700;
    line-height: 2.5;
    margin: 0.5rem 0.5rem 0.75rem;
    color: #424242;
  }
  .preview_page {
    background: #f5f6fa;
    border-radius: 0.25rem;
    padding: 1.375rem 1.25rem 0.75rem;
    margin: -0.5rem 0 1.5rem;
  }
}
</style>
