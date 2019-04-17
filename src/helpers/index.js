export const formatThousandSeparator = (x, separator = '.') => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export const random = (x = 0) => {
    return Math.floor(Math.random() * x) + 1;
}