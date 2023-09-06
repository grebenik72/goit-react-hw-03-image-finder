import axios from "axios";
import { paramsForNotify } from "components/App";
import { Notify } from "notiflix";

const KEY = `38389373-066e0672115b08bfa137732cd`;
const URL = "https://pixabay.com/api/";

export async function fetchPhoto(search, page, perPage) {
    const url = `${URL}?key=${KEY}&q=${search}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal`;
    const response = await axios.get(url);
    return response.data;       
};

export function onFetchError() {
    Notify.failure('Oops! Something went wrong! Try reloading the page or make another choice!', paramsForNotify);
};