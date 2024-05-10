import { AccountListItem, AccountListGetResultModel, AccountParams } from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  CreateUser = '/system/user/create',
  UpdateUser = '/system/user/update',
  ReadUser = '/system/user/read',
  DelUser = '/system/user/del',
  listByPage = '/system/user/list',
  IsUserExist = '/system/user/userExist',
}

export const createUser = (data?: AccountParams) =>
  defHttp.post<AccountListGetResultModel>(
    { url: Api.CreateUser, data },
    { successMessageMode: 'message', errorMessageMode: 'message' },
  );

export const updateUser = (data?: AccountParams) =>
  defHttp.post<AccountListGetResultModel>(
    { url: Api.UpdateUser, data },
    { successMessageMode: 'message', errorMessageMode: 'message' },
  );

export const readUser = (params?: AccountListItem) =>
  defHttp.get<AccountParams>({ url: Api.ReadUser, params });

export const delUser = (params?: AccountListItem) =>
  defHttp.get<AccountListGetResultModel>(
    { url: Api.DelUser, params },
    { successMessageMode: 'message', errorMessageMode: 'message' },
  );

export const getListByPage = (params?: AccountListItem) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.listByPage, params });

export const isAccountExist = (username: string) =>
  defHttp.post({ url: Api.IsUserExist, params: { username } }, { errorMessageMode: 'none' });
