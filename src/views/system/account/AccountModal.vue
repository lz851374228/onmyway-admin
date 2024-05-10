<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { accountFormSchema } from './account.data';
  import { getDeptList } from '/@/api/system/dept';
  import { createUser, updateUser, readUser, isAccountExist } from '/@/api/system/account';

  export default defineComponent({
    name: 'AccountModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerForm, { setFieldsValue, updateSchema, resetSchema, resetFields, validate }] =
        useForm({
          labelWidth: 100,
          baseColProps: { span: 24 },
          schemas: accountFormSchema,
          showActionButtonGroup: false,
          actionColOptions: {
            span: 23,
          },
        });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          rowId.value = data.record.id;
          const user = await getUserDetails(rowId.value);
          await updateSchema([
            {
              field: 'username',
              label: '用户名',
              component: 'Input',
              helpMessage: ['无法修改用户名'],
              componentProps: {
                disabled: true,
              },
              rules: [],
              required: false,
            },
          ]);
          setFieldsValue({
            ...user,
          });
        } else {
          resetSchema(accountFormSchema);
        }

        const treeData = await getDeptList();
        updateSchema([
          {
            field: 'pwd',
            show: !unref(isUpdate),
          },
          {
            field: 'dept',
            componentProps: { treeData },
          },
        ]);
      });

      const getUserDetails = async (id: any) => {
        let user = await readUser({ id });
        if (user.sys_department_users && user.sys_department_users.length > 0) {
          user.dept = user.sys_department_users[0].sys_department_id;
        }
        if (user.sys_role_users && user.sys_role_users.length > 0) {
          let roles: number[] = [];
          user.sys_role_users.forEach((item) => {
            roles.push(item.sys_role_id);
          });
          user.role = roles;
        }
        return user;
      };

      const getTitle = computed(() => (!unref(isUpdate) ? '新增账号' : '编辑账号'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);
          if (values.role && values.role.length > 0) {
            let sys_role_users: Array<object> = [];
            values.role.forEach((item) => {
              sys_role_users.push({
                sys_role_id: item,
              });
            });
            values.sys_role_users = sys_role_users;
          }
          if (values.dept) {
            values.sys_department_users = [
              {
                sys_department_id: values.dept,
              },
            ];
          }
          isUpdate.value
            ? await updateUser({ ...values, id: rowId.value })
            : await createUser({ ...values });
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
