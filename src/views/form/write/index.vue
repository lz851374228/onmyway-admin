<template>
  <PageWrapper dense contentFullHeight fixedHeight>
    <div v-if="isPending" v-loading="loading" class="write-content">
      <VFormCreate :form-config="formConfig" v-model:fApi="fApi" v-model:formModel="formModel">
        <template #slotName="{ formModel, field }">
          <a-input v-model:value="formModel[field]" placeholder="我是插槽传递的输入框" />
        </template>
      </VFormCreate>
      <div class="content-btn">
        <Button style="margin-right: 10px" @click="handleCancel">取 消</Button>
        <Button type="primary" @click="handleSubmit">保 存</Button>
      </div>
    </div>
  </PageWrapper>
</template>

<script lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { defineComponent, reactive, toRefs, onBeforeMount } from 'vue';
  import { IFormConfig } from '../design/typings/v-form-component';
  import { IAnyObject } from '../design/typings/base-type';
  import VFormCreate from '../design/components/VFormCreate/index.vue';
  import { IVFormMethods } from '../design/hooks/useVFormMethods';
  import {
    getTemplate,
    createTemplateData,
    updateTemplateData,
    getTemplateData,
  } from '/@/api/form/template';
  import { useRoute } from 'vue-router';
  import { Button } from '/@/components/Button';

  export default defineComponent({
    name: 'Write',
    components: {
      VFormCreate,
      PageWrapper,
      Button,
    },
    setup() {
      const route = useRoute();
      const state = reactive<{
        formModel: IAnyObject;
        formConfig: IFormConfig;
        fApi: IVFormMethods;
        isPending: boolean;
        loading: boolean;
        formTemplateId: number;
        formTemplateDataId: number;
      }>({
        formModel: {},
        formConfig: {} as IFormConfig,
        fApi: {} as IVFormMethods,
        isPending: false,
        loading: false,
        formTemplateId: 0,
        formTemplateDataId: 0,
      });
      const handleSubmit = async () => {
        state.loading = true;
        await createTemplateData({
          form_template_id: state.formTemplateId,
          form_data: JSON.stringify(state.formModel),
          addition: '',
        });
        state.loading = false;
      };
      const handleCancel = () => {
        state.formModel = {};
      };
      const getFormTemplate = async () => {
        state.isPending = false;
        state.formTemplateId = parseInt(route.query?.form_template_id as string);
        if (state.formTemplateId) {
          let res = await getTemplate({ id: state.formTemplateId });
          state.formConfig = JSON.parse(res.schemas);
          state.isPending = true;
        }
      };
      const getFormTemplateData = async () => {
        state.formTemplateDataId = parseInt(route.query?.form_template_data_id as string);
        if (state.formTemplateDataId) {
          let res = await getTemplateData({ id: state.formTemplateDataId });
          state.formModel = JSON.parse(res.form_data);
        }
      };
      onBeforeMount(async () => {
        await getFormTemplate();
        await getFormTemplateData();
      });

      return {
        ...toRefs(state),
        handleSubmit,
        handleCancel,
      };
    },
  });
</script>

<style lang="less" scoped>
  .write-content {
    position: relative;
    margin: 10px;
    padding-bottom: 50px;

    .content-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
    }
  }
</style>
