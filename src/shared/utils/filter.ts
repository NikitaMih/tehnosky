import { parameter } from "../../models/parameters.type";

export const filterData = (search: string, parameters: parameter[]) => {
    return parameters.filter((parameter: parameter) => !parameter.parameter.title.indexOf(search));
};

export const sortData = (decrease: boolean ,parameters: parameter[]) => {
    const res = [...parameters].sort((a: parameter, b: parameter) => {
        const prev = a.parameter.title;
        const next = b.parameter.title
        if (prev.toLowerCase() < next.toLowerCase()) {
          return -1;
        }
        if (prev.toLowerCase() > next.toLowerCase()) {
          return 1;
        }
        return 0;
    })
    return decrease ? res : res.reverse();
};
