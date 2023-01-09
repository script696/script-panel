import $api from "../../api/api";
import { USER_ENDPOINTS } from "../../api/constants/api_endpoints";

class User {
  static fetchGetUser() {
    return $api.get(`${USER_ENDPOINTS.BASE}/${USER_ENDPOINTS.GET_USER}`);
  }

  static fetchUpdateUser(userData: any) {
    return $api.put(
      `${USER_ENDPOINTS.BASE}/${USER_ENDPOINTS.UPDATE_USER}`,
      userData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
  }
}

export default User;
