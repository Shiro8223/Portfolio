export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24 text-center">
      <div className="max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-pink-600">
          Software engineer • web developer
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tight text-black">
          Shaun Taylor
        </h1>
        <p className="mt-5 text-xl md:text-2xl text-zinc-700">
          I build thoughtful digital products that blend clean design with practical engineering.
        </p>
        <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-zinc-600">
          I’m a software engineer focused on modern web experiences, product thinking, and building tools that are both useful and enjoyable to use.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pink-600"
          >
            View my work
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-pink-400 hover:text-pink-600"
          >
            About me
          </a>
        </div>
      </div>
    </section>
  );
}
