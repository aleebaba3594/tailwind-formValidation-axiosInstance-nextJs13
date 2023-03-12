
import instance from "@/app/service/axiosApi";

async function getAllUsers(url:string) {
  const res = await instance.get(`${url}`);
  if (!res) {
    throw new Error("failed to fetch all users");
  }
  return res.data;
}

export default getAllUsers;
