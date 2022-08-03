import InputArgument from '../model/input-argument'

export default class InputArgumentFactory {
  public build(name: string, type: string): InputArgument {
    return new InputArgument(name, type)
  }

  public buildMultiple(answers: Record<string, string>, questionNumbers: Array<number>): Array<InputArgument> {
    const inputArguments: Array<InputArgument> = []
    const entries = Object.entries(answers)
    let name: string | undefined
    let type: string | undefined
    for (const index of questionNumbers) {
      for (const entry of entries) {
        if (entry.includes(`name_${index}`)) {
          name = entry.pop()
        }

        if (entry.includes(`type_${index}`)) {
          type = entry.pop()
        }
      }

      if (name && type) {
        inputArguments.push(this.build(name, type))
      }
    }

    return inputArguments
  }
}
