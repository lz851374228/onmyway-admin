import {
  RoleParams,
  RolePageParams,
  RolePageListGetResultModel,
  RoleListGetResultModel,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  CreateRole = '/system/role/create',
  UpdateRole = '/system/role/update',
  ReadRole = '/system/role/read',
  DelRole = '/system/role/del',
  ListByPage = '/system/role/list',

  SetRoleStatus = '/system/role/setRoleStatus',
  GetAllRoleList = '/system/role/findAll',
}

export const createRole = (params?: RoleParams) =>
  defHttp.post<RoleListGetResultModel>(
    { url: Api.CreateRole, data: params },
    { successMessageMode: 'message', errorMessageMode: 'message' },
  );

export const updateRole = (params?: RoleParams) =>
  defHttp.post<RoleListGetResultModel>(
    { url: Api.UpdateRole, data: params },
    { successMessageMode: 'message', errorMessageMode: 'message' },
  );

export const getRole = (params?: RoleParams) =>
  defHttp.get<RoleParams>({ url: Api.ReadRole, params });

export const delRole = (params?: RoleParams) =>
  defHttp.get<RoleParams>(
    { url: Api.DelRole, params },
    { successMessageMode: 'message', errorMessageMode: 'message' },
  );

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.ListByPage, params });

export const setRoleStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.SetRoleStatus, params: { id, status } });

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });
