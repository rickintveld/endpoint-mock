export default interface Answer {
    type: string;
    name: string;
    message: string;
    choices?: Array<string>;
}
