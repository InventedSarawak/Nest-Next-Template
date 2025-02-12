'use client'
import useFetch from '../hooks/use-fetch'

export default function Page() {
    const { data, loading, error }: { data: any; loading: boolean; error: Error | null } = useFetch(
        `${process.env.NEXT_PUBLIC_API_SERVER}/`
    )

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-slate-900 text-lg text-white">Loading...</div>
        )
    }

    if (error) {
        return (
            <div className="flex h-screen items-center justify-center bg-slate-900 text-lg text-red-400">
                Error: {error.message}
            </div>
        )
    }

    return (
        <div className="flex h-screen items-center justify-center bg-slate-950 p-6">
            <div className="w-full max-w-3xl rounded-2xl bg-white/10 p-8 shadow-lg backdrop-blur-md">
                <h2 className="text-center text-4xl font-bold text-blue-500">Next-Next Monorepo</h2>
                <p className="mt-4 text-center text-gray-300">
                    This is a monorepo template using Next.js and NestJS, with Tailwind CSS and shadcn configured.
                </p>

                <div className="mt-6 space-y-4 text-white">
                    <h3 className="text-xl font-semibold">Features:</h3>
                    <ul className="list-inside list-disc space-y-1 text-gray-300">
                        <li>⚡ Next.js 15 with Turbopack</li>
                        <li>📦 Monorepo setup using Turborepo</li>
                        <li>✅ Shared ESLint, Prettier, & TypeScript configs</li>
                        <li>🔐 Authentication with NextAuth.js</li>
                        <li>🛠️ Form validation with Zod & react-hook-form</li>
                        <li>📊 Data visualization with Recharts</li>
                        <li>📜 API documentation with Swagger</li>
                        <li>🔥 Frontend & Backend HMR (Hot Module Replacement)</li>
                    </ul>
                </div>

                <div className="mt-6 text-center text-lg text-blue-400">
                    <p>
                        Fetched Data: <span className="font-semibold text-white">{data?.message}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
