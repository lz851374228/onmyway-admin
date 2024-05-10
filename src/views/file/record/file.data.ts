import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '文件UUID',
    dataIndex: 'uuid',
    width: 200,
  },
  {
    title: '文件名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '文件类型',
    dataIndex: 'type',
    width: 180,
  },
  {
    title: '文件大小',
    dataIndex: 'size',
    width: 50,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'uuid',
    label: '文件UUID',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'name',
    label: '文件名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'type',
    label: '文件类型',
    component: 'Input',
    colProps: { span: 8 },
  },
];
