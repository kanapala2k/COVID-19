// import type { Route } from "../routes/+types/home";

// export async function searchService({params}: Route.ClientLoaderArgs) {
//     const paramBody = {
//         query: params.semantic
//     }
//     const res = await fetch("url", {
//         method: "POST",
//         body: paramBody
//     })
//     const documents = await res.json()
//     return documents
// }

import axios from 'axios'

export class BaseService {
  _apiNameSpace = ''
    token = ''

  constructor (apiNameSpace: string) {
    this._apiNameSpace = apiNameSpace
  }

  _dataServiceUriFor (action: string) {
    return `${localStorage.getItem('SERVICE_BASE_URI') || '/api'}/${action}`
  }

  _fetchRaw (uri: string, params: object = {}, method: string = 'GET') {
    let actualUri = this._dataServiceUriFor(uri)
    const request = {
      method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: 0,
        'Access-Control-Allow-Methods': 'POST, GET',
        'Access-Control-Allow-Origin': '*'
      }
    }

    if (this.token) {
      request.headers.Authorization = `Bearer ${this.token}`
    }

    if (method.toLocaleLowerCase() != 'get' && params != {}) {
      request.data = params
    } else
      if (params != {}) {
        actualUri += `?${new URLSearchParams(params)}`
      }

    return axios(actualUri, request)
  }
}
