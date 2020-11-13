import { FC } from "react"

const Index: FC = () => {
  return (
    <div>
      <div className="flex items-center">
        <a href="#"><img className="h-8 w-8 md:h-12 md:w-12" src="purpose.png" alt="purpose icon" /></a>
        <span className="text-lg md:text-2xl">Purpose Client</span>
      </div>
      <section className="text-center">
        <div className="inline-flex mx-auto items-center">
          <img className="h-32 w-32 md:h-48 md:w-48" src="https://cdn.svgporn.com/logos/nextjs.svg" alt="nextjs icon" />
          <img className="h-8 w-8 md:h-12 md:w-12 mx-5" src="cross.png" alt="cross icon" height="20" />
          <img className="h-32 w-32 md:h-48 md:w-48" src="https://cdn.svgporn.com/logos/tailwindcss-icon.svg" alt="tailwind icon" width="200" />
        </div>
      </section>
    </div>
  )
}

export default Index