
"use client"
import BackButton from "@/app/(components)/backButton/BackButton";
import getUser from "@/lib/getUser";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

 function EditUserPage()  {
  const [userData, setUserData] = useState<User>();
  const userId = usePathname().split("/").pop();
  useEffect(() => {
    getUser(userId).then((res) => {
      setUserData(res);
    });
  }, []);
  const handleSubmit=()=>{
    console.log("submit func is called")
  }
  return (
    <div className="space-y-6 bg-gray-800">
      <div className=" bg-gray-800  px-4 py-5 sm:p-16 text-gray-100">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6">
              Personal Information 
            </h3>
            <p className="mt-1 text-sm">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium"
                >
                  First name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  defaultValue={userData?.username}
                  className="text-gray-800 mt-1 block w-full shadow-sm px-2 py-2  shadow-blue-600 focus:outline-none sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium"
                >
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  defaultValue={userData?.name}
                  className="text-gray-800 mt-1  px-2 py-2  shadow-blue-600 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium"
                >
                  Email address
                </label>
                <input
                  type="text"
                  placeholder="Email adress"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  defaultValue={userData?.email}
                  className="text-gray-800 mt-1  px-2 py-2  shadow-blue-600 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="text-gray-800 mt-1 block w-full py-2 px-3  shadow-blue-600 focus:outline-none border border-gray-300 bg-white rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium"
                >
                  Address
                </label>
                <input
                  placeholder="Address"
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  defaultValue={`${userData?.address.suite} ${userData?.address.street} ${userData?.address.city}`}
                  className="text-gray-800 mt-1  px-2 py-2  shadow-blue-600 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium">
                  City
                </label>
                <input
                  placeholder="City"
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  defaultValue={userData?.address.city}
                  className="text-gray-800 mt-1  px-2 py-2  shadow-blue-600 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium">
                  State / Province
                </label>
                <input
                  placeholder="State/ Province"
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  defaultValue="Canada"
                  className="text-gray-800 mt-1  px-2 py-2  shadow-blue-600 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium"
                >
                  ZIP / Postal code
                </label>
                <input
                  placeholder="Zip Code"
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  defaultValue={userData?.address.zipcode}
                  autoComplete="postal-code"
                  className="text-gray-800 mt-1  px-2 py-2  shadow-blue-600 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end sm:mr-16 xsm:mr-4 pb-2">
        <BackButton
          text="Cancel"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />

        <button
        onClick={handleSubmit}
          type="submit"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </div>
  );
}
export default EditUserPage