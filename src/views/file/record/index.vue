<template>
  <div>
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <BasicUpload
          :maxSize="20"
          :maxNumber="10"
          @change="handleChange"
          :api="uploadApi"
          class="my-5"
          :emptyHidePreview="true"
        />
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
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
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { BasicUpload } from '/@/components/Upload';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import { columns, searchFormSchema } from './file.data';
  import { uploadApi, getFileListByPage, delFile } from '/@/api/common/index';

  export default defineComponent({
    name: 'FileManagement',
    components: { BasicTable, TableAction, BasicUpload },
    setup() {
      const { createMessage } = useMessage();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload }] = useTable({
        title: '文件列表',
        api: getFileListByPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      async function handleDelete(record: Recordable) {
        await delFile({ id: record.id });
        handleSuccess();
      }

      function handleSuccess() {
        reload();
      }
      function handleChange(list: string[]) {
        createMessage.info(`已上传文件${JSON.stringify(list)}`);
      }

      return {
        uploadApi,
        searchInfo,
        handleChange,
        registerTable,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
