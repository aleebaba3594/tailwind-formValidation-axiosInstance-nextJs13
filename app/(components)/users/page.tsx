import getAllUsers from "@/lib/getAllUsers";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import Link from "next/link";
import BackButton from "../backButton/BackButton";

export default async function Users() {
  const users: User = await getAllUsers("/users");

  return (
    <div className="px-4 mt-0 p-0 sm:px-6 lg:px-8 bg-gray-800">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-100 pt-8">Users</h1>
          <p className="text-sm  text-gray-100 mt-2">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        
          <BackButton 
          text="Go Home"
            className="mt-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none sm:w-auto"
            />
        </div>
      </div>
      <div className="mt-8 flex flex-col ">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="overflow-hidden shadow-sm ring-1 ring-gray-100  ">
              <table className="min-w-full divide-y divide-gray-100 ">
                <thead className="bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-6 lg:pl-8"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
                    >
                      Project
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
                    >
                      Actions
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-gray-800">
                  {users.map((person: User) => {
                    return (
                      <tr key={person.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-100 sm:pl-6 lg:pl-8">
                          {person.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-100">
                          {person.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-100">
                          <Link
                            legacyBehavior
                            href={`http://${person?.website} `}
                          >
                            <a target="_blank" rel="noopener noreferrer">
                              <i className="text-blue-900 underline">
                                {" "}
                                {person?.website}
                              </i>
                            </a>
                          </Link>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                          <Link
                            href={`users/view/${person.id}`}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                             <AiFillEye className="h-6 w-6 text-blue-500 inline"/>
                          </Link>
                          <Link  href={`users/edit/${person.id}`}>
                             <AiFillEdit className="h-6 w-6 text-blue-500 inline"/>
                          </Link>
                             <AiFillDelete className="h-6 w-6 text-blue-500 inline"/>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
