<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="500px"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm">
      <template #menu="{ model, field }">
        <BasicTree
          v-model:value="model[field]"
          :treeData="treeData"
          :fieldNames="{ title: 'name', key: 'id' }"
          checkable
          toolbar
          title="菜单分配"
          @check="onCheck"
        />
      </template>
    </BasicForm>
  </BasicDrawer>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './role.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { BasicTree, TreeItem } from '/@/components/Tree';

  import { getMenuList } from '/@/api/system/menu';
  import { createRole, updateRole, getRole } from '/@/api/system/role';

  const emit = defineEmits(['success', 'register']);
  const isUpdate = ref(true);
  const updateId = ref(null);
  const treeData = ref<TreeItem[]>([]);
  const halfCheckedKeys = ref<TreeItem[]>([]);

  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    labelWidth: 90,
    baseColProps: { span: 24 },
    schemas: formSchema,
    showActionButtonGroup: false,
  });

  const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
    resetFields();
    setDrawerProps({ confirmLoading: false });
    // 需要在setFieldsValue之前先填充treeData，否则Tree组件可能会报key not exist警告
    if (unref(treeData).length === 0) {
      treeData.value = (await getMenuList()) as any as TreeItem[];
    }
    isUpdate.value = !!data?.isUpdate;
    if (unref(isUpdate)) {
      updateId.value = data.record.id;
      const role = await getRoleDetails(updateId.value);
      setFieldsValue({
        ...role,
      });
    }
  });
  // 获取角色信息详情
  const getRoleDetails = async (id) => {
    let role = await getRole({ id });
    let menu = role.sys_role_menus.map((item) => {
      return item.sys_menu_id;
    });
    let ids = resolveAllEunuchNodeId(treeData.value, menu, []);
    halfCheckedKeys.value = menu.filter((v: any) => ids.every((val: any) => val != v));
    return {
      ...role,
      menu: ids,
    };
  };
  // 获取角色清单中-已勾选角色
  const resolveAllEunuchNodeId = (json: any[], idArr: any[], temp: any[] = []) => {
    for (const item of json) {
      if (item.children && item.children.length !== 0) {
        resolveAllEunuchNodeId(item.children, idArr, temp);
      } else {
        temp.push(...idArr.filter((id) => id === item.id));
      }
    }
    return temp;
  };

  // 选中事件-将半选中节点信息存储下来
  const onCheck = (val, event: { halfCheckedKeys: any }) => {
    halfCheckedKeys.value = event.halfCheckedKeys;
  };

  const getTitle = computed(() => (!unref(isUpdate) ? '新增角色' : '编辑角色'));

  async function handleSubmit() {
    try {
      const values = await validate();
      setDrawerProps({ confirmLoading: true });
      // TODO custom api
      values.sys_role_menus = await getRoleMenuIds(values.menu, halfCheckedKeys.value);
      isUpdate.value
        ? await updateRole({ ...values, id: updateId.value })
        : await createRole({ ...values });
      closeDrawer();
      emit('success');
    } finally {
      setDrawerProps({ confirmLoading: false });
    }
  }
  // 组装后端需要的角色菜单关系
  const getRoleMenuIds = (checkList, halfCheckList) => {
    let list = [...checkList, ...halfCheckList];
    let sys_role_menus: Array<object> = [];
    Array.from(new Set(list)).forEach((item) => {
      sys_role_menus.push({
        sys_menu_id: item,
      });
    });
    return sys_role_menus;
  };
</script>
