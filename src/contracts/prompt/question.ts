export default interface Question<T> {
    ask(): Promise<T>;
}
