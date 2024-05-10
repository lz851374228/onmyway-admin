import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type AccountParams = BasicPageParams & {
  id?: number;
  username?: string;
  nickname?: string;
  dept?: number;
  role?: number[];
  sys_department_users?: array<object>[];
  sys_role_users?: array<object>[];
};

export type RoleParams = {
  id?: number;
  name?: string;
  code?: string;
  order?: number;
  status?: string;
  sys_role_menus?: array;
};

export type RolePageParams = BasicPageParams & RoleParams;

export type DeptParams = {
  id?: number;
  name?: string;
  status?: string;
};

export type MenuParams = {
  id?: number;
  parent_id?: number;
  name?: string;
  type?: number;
  order?: number;
  path?: string;
  component?: string;
  icon?: string;
  permission?: string;
  is_frame?: number;
  is_cache?: number;
  visible?: number;
  status?: number;
  remark?: string;
};

export interface AccountListItem {
  id?: string;
  username?: string;
  email?: string;
  nickname?: string;
  role?: number;
  created_at?: string;
  remark?: string;
  status?: number;
}

export interface DeptListItem {
  id: string;
  order: string;
  created_at: string;
  remark: string;
  status: number;
}

export interface MenuListItem {
  id: string;
  orderNo: string;
  createTime: string;
  status: number;
  icon: string;
  component: string;
  permission: string;
}

export interface RoleListItem {
  id: string;
  name: string;
  code: string;
  status: number;
  order: string;
  remark: string;
  created_at: string;
  sys_role_menus: array;
}

/**
 * @description: Request list return value
 */
export type AccountListGetResultModel = BasicFetchResult<AccountListItem>;

export type DeptListGetResultModel = BasicFetchResult<DeptListItem>;

export type MenuListGetResultModel = BasicFetchResult<MenuListItem>;

export type RolePageListGetResultModel = BasicFetchResult<RoleListItem>;

export type RoleListGetResultModel = RoleListItem[];
