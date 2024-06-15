import { formatDate } from "@/lib/utils";
import { Tag } from "antd";
import Link from "next/link";
import React from "react";
import { siteMetadata } from "@/lib/metadata";
import Header from "@/components/custom/layout/site/Header";

const page = () => {
  const MAX_DISPLAY = 5;
  const posts = [
    {
      slug: "hello-world",
      date: "2022-01-01",
      title: "Hello, World!",
      summary: "This is a blog post about saying hello to the world.",
      tags: ["hello", "world"],
    },
    {
      slug: "hello-nextjs",
      date: "2022-01-02",
      title: "Hello, Next.js!",
      summary: "This is a blog post about saying hello to Next.js.",
      tags: ["hello", "nextjs"],
    },
    {
      slug: "hello-tailwindcss",
      date: "2022-01-03",
      title: "Hello, Tailwind CSS!",
      summary: "This is a blog post about saying hello to Tailwind CSS.",
      tags: ["hello", "tailwindcss"],
    },
    {
      slug: "hello-vite",
      date: "2022-01-04",
      title: "Hello, Vite!",
      summary: "This is a blog post about saying hello to Vite.",
      tags: ["hello", "vite"],
    },
    {
      slug: "hello-vercel",
      date: "2022-01-05",
      title: "Hello, Vercel!",
      summary: "This is a blog post about saying hello to Vercel.",
      tags: ["hello", "vercel"],
    },
  ];

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="divide-y w-full max-w-5xl divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Latest
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.description}
            </p>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && "No posts found."}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post;
              return (
                <li key={slug} className="py-12">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>
                            {formatDate(date, siteMetadata.locale)}
                          </time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read more: "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
        {posts.length > MAX_DISPLAY && (
          <div className="flex max-w-5xl justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="All posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
      </main>
    </>
  );
};

export default page;
