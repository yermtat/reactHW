import React from "react";

export default function ToDoList() {
  return (
    <div>
      <header>
        <div class="h-1/5 w-screen flex items-baseline bg-green-200">
          <a href="#" class="m-2">
            <span>Log In</span>
          </a>
          <a href="#" class="m-2">
            <span>Register</span>
          </a>
        </div>
      </header>

      <div>
        <div class="h-screen w-screen flex justify-center items-center dark:bg-gray-900">
          <div class="grid gap-8">
            <ul class="flex">
              <li class="m-20">
                <div
                  id="back-div"
                  class="bg-gradient-to-r bg-green-200 bg-green-200 rounded-[70px] m-4"
                >
                  <div class="border-[150px] border-transparent rounded-[70px] bg-green-200 shadow-lg  m-2">
                    <form action="#" method="post" class="space-y-4">
                      <input
                        id="taskInput"
                        class="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                        type="text"
                        placeholder="Enter a task"
                        required
                      />
                      <input
                        id="dateInput"
                        class="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                        type="date"
                        placeholder="Due"
                        required
                      />
                    </form>
                  </div>
                </div>
              </li>
              <li class="m-20">
                <div
                  id="back-div2"
                  class="bg-gradient-to-r bg-green-200 bg-green-200 rounded-[70px] m-4"
                >
                  <div class="border-[170px] border-transparent rounded-[70px] bg-green-200 shadow-lg m-2">
                    <div>
                      <h3 class="font-serif">Task 1</h3>
                      <h3 class="font-serif">Task 2</h3>
                      <h3 class="font-serif">Task 3</h3>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
