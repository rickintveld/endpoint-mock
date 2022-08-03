import axios from 'axios'
import ApiResponse from '../contracts/response/api-response'
import InputArgument from '../model/input-argument'
import Repository from '../contracts/repository/repository'

export default class FakeApiRepository implements Repository<string> {
    public url = new URL('https://fakerapi.it/api/v1/custom');

    constructor(argumentSet: Array<InputArgument>, quantity: number) {
      this.url.searchParams.append('_quantity', quantity.toString())

      for (const inputArgument of argumentSet) {
        this.url.searchParams.append(inputArgument.name, inputArgument.type)
      }
    }

    public async fetch(): Promise<string> {
      try {
        const {status, statusText, data} = await axios.get<ApiResponse>(this.url.href, {
          headers: {
            Accept: 'application/json',
          },
        })

        console.log(`HTTP request status is ${statusText}(${status}).`)

        return JSON.stringify(data, null, 4)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message:', error.message)
          return error.message
        }

        console.log('unexpected error:', error)
        return 'An unexpected error occurred'
      }
    }
}
