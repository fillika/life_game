export const isNil = <T>(arg: T | undefined | null): arg is null | undefined => {
    return arg == undefined;
}