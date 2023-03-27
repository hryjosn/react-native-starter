import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

export async function apiHandler<T = any>(
    params: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
    try {
        const apiEndpoint = 'https://apiEndpoint/'
        const request = axios.create({
            baseURL: apiEndpoint,
            timeout: 60 * 1000,
        })
        const res = await request.request<T>({ ...params })
        return res
    } catch (error) {
        const resError = error as AxiosError

        throw resError
    }
}
/* -------------------------- Get charity API -------------------------- */
/**
 * callUserLogin [Post]
 */
export const callUserLogin = (postData: AxiosRequestConfig) =>
    apiHandler({
        url: '/front/pay',
        method: 'post',
        ...postData,
    })
