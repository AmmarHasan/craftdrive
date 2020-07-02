import { environment } from '../environments/environment';

export const config = {
  apiUrl: environment.production ? 'https://rocky-ocean-68053.herokuapp.com/api' : 'http://localhost:3000/api'
};
