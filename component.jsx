/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gYm9zjaqGSN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between p-4 bg-[#0a0a23] text-white">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg" alt="DocEX Logo" className="h-8" />
          <nav className="hidden space-x-4 md:flex">
            <Link href="#" className="text-white" prefetch={false}>
              Products
            </Link>
            <Link href="#" className="text-white" prefetch={false}>
              Solutions
            </Link>
            <Link href="#" className="text-white" prefetch={false}>
              Platform
            </Link>
            <Link href="#" className="text-white" prefetch={false}>
              Resources
            </Link>
            <Link href="#" className="text-white" prefetch={false}>
              Company
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="secondary" className="bg-purple-600 text-white">
            REQUEST DEMO
          </Button>
          <Link href="#" className="text-white" prefetch={false}>
            Sign in
          </Link>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center space-y-8 py-16 text-center md:flex-row md:space-y-0 md:space-x-8 md:text-left bg-white text-black">
        <div className="max-w-lg space-y-4">
          <h1 className="text-4xl font-bold">Process 100% of Complex Documents with DocEX</h1>
          <p className="text-lg">
            Automate business processes end-to-end with guaranteed results using DocEX Intelligent Document Processing
            (IDP).
          </p>
          <div className="flex space-x-4">
            <Button variant="default" className="bg-purple-600 text-white">
              View Product
            </Button>
            <Button variant="outline" className="border-black text-black">
              Book Demo
            </Button>
          </div>
        </div>
        <div className="max-w-lg">
          <img src="/placeholder.svg" alt="Document Example" className="rounded-lg" />
        </div>
      </main>
      <section className="bg-[#0a0a23] text-white py-16">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-8">
          <div className="max-w-lg">
            <img src="/placeholder.svg" alt="AI Brain" className="rounded-lg" />
          </div>
          <div className="max-w-lg space-y-4">
            <h2 className="text-3xl font-bold">Generative AI for Documents with DocEX</h2>
            <p className="text-lg">
              Take advantage of the latest Large Language Models (LLMs) to solve document automation challenges.
            </p>
            <Button variant="default" className="bg-purple-600 text-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white text-black py-16">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-8">
          <div className="max-w-lg space-y-4">
            <h2 className="text-3xl font-bold">Explore Our Integrations</h2>
            <p className="text-lg">
              DocEX seamlessly integrates with a wide range of business applications to streamline your workflows.
            </p>
            <div className="flex space-x-4">
              <Button variant="default" className="bg-purple-600 text-white">
                View Integrations
              </Button>
              <Button variant="outline" className="border-black text-black">
                Contact Sales
              </Button>
            </div>
          </div>
          <div className="max-w-lg">
            <img src="/placeholder.svg" alt="DocEX Integrations" className="rounded-lg" />
          </div>
        </div>
      </section>
      <section className="bg-[#0a0a23] text-white py-16">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-8">
          <div className="max-w-lg">
            <img src="/placeholder.svg" alt="Latest AI Models" className="rounded-lg" />
          </div>
          <div className="max-w-lg space-y-4">
            <h2 className="text-3xl font-bold">Latest AI Models</h2>
            <p className="text-lg">
              Benefit from innovative AI models built by Amazon, Google, OpenAI, and more. Leverage GPT-4 and other
              cutting-edge AI to solve document automation challenges.
            </p>
            <div className="flex space-x-4">
              <Button variant="default" className="bg-purple-600 text-white">
                View Platform Architecture
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
