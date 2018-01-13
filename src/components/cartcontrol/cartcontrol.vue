<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decrease($event)">
        <i class="icon-remove_circle_outline"></i>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add">
      <i class="icon-add_circle" @click.stop.prevent="add"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      add(e) {
        if (!e._constructed) return;
        if (!this.food.count) {
          this.$set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        this.$emit('add', e.target);
      },
      decrease(e) {
        if (!e._constructed) return;
        this.food.count--;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/css">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      font-size: 24px
      color: rgb(0, 160, 220)
      line-height: 24px
    .move-enter-active, .move-leave-active
      transition: all 0.3s linear
    .move-enter, .move-leave-to
      opacity: 0
      transform: translate3D(24px, 0, 0) rotate(180deg)
    .cart-add
      display: inline-block
      padding: 6px
      font-size: 24px
      color: rgb(0, 160, 220)
      line-height: 24px
    .cart-count
      display: inline-block
      width: 12px
      margin-top: 6px
      font-size: 10px
      color: rgb(147, 153, 159)
      line-height: 24px
      text-align: center
      vertical-align: top
</style>

