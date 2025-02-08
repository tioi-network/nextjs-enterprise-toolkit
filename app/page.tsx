import { Metadata } from "next"
import { getSession } from "@auth0/nextjs-auth0"
import { Button } from "components/Button"

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default async function Web() {
  const session = await getSession()

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-(--breakpoint-xl) mx-auto grid px-4 py-8 text-center lg:py-16">
        <div className="mx-auto place-self-center">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Next.js Enterprise Boilerplate
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            Jump start your enterprise project with our feature-packed, high-performance Next.js boilerplate! Experience
            rapid UI development, AI-powered code reviews, and an extensive suite of tools for a smooth and enjoyable
            development process.
          </p>
          {session?.user ? (
            <section>
              <h2 className="">Welcome, {session.user.given_name}!</h2>
              <Button href="/api/auth/logout">Logout</Button>
            </section>
          ) : (
            <Button href="/api/auth/login">Login</Button>
          )}
        </div>
      </div>
    </section>
  )
}
