import { useRefresh } from '../context/RefreshContext';
export default function Hero() {
  const { refresh } = useRefresh();
  return (
    <section className="h-screen flex items-center justify-center text-center px-4">

      <div>
        <h1 className="text-pink-600 text-5xl md:text-7xl font-bolder">Shaun Taylor</h1>
        <p className="mt-4 text-lg md:text-xl">Aspiring Software Engineer</p>
        <p className="mt-9 md:text-3xl text-gray-900">Building and enhancing modern applications with passion and precision.</p>
      </div>


    </section>
    
  );
}
