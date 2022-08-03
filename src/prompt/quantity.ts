import {prompt} from 'inquirer'
import Question from '../contracts/prompt/question'

export default class Quantity implements Question<number> {
  async ask(): Promise<number> {
    const quantity = await prompt([
      {
        type: 'number',
        name: 'quantity',
        message: 'How response objects do you need',
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
      return answer.quantity
    })
    .catch(error => console.log(error))

    return quantity
  }
}
