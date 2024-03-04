<template>
  <el-col class="grid-cell render-grid-cell" :class="[customClass,{'flex-grid-cell':widget.widgetList.length > 1}]" v-bind="layoutProps" :style="colHeightStyle"
          :key="widget.id" v-show="!widget.options.hidden">
    <template v-if="!!widget.widgetList && (widget.widgetList.length > 0)">
      <template v-for="(subWidget, swIdx) in widget.widgetList" :key="swIdx">
        <div class="form-widget-list" :style="handleFlexWidth(subWidget)" >
          <template v-if="'container' === subWidget.category">
            <component :is="getComponentByContainer(subWidget)" :widget="subWidget" :key="swIdx" :parent-list="widget.widgetList" :isPreview="isPreview"
                            :index-of-parent-list="swIdx" :parent-widget="widget">
              <!-- 递归传递插槽！！！ -->
              <template v-for="slot in Object.keys($slots)" v-slot:[slot]="scope">
                <slot :name="slot" v-bind="scope"/>
              </template>
            </component>
          </template>
          <template v-else>
            <component :is="subWidget.type + '-widget'" :field="subWidget" :designer="null" :key="swIdx" :parent-list="widget.widgetList"  :isPreview="isPreview"
                          :index-of-parent-list="swIdx" :parent-widget="widget">
              <!-- 递归传递插槽！！！ -->
              <template v-for="slot in Object.keys($slots)" v-slot:[slot]="scope">
                <slot :name="slot" v-bind="scope"/>
              </template>
            </component>
          </template>
        </div>
      </template>
    </template>
    <template v-else>
      <el-col>
        <div class="blank-cell"><span class="invisible-content">{{i18nt('render.hint.blankCellContent')}}</span></div>
      </el-col>
    </template>
  </el-col>
</template>

<script>
  import emitter from '@/utils/emitter'
  import i18n from "../../../utils/i18n"
  import refMixin from "../../../components/form-render/refMixin"
  import FieldComponents from '@/components/form-designer/form-widget/field-widget/index'

  export default {
    name: "GridColItem",
    componentName: 'ContainerItem',
    mixins: [emitter, i18n, refMixin],
    components: {
      ...FieldComponents,
    },
    props: {
      isPreview:Boolean,
      widget: Object,
      parentWidget: Object,
      parentList: Array,
      indexOfParentList: Number,

      colHeight: {
        type: String,
        default: null
      },

    },
    inject: ['refList', 'globalModel', 'getFormConfig', 'previewState'],
    data() {
      return {
        layoutProps: {
          span: this.widget.options.span,
          md: this.widget.options.md || 12,
          sm: this.widget.options.sm || 12,
          xs: this.widget.options.xs || 12,
          offset: this.widget.options.offset || 0,
          push: this.widget.options.push || 0,
          pull: this.widget.options.pull || 0,
        }
      }
    },
    computed: {
      formConfig() {
        return this.getFormConfig()
      },

      customClass() {
        return this.widget.options.customClass || ''
      },

      colHeightStyle() {
        return !!this.colHeight ? {height: this.colHeight + 'px'} : {}
      },

    },
    created() {
      this.initLayoutProps()
      this.initRefList()
    },
    methods: {
      handleFlexWidth(subWidget){
        if('container' === subWidget.category){
          return ''
        }else{
          let width = subWidget.options.columnWidth;
          return width ? {width:width } : {flex:1}

        }
      },
      initLayoutProps() {
        if (!!this.widget.options.responsive) {
          if (!!this.previewState) {
            this.layoutProps.md = undefined
            this.layoutProps.sm = undefined
            this.layoutProps.xs = undefined

            let lyType = this.formConfig.layoutType
            if (lyType === 'H5') {
              this.layoutProps.span = this.widget.options.xs || 12
            } else if (lyType === 'Pad') {
              this.layoutProps.span = this.widget.options.sm || 12
            } else {
              this.layoutProps.span = this.widget.options.md || 12
            }
          } else {
            this.layoutProps.span = undefined
          }
        } else {
          this.layoutProps.md = undefined
          this.layoutProps.sm = undefined
          this.layoutProps.xs = undefined
        }
      },

    }
  }
</script>

<style lang="scss" scoped>
  .blank-cell {
    font-style: italic;
    color: #cccccc;

    span.invisible-content {
      opacity: 0;
    }
  }
  .flex-grid-cell{
    display: flex !important;
    justify-content: flex-start !important;
    align-items: flex-end !important;
    position: relative;
    
  }
</style>
