import { BaseService } from "./baseService";
import { mockData } from "~/utils/const";

export class SearchService extends BaseService {
    constructor() {
        super('api')
    }

    async submitQuery(semantic: string) {
        if (semantic) {
            const params = {
                query: semantic
            }
            const res = await this._fetchRaw(`search/`, params, 'POST')
            return res.data
        }
    }
}