export const isNil = <T>(arg: T | undefined | null) => {
    return arg == undefined;
}