<template>
    <RouterLink
      :to="'/news/' + data.article_id"
      v-if="data"
      class="card card-bordered card-hover mb-3"
      style="cursor: pointer;"
    >
      <div class="row g-0">
        <div class="col-md-8 ">
          <div class="card-body">
            <h5 class="news-title">
              {{ data.article_title }}
            </h5>
            <p class="news-text">
              {{
                data.article_content.length > 150
                  ? data.article_content.slice(0, 150) + "..."
                  : data.article_content
              }}
            </p>
            <p class="card-text">
              <small class="text-body-secondary">
                {{ this.$dayjs(data.created_at).format("DD MMMM YYYY") }}
              </small>
            </p>
          </div>
        </div>
      </div>
    </RouterLink>
  </template>
  
  <script>
  export default {
    props: {
      data: {
        type: Object
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .card-bordered {
    border: 1px solid #e2e8f0;
    box-shadow: none;
    border-radius: 1rem;
  }
  
  .card-hover {
    transition: box-shadow 0.25s ease;
  }
  
  .card-hover:hover {
    box-shadow: 5px 5px 5px #eaeaea !important;
  }
  
  .article-title {
    font-size: 24px;
    font-weight: 600;
  }
  
  .article-text {
    font-size: 16px;
    color: #666;
  }
  </style>
  