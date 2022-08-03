export default interface Repository<T> {
    fetch(): Promise<T>;
}
