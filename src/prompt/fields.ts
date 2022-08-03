import {prompt} from 'inquirer'
import Question from '../contracts/prompt/question'

export default class Fields implements Question<Array<number>> {
  async ask(): Promise<Array<number>> {
    const numberOfFields = await prompt([
      {
        type: 'number',
        name: 'total',
        message: 'How many fields do you need?',
        validate(value) {
          const answer = Number.parseInt(value, 10)
          if (typeof answer !== 'number' && answer > 0) {
            return 'Only numbers are allowed!'
          }

          return true
        },
      },
    ])
    .then(function (answer) {
      return answer.total
    })
    .catch(error => console.log(error))

    return [...Array.from({length: numberOfFields}).keys()].map(x => x + 1)
  }
}
