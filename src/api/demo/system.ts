import {
  AccountParams,
  DeptListItem,
  MenuParams,
  RoleParams,
  RolePageParams,
  MenuListGetResultModel,
  DeptListGetResultModel,
  AccountListGetResultModel,
  RolePageListGetResultModel,
  RoleListGetResultModel,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  AccountList = '/system/getAccountList',
  IsAccountExist = '/system/accountExist',
  DeptList = '/system/getDeptList',
  setRoleStatus = '/system/setRoleStatus',
  MenuList = '/system/menu/getMenuList',
  CreateMenu = '/system/menu/create',
  UpdateMenu = '/system/menu/update',
  DeleteMenu = '/system/menu/delete',
  RolePageList = '/system/getRoleListByPage',
  GetAllRoleList = '/system/getAllRoleList',
}

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params });

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });

export const createMenu = (params?: MenuParams) =>
  defHttp.post<MenuListGetResultModel>(
    { url: Api.CreateMenu, data: params },
    { successMessageMode: 'message', errorMessageMode: 'message' },
  );

export const updateMenu = (params?: MenuParams) =>
  defHttp.post<MenuListGetResultModel>(
    { url: Api.UpdateMenu, data: params },
    { successMessageMode: 'message', errorMessageMode: 'message' },
  );

export const deleteMenu = (params?: MenuParams) =>
  defHttp.post<MenuListGetResultModel>(
    { url: Api.DeleteMenu, data: params },
    { successMessageMode: 'message', errorMessageMode: 'message' },
  );

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params });

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });

export const setRoleStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } });

export const isAccountExist = (account: string) =>
  defHttp.post({ url: Api.IsAccountExist, params: { account } }, { errorMessageMode: 'none' });
