import { DeptListItem, DeptParams } from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  CreateDept = '/system/dept/create',
  UpdateDept = '/system/dept/update',
  ReadDept = '/system/dept/read',
  DelDept = '/system/dept/del',
  DeptList = '/system/dept/getDeptList',
}

export const createDept = (params?: DeptListItem) =>
  defHttp.post<DeptListGetResultModel>({ url: Api.CreateDept, data: params });

export const updateDept = (params?: DeptListItem) =>
  defHttp.post<DeptListGetResultModel>({ url: Api.UpdateDept, data: params });

export const getDept = (params?: DeptParams) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.ReadDept, params });

export const delDept = (params?: DeptParams) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DelDept, params });

export const getDeptList = (params?: DeptListItem) =>
  defHttp.post<DeptListGetResultModel>({ url: Api.DeptList, data: params });
