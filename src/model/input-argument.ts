export default class InputArgument {
    private _name: string;
    private _type: string;

    public constructor(name: string, type: string) {
      this._name = name
      this._type = type
    }

    public get name(): string {
      return this._name
    }

    public get type(): string {
      return this._type
    }
}
