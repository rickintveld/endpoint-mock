import FakeApiRepository from '../repository/faker-api-repository'
import InputArgument from '../model/input-argument'

export default class FakeApiService {
    private repository: FakeApiRepository;

    constructor(argumentSet: Array<InputArgument>, quantity: number) {
      this.repository = new FakeApiRepository(argumentSet, quantity)
    }

    url(): string {
      return this.repository.url.href
    }

    async fetch(): Promise<string> {
      const response = await this.repository.fetch()

      return response
    }
}
