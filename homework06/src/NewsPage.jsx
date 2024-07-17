import React from "react";
import { getNews } from "./Items";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const myArticle = await getNews(params.newsId);
  return { myArticle };
}

export default function NewsPage() {
  const { myArticle } = useLoaderData();
  return (
    <div>
      <div>
        <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
          <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header class="mb-4 lg:mb-6 not-format">
                <address class="flex items-center mb-6 not-italic">
                  <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img
                      class="mr-4 w-16 h-16 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Jese Leos"
                    />
                    <div>
                      <a
                        href="#"
                        rel="author"
                        class="text-xl font-bold text-gray-900 dark:text-white"
                      >
                        Jese Leos
                      </a>
                      <p class="text-base text-gray-500 dark:text-gray-400">
                        Graphic Designer, educator & CEO Flowbite
                      </p>
                      <p class="text-base text-gray-500 dark:text-gray-400">
                        <time pubdate datetime={myArticle.date}>
                          {myArticle.date}
                        </time>
                      </p>
                    </div>
                  </div>
                </address>
                <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  {myArticle.title}
                </h1>
              </header>

              <p>{myArticle.text}</p>

              <p class="text-xs m-3 p-2">
                {myArticle.tags.map((x) => (
                  <a class="m-3 hover:text-green-400" href="#">
                    #{x}
                  </a>
                ))}
              </p>

              <section class="not-format">
                <div class="flex justify-between items-center mb-6">
                  <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                    Discussion (20)
                  </h2>
                </div>
                <form class="mb-6">
                  <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <label for="comment" class="sr-only">
                      Your comment
                    </label>
                    <textarea
                      id="comment"
                      rows="6"
                      class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                      placeholder="Write a comment..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                  >
                    Post comment
                  </button>
                </form>
              </section>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}
