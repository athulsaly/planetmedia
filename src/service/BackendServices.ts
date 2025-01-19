import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosHeaders,
} from "axios";

const apiKey = process.env.NEXT_PUBLIC_API_KEY!;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
const tokenParam = process.env.NEXT_PUBLIC_TOKEN!;

function useBackendService() {
  // Create an Axios instance with default configuration
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Interceptor to attach API key and JWT token to every request
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (!config.headers) {
        config.headers = new AxiosHeaders();
      }
      const token = localStorage.getItem(tokenParam);
      config.headers.set("x-api-key", apiKey);
      if (token) config.headers.set("Authorization", `Bearer ${token}`);

      return config;
    }
  );

  // Generic GET method
  const get = async <T>(
    endpoint: string,
    params?: Record<string, unknown>
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.get<T>(endpoint, { params });
  };

  // Generic POST method
  const post = async <T>(
    endpoint: string,
    data?: unknown
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.post<T>(endpoint, data);
  };

  // Generic PUT method
  const put = async <T>(
    endpoint: string,
    data?: unknown
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.put<T>(endpoint, data);
  };

  // Generic DELETE method
  const destroy = async <T>(endpoint: string): Promise<AxiosResponse<T>> => {
    return axiosInstance.delete<T>(endpoint);
  };

  return {
    get,
    post,
    put,
    delete: destroy,
  };
}

export default useBackendService;
