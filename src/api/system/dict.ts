import { DeptListItem, DeptParams } from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  CreateDict = '/system/dict/create',
  UpdateDict = '/system/dict/update',
  ReadDict = '/system/dict/read',
  DelDict = '/system/dict/del',
  DictList = '/system/dict/getList',
}

export const createDict = (params?: DeptListItem) =>
  defHttp.post<DeptListGetResultModel>({ url: Api.CreateDict, data: params });

export const updateDict = (params?: DeptListItem) =>
  defHttp.post<DeptListGetResultModel>({ url: Api.UpdateDict, data: params });

export const getDict = (params?: DeptParams) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.ReadDict, params });

export const delDict = (params?: DeptParams) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DelDict, params });

export const getDictList = (params?: DeptListItem) =>
  defHttp.post<DeptListGetResultModel>({ url: Api.DictList, data: params });
