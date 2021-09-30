import axios from "axios";

const MOVIES_REST_API_URL  = 'http://loalhost:3000/api/moviedata';

class MovieRestServices  {

    getMovies(){
        return axios.get(MOVIES_REST_API_URL);
    }
}

export default new MovieRestServices();