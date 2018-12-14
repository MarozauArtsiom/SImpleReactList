import axios from 'axios';

export const getCurrencies = (limit = 15) => {
    return axios
        .get(`http://www.nbrb.by/API/ExRates/Currencies`)
        .then(({ data }) => {
            return data
                .filter((x, i) => i < limit)
                .map((
                    {
                        Cur_Name,
                        Cur_QuotName_Eng,
                    }) => ({
                        name: Cur_Name,
                        quot: Cur_QuotName_Eng,
                    }));
        })
}

export const postCurrency = (data) => {
    return axios
        .post('my_url', data);
}
