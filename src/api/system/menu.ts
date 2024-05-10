import { MenuParams, MenuListGetResultModel } from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  CreateMenu = '/system/menu/create',
  UpdateMenu = '/system/menu/update',
  ReadMenu = '/system/menu/read',
  DeleteMenu = '/system/menu/del',
  MenuList = '/system/menu/getMenuList',
}

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
