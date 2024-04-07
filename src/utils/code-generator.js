export const generateCode = function(formJson, codeType= 'vue') {
  let formJsonStr = JSON.stringify(formJson)

  if (codeType === 'html') {
    return `<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
	<title>VForm Demo</title>
	<link rel="stylesheet" href="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/element-plus/2.0.4/index.min.css" />
	<link rel="stylesheet" href="https://ks3-cn-beijing.ksyun.com/vform3/render.style.css?t=20220129">
	<style type="text/css">
	</style>
</head>
<body>

  <div id="app">
    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
    </v-form-render>
    <el-button type="primary" @click="submitForm">Submit</el-button>
  </div>

<script src="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue/3.2.30/vue.global.min.js"></script>
<script src="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/element-plus/2.0.4/index.full.min.js"></script>
<script src="https://ks3-cn-beijing.ksyun.com/vform3/render.umd.js?t=20220129"></script>
<script>
  const { createApp } = Vue;
	const app = createApp({
      data() {
        return {
          formJson: ${formJsonStr},
          formData: {},
          optionData: {}
        }
      },
      methods: {
        submitForm() {
          this.$refs.vFormRef.getFormData().then( (formData) => {
            // Form Validation OK
            alert( JSON.stringify(formData) )
          }).catch( function(error) {
            // Form Validation Failed
            alert(error)
          })
        }
      }
	});
	app.use(ElementPlus)
	app.use(VFormRender)
	app.mount("#app");
</script>
</body>
</html>`

  } else {
    return `<template>
  <div>
    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" :global-dsv="globalDsv" @formChange="formChange"  ref="vFormRef">
    </v-form-render>
    <div class="btn">
      <el-button type="primary" @click="submitForm">提交</el-button>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive,onMounted } from 'vue'
  import { ElMessage } from 'element-plus'


  const formJson = reactive(${formJsonStr})
  const formData = reactive({})
  const optionData = reactive({})
  const globalDsv = reactive({})
  const vFormRef = ref(null)


  /**
   * formChange From表单Model事件监听
   * @param {fieldName} 触发本事件的字段名
   * @param {newValue}  字段新值
   * @param {oldValue}  字段旧值
   * @param {formDataModel} 表单数据对象（仅针对配置组件）
   */
  const formChange = (fieldName, newValue, oldValue, formDataModel)=>{
      console.log('---formChange start---')
      console.log('fieldName',fieldName)
      console.log('newValue',newValue,)
      console.log('oldValue',oldValue,)
      console.log('formDataModel',formDataModel)
      console.log('---formChange end---')
  }

  /**
   * initFormJson 初始化JSON,渲染页面；
   */
  const initFormJson = ()=>{
    let renderJson = {"widgetList":[{"key":23446,"type":"title-text","icon":"static-text","formItemFlag":false,"options":{"name":"titletext63906","columnWidth":"100%","hidden":false,"textContent":"基本信息","textAlign":"left","fontSize":"14px","preWrap":false,"customClass":[],"onCreated":"","onMounted":"","label":"title-text"},"id":"titletext63906"},{"key":74950,"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"key":98784,"type":"select","icon":"select-field","formItemFlag":true,"options":{"name":"projectSource","label":"项目来源","labelAlign":"","defaultValue":"project_source_yg","placeholder":"","columnWidth":"","size":"","labelWidth":null,"labelHidden":false,"disabled":true,"hidden":false,"clearable":true,"filterable":false,"allowCreate":false,"remote":false,"automaticDropdown":false,"multiple":false,"multipleLimit":0,"optionItems":[{"value":"project_source_yg","label":"员工新建"}],"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onRemoteQuery":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"select65139"},{"key":63091,"type":"select","icon":"select-field","formItemFlag":true,"options":{"name":"projectSource2","label":"","labelAlign":"","defaultValue":"","placeholder":"二级来源（选填）","columnWidth":"","size":"","labelWidth":null,"labelHidden":false,"disabled":false,"hidden":false,"clearable":true,"filterable":false,"allowCreate":false,"remote":false,"automaticDropdown":false,"multiple":false,"multipleLimit":0,"optionItems":[],"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onRemoteQuery":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"select99711"}],"options":{"name":"gridCol40138","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":[]},"id":"grid-col-40138"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"key":98784,"type":"select","icon":"select-field","formItemFlag":true,"options":{"name":"center","label":"项目名称","labelAlign":"","defaultValue":"","placeholder":"请选择中心","columnWidth":"120px","size":"","labelWidth":null,"labelHidden":false,"disabled":false,"hidden":false,"clearable":true,"filterable":false,"allowCreate":false,"remote":false,"automaticDropdown":false,"multiple":false,"multipleLimit":0,"optionItems":[],"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onRemoteQuery":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"select51133"},{"key":98784,"type":"select","icon":"select-field","formItemFlag":true,"options":{"name":"projectNameIndustry","label":"","labelAlign":"","defaultValue":"","placeholder":"行业","columnWidth":"100px","size":"","labelWidth":null,"labelHidden":false,"disabled":false,"hidden":false,"clearable":true,"filterable":false,"allowCreate":false,"remote":false,"automaticDropdown":false,"multiple":false,"multipleLimit":0,"optionItems":[],"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onRemoteQuery":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"select67244"},{"key":63091,"type":"select","icon":"select-field","formItemFlag":true,"options":{"name":"projectNameFirstParty","label":"","labelAlign":"","defaultValue":"","placeholder":"甲方简称","columnWidth":"100px","size":"","labelWidth":null,"labelHidden":false,"disabled":false,"hidden":false,"clearable":true,"filterable":false,"allowCreate":false,"remote":false,"automaticDropdown":false,"multiple":false,"multipleLimit":0,"optionItems":[],"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onRemoteQuery":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"select66577"},{"key":82748,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"projectName","label":"","labelAlign":"","type":"text","defaultValue":"","placeholder":"请输入项目名称","columnWidth":"","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":60,"showWordLimit":true,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input77182"}],"options":{"name":"gridCol89254","hidden":false,"span":16,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":[]},"id":"grid-col-89254"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"key":78643,"type":"number","icon":"number-field","formItemFlag":true,"options":{"name":"scaleValue","label":"项目规模","labelAlign":"","defaultValue":null,"placeholder":"","columnWidth":"","size":"","labelWidth":null,"labelHidden":false,"disabled":false,"hidden":false,"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"min":0,"max":100000000000,"precision":2,"step":1,"controlsPosition":"right","onCreated":"","onMounted":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"number12756"}],"options":{"name":"gridCol24660","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-24660"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"key":74612,"type":"slot","icon":"slot-component","formItemFlag":true,"options":{"name":"slotMap","label":"项目地址","columnWidth":"","hidden":false,"textAlign":"left"},"id":"slot30799"}],"options":{"name":"gridCol37760","hidden":false,"span":16,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":[]},"id":"grid-col-37760"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"key":98784,"type":"select","icon":"select-field","formItemFlag":true,"options":{"name":"eagConsumerType","label":"政企用户","labelAlign":"","defaultValue":"","placeholder":"请选择政企用户","columnWidth":"","size":"","labelWidth":null,"labelHidden":false,"disabled":false,"hidden":false,"clearable":true,"filterable":false,"allowCreate":false,"remote":false,"automaticDropdown":false,"multiple":false,"multipleLimit":0,"optionItems":[],"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onRemoteQuery":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"select24366"}],"options":{"name":"gridCol79006","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-79006"}],"options":{"name":"grid71061","hidden":false,"gutter":40,"colHeight":null,"customClass":[]},"id":"grid71061"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelPosition":"top","size":"","labelAlign":"label-left-align","cssCode":"\n","customClass":[],"functions":"","layoutType":"PC","jsonVersion":3,"onFormCreated":"","onFormMounted":"","onFormDataChange":"","onFormValidate":""}}
    vFormRef.value.setFormJson(renderJson)
  }

  /**
   * initFormData 初始化表单数据，回显数据；
   */
  const initFormData = ()=>{
    let newFormData = {
      number12756: 10,
      projectCode: "",
      radio97367: 1,
    }
    vFormRef.value.setFormData(newFormData)
  }

  onMounted(async () => {
    await initFormJson()
     initFormData()  
   })

  const submitForm = () => {
    vFormRef.value.getFormData().then(formData => {
      // Form Validation OK
      alert( JSON.stringify(formData) )
    }).catch(error => {
      // Form Validation failed
      ElMessage.error(error)
    })
  }
</script>`

  }
}
