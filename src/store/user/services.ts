import $api from "../../api/api";
import { USER_ENDPOINTS } from "../../api/constants/api_endpoints";

class User {
  static fetchUser() {
    return $api.get(`${USER_ENDPOINTS.BASE}/${USER_ENDPOINTS.GET_USER}`);
  }
}

export default User;
