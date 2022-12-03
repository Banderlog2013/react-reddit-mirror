
function pickFromSynteticEvent<T extends HTMLElement>() {
    return <K extends keyof T>(key: K) =>
    (e: React.SyntheticEvent<T>) =>
    (e.currentTarget[key]);
}