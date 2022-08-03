import {Command} from '@oclif/core'
import Answers from '../prompt/answers'
import FakeApiService from '../service/fake-api-service'
import Fields from '../prompt/fields'
import Quantity from '../prompt/quantity'

export default class Endpoint extends Command {
    static args = [];
    static description = 'Generates a non relational API endpoint with fake data based on your needs';
    static examples = ['./bin/run endpoint'];
    static flags = {};

    public async run(): Promise<void> {
      const quantity = await new Quantity().ask()
      const questionNumbers = await new Fields().ask()
      const answers = await new Answers(questionNumbers).ask()
      const fakeApiService = new FakeApiService(answers, quantity)
      const fakeApiResponse = await fakeApiService.fetch()

      this.log(fakeApiService.url())
      this.log(fakeApiResponse)
    }
}
