import { ReactComponent as MemberSvg } from "../../assets/icons/member.svg";
import React, { useEffect, useState } from "react";
import { createHttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import Select from "react-select";
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";

function AddMember({
  setShowAddMemberModalFromParent,
  projectData,
  addMember,
}) {
  console.log("projectData.projectId", projectData.projectId);
  
  //! Set to query data
  const currentUserId = 1;
  useEffect(() => {
    getUsers();
  }, []);

  //set up
  const httpLink = createHttpLink({
    uri: "http://localhost:5000/graphql",
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  const [selectedOption, setSelectedOption] = useState([]);

  function handleMultiChange(option) {
    setSelectedOption(option);
  }
  // query data from user to get email all user
  const [users, setUsers] = useState([]);
  async function getUsers() {
    const { data } = await client.query({
      query: gql`
        query users {
          users {
            userId
            email
          }
        }
      `,
    });
    const userOptions = data.users.map((user) => {
      return {
        value: user.userId,
        label: user.email,
      };
    });
    const filteredOptions = userOptions.filter(
      (option) => option.value !== currentUserId
    );

    setUsers(filteredOptions);
  }
  async function onSubmit(event) {
    event.preventDefault();

    // const members = [
    //   currentUserId.toString(),
    //   ...selectedOption.map((item) => {
    //     return item.value.toString();
    //   }),
    // ];
    const role = "EMPLOYEE"
    const addmember = {
      project : projectData.projectId ,
      user : selectedOption[0].value,
      role,
    }
    addMember(addmember);
    
  }

  return (
    <>
      <div className="opacity-80 fixed inset-0 z-40 bg-black "></div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="w-screen  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white mt-0 font-mono">
            <div className="">
              <div className="text-center p-5 flex-auto justify-center">
                <MemberSvg />
                <h2 className="text-xl font-bold py-4 ">Add Members</h2>
              </div>
              <div className="space-y-4 ">
                <label className="block text-gray-700 text-sm font-normal mb-2 ">
                  Email
                </label>
                {/* <input
                  type="text"
                  placeholder="Email"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300"
                /> */}
                <Select
                  placeholder="Members"
                  defaultValue={selectedOption}
                  onChange={handleMultiChange}
                  options={users}
                  isMulti={true}
                />
              </div>

              <div className="p-3  mt-2 text-center space-x-4 md:block">
                <button
                  className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                  onClick={() => setShowAddMemberModalFromParent(false)}
                >
                  Cancel
                </button>
                <button
                  className="mb-2 md:mb-0 bg-blue-400  px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-500"
                  onClick={onSubmit}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMember;
