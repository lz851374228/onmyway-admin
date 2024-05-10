<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增模板 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'clarity:note-edit-line',
                onClick: handleDesign.bind(null, record),
              },
              {
                icon: 'clarity:note-edit-line',
                onClick: handleWrite.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <TemplateModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getTemplateList, delTemplate } from '/@/api/form/template';

  import { useModal } from '/@/components/Modal';
  import TemplateModal from './TemplateModal.vue';

  import { columns, searchFormSchema } from './template.data';

  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'TemplateManagement',
    components: { BasicTable, TemplateModal, TableAction },
    setup() {
      const go = useGo();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '模板列表',
        api: getTemplateList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 220,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDesign(record: Recordable) {
        go('/form/template/design?id=' + record.id);
      }

      function handleWrite(record: Recordable) {
        go('/form/template/write?form_template_id=' + record.id);
      }

      async function handleDelete(record: Recordable) {
        await delTemplate({ id: record.id });
        handleSuccess();
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDesign,
        handleWrite,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
