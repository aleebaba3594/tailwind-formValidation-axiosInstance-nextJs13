"use client";
import getUser from "@/lib/getUser";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import BackButton from "../../../backButton/BackButton";

function UserPosts() {
  const [userData, setUserData] = useState<User>();

  const userId = usePathname().split("/").pop();
  useEffect(() => {
    getUser(userId).then((res) => {
      setUserData(res);
    });
  }, []);
  return (
    <div className="bg-gray-900 shadow overflow-hidden  min-h-screen text-gray-100">
      <div className="xsm:flex sm:items-center pb-4 xsm:px-6 ">
        <div className="xsm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-100 pt-8">
            Applicant Information
          </h1>
          <p className="text-sm  text-gray-100 mt-2">
            Personal details and application.
          </p>
        </div>
        <span className="mt-4 sm:mt-0 sm:ml-16 xsm:flex-none">
          <BackButton text="Go Back" className="mt-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none sm:w-auto mr-4" />
        </span>
      </div>

      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium ">User Name</dt>
            <dd className="mt-1 text-sm ">{userData?.name}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium ">Last Company</dt>
            <dd className="mt-1 text-sm ">{userData?.company.name}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium ">Email address</dt>
            <dd className="mt-1 text-sm ">{userData?.email}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium ">Portfolio</dt>
            <dd className="mt-1 text-sm ">
              <Link legacyBehavior href={`http://${userData?.website} `}>
                <a target="_blank" rel="noopener noreferrer">
                 <i className="text-blue-900 font-bold text-[20px] underline"> {userData?.website}</i>
                </a>
              </Link>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium ">About</dt>
            <dd className="mt-1 text-sm ">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium ">Attachments</dt>
            <dd className="mt-1 text-sm ">
              <ul
                role="list"
                className="border border-gray-200 rounded-md divide-y divide-gray-200"
              >
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <Bars3Icon
                      className="flex-shrink-0 h-5 w-5 "
                      aria-hidden="true"
                    />
                    <span className="ml-2 flex-1 w-0 truncate">
                      resume_back_end_developer.pdf
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <Link
                      href="/coming-soon"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Download
                    </Link>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <Bars3Icon
                      className="flex-shrink-0 h-5 w-5 "
                      aria-hidden="true"
                    />
                    <span className="ml-2 flex-1 w-0 truncate">
                      coverletter_back_end_developer.pdf
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <Link
                      href="/coming-soon"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Download
                    </Link>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
export default UserPosts;
