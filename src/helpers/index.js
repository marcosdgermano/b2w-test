export const formatThousandSeparator = (x, separator = '.') => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export const translateError = (error) => {
    switch (error) {
      case 'Not found':
        return 'Planeta nao encontrado'
    }
}

export const random = (x) => {
    return Math.floor(Math.random() * x) + 1;
}