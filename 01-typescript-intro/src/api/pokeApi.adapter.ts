import axios from "axios";

export interface PokeApiAdapter {
    get<T>(url: string): Promise<T>;
}

export class PokeApiFetch implements PokeApiAdapter {
    // private readonly fetch = fetch;

    async get<T>(url: string) {
        //peticion get
        const resp = await fetch(url);
        const data: T = await resp.json();
        return data;
    }

    // async post(url: string, data: object) {}

    // async patch(url: string, data: object) {}

    // async delete(url: string) {}
}

export class PokeApiAxios implements PokeApiAdapter {
    private readonly axios = axios;

    async get<T>(url: string) {
        //peticion get
        const { data } = await this.axios.get<T>(url);
        return data;
    }

    // async post(url: string, data: object) {}

    // async patch(url: string, data: object) {}

    // async delete(url: string) {}
}
