import {prompt} from 'inquirer'
import Answer from '../contracts/value-object/answer'
import FieldTypes from '../utilities/field-types'
import InputArgument from '../model/input-argument'
import InputArgumentFactory from '../factory/input-argument-factory'
import Question from '../contracts/prompt/question'

export default class Answers implements Question<Array<InputArgument>> {
  constructor(private readonly questionNumbers: Array<number>) {
    this.questionNumbers = questionNumbers
  }

  async ask(): Promise<Array<InputArgument>> {
    const questions = new Array<Answer>()
    const factory = new InputArgumentFactory()

    for (const questionNumber of this.questionNumbers) {
      questions.push(
        {
          type: 'list',
          name: 'type_' + questionNumber,
          message: 'What type of field do you need for question ' + questionNumber + '?',
          choices: new FieldTypes().get(),
        },
        {
          type: 'string',
          name: 'name_' + questionNumber,
          message: 'Name of the field?',
        },
      )
    }

    const answers = await prompt(questions)
    .then(function (answers) {
      return answers
    })
    .catch(error => console.log(error))

    return factory.buildMultiple(answers, this.questionNumbers)
  }
}
