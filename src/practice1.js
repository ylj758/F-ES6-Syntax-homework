const parseData = input => {
    let {data, column} = input;
    let output = data.map(person => {
        return Object.assign({}, ...(person.map((value, i) => {
            return {[column[i].name]: value}
        })))
    });
    return output;
}

export {parseData};
