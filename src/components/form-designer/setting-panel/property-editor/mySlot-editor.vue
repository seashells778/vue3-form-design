<template>
  <el-form-item label="mySlot" >
    <el-input type="text" v-model="optionModel.mySlot"></el-input>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "mySlot-editor",
    mixins: [i18n],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    computed: {

    }
  }
</script>

<style lang="scss" scoped>

</style>
