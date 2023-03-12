

import instance from "@/app/service/axiosApi";

async function getUser(userId: string | undefined) {
    const res =await instance.get(`users/${userId}`)
    if (!res) {
        throw new Error("failed to fetch");
      }
      return res.data

}

export default getUser