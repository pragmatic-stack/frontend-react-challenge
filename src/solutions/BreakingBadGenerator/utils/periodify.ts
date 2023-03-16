import {periodicElements} from "../../../constants";

const periodify = (str: string) => {
    const length = str.length;
    let result: string[] = [];

    for (let i = 0; i < length; i++) {
        const oneChar = str.charAt(i).toUpperCase();
        const twoChar = `${oneChar}${str.charAt(i + 1)}`;

        if (periodicElements.includes(twoChar)) {
            result = [str.slice(0, i), twoChar, str.slice(i + 2, length)]
            break;
        }

        if (periodicElements.includes(oneChar.toUpperCase())) {
            result = [str.slice(0, i), oneChar, str.slice(i + 1, length)]
            break;
        }

        result = [str, '', '']
    }

    return result;
}

export { periodify }