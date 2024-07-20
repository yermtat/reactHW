import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectInfo, editInfo } from "./store/infoSlice";

export default function Edit() {
  const user = useSelector(selectInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = useRef();
  const email = useRef();
  const name = useRef();
  const surname = useRef();
  const age = useRef();
  const workplace = useRef();
  const position = useRef();

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInfo = {
      username: username.current.value,
      email: email.current.value,
      name: name.current.value,
      surname: surname.current.value,
      age: age.current.value,
      workplace: workplace.current.value,
      position: position.current.value,
    };

    dispatch(editInfo(newInfo));

    navigateTo("/info");
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-red-300 rounded-[30px] m-4 p-4">
        <h1 className="font-bold text-4xl text-center m-4">Userinfo</h1>
        <div className="grid gap-4">
          <form onSubmit={handleSubmit}>
            <div>
              <label for="username" className="font-mono text-xl m-5">
                Username:
              </label>
              <input
                className="border rounded-lg w-full"
                type="text"
                id="username"
                defaultValue={user.username}
                ref={username}
              />
            </div>

            <div>
              <label for="email" className="font-mono text-xl m-5">
                Email:
              </label>{" "}
              <input
                className="border rounded-lg w-full"
                type="email"
                id="email"
                defaultValue={user.email}
                ref={email}
              />
            </div>

            <div>
              {" "}
              <label for="name" className="font-mono text-xl m-5">
                Name:{" "}
              </label>{" "}
              <input
                className="border rounded-lg w-full"
                type="text"
                id="name"
                defaultValue={user.name}
                ref={name}
              />
            </div>

            <div>
              {" "}
              <label for="surname" className="font-mono text-xl m-5">
                Surname:
              </label>
              <input
                className="border rounded-lg w-full"
                type="text"
                id="surname"
                defaultValue={user.surname}
                ref={surname}
              />
            </div>

            <div>
              {" "}
              <label for="age" className="font-mono text-xl m-5">
                Age:{" "}
              </label>
              <input
                className="border rounded-lg w-full"
                type="number"
                id="age"
                defaultValue={user.age}
                ref={age}
              />
            </div>

            <div>
              {" "}
              <label for="workplace" className="font-mono text-xl m-5">
                Workplace:
              </label>
              <input
                className="border rounded-lg w-full"
                type="text"
                id="workplace"
                defaultValue={user.workplace}
                ref={workplace}
              />
            </div>

            <div>
              <label for="position" className="font-mono text-xl m-5">
                Position:
              </label>
              <input
                className="border rounded-lg w-full"
                type="text"
                id="workplace"
                defaultValue={user.position}
                ref={position}
              />
            </div>

            <div className="flex justify-center m-9">
              <button
                type="submit"
                class="bg-blue-200 border-7 border-black lg:rounded-xl w-24 h-10 hover:text-blue-600 hover:bg-gray-200 text-center"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
