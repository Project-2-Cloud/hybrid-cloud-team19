<template>
<div class="col-sm-4 item">
  <div class="card text-center" >
    <div>
      <img :src="item.thumbnail_url" alt="" class="card-img-top grow">
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <!--<h6 class="card-subtitle mb-2 remain">{{ item.quantity }} left in stock</h6>-->
      <p class="card-text">{{ item.description | shortDescription }}</p>
      <div class="row d-flex justify-content-center">
        <p class="col-6 text-danger">{{ item.price }} <strong class="text-dark">€</strong></p>
        <p class="col-7">
          <button type="button" class="btn btn-success btn-lg"  @click="addToCart(item)">
            Buy now
          </button>
          <button type="button" class="btn btn-transparent btn-sml" @click="viewMoreFirst()">
            Tell me more
          </button>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
    name: 'item',
    props: ['item'],
    data() {
        return {
            size: ''
        }
    },
    filters: {
        shortDescription(value) {
        if (value && value.length > 70) {
            return value.substring(0, 70) + '...';
        } else {
            return value;
        }
        }
    },
    methods: {
        addToCart(item) {
            this.$store.commit('addToCart',item);
        },
        viewMoreFirst(){
          window.location.href = "famillypack"
        }
    }
}
</script>

<style scoped>

.remain {
  color: #d17581;
}

.grow {
  width: 90%;
  height: 90%;
  padding: 15px;
  transition: all .2s ease-in-out;
}

.grow:hover {
  transform: scale(1.1);
}

.item {
    display: flex;
    content: "";
    padding: 10px 10px;
}

</style>