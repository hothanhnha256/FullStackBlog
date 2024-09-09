import axiosInstance from './axiosIntances';
import { AxiosResponse } from 'axios';

export interface UserProps {
  email: string;
  password: string;
  name: string;
  phone: string;
  dateOfBirth: string;
  description: string;
}

export interface UserUpdateProps {
  email?: string;
  name?: string;
  phone?: string;
  dateOfBirth?: string;
  description?: string;
}

export class UserAPI {
  public async createUser(user: UserProps): Promise<AxiosResponse> {
    return axiosInstance.post('/users', user);
  }
  public async getUsers(): Promise<AxiosResponse> {
    return axiosInstance.get('/users');
  }
  public async getUserById(id: string): Promise<AxiosResponse> {
    return axiosInstance.get(`/users/${id}`);
  }
  public async updateUser(
    id: string,
    user: UserUpdateProps,
  ): Promise<AxiosResponse> {
    return axiosInstance.patch(`/users/${id}`, user);
  }
  public async deleteUser(id: string): Promise<AxiosResponse> {
    return axiosInstance.delete(`/users/${id}`);
  }
  public async updatePassword(
    id: string,
    password: string,
  ): Promise<AxiosResponse> {
    return axiosInstance.patch(`/users/${id}/password`, { password });
  }
}

export interface AdminProps {
  email: string;
  password: string;
}
export class AdminAPI {
  public async login(
    username: string,
    password: string,
  ): Promise<AxiosResponse> {
    return axiosInstance.post('/auth/signinAdmin', { username, password });
  }
  public async signout(): Promise<AxiosResponse> {
    return axiosInstance.post('/auth/signout');
  }
  public async createAdmin(admin: AdminProps): Promise<AxiosResponse> {
    return axiosInstance.post('/admin', admin);
  }
  public async getAdmins(): Promise<AxiosResponse> {
    return axiosInstance.get('/admin');
  }
  public async getAdminById(id: string): Promise<AxiosResponse> {
    return axiosInstance.get(`/admin/${id}`);
  }
  public async updateAdmin(
    id: string,
    admin: AdminProps,
  ): Promise<AxiosResponse> {
    return axiosInstance.patch(`/admin/${id}`, admin);
  }
  public async deleteAdmin(id: string): Promise<AxiosResponse> {
    return axiosInstance.delete(`/admin/${id}`);
  }
}

export interface BlogProps {
  title: string;
  content: string;
}

export class BlogAPI {
  public async createBlog(blog: BlogProps): Promise<AxiosResponse> {
    return axiosInstance.post('/blog', blog);
  }
  public async getBlogs(): Promise<AxiosResponse> {
    return axiosInstance.get('/blog');
  }
  public async getBlogById(id: string): Promise<AxiosResponse> {
    return axiosInstance.get(`/blog/${id}`);
  }
  public async updateBlog(id: string, blog: BlogProps): Promise<AxiosResponse> {
    return axiosInstance.patch(`/blog/${id}`, blog);
  }
  public async deleteBlog(id: string): Promise<AxiosResponse> {
    return axiosInstance.delete(`/blog/${id}`);
  }
}
