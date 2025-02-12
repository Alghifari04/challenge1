import Head from 'next/head';
import Image from 'next/image';
import { FaCode, FaDatabase, FaChartBar, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-white">
      <Head>
        <title>M. Hasby Alghifari - CV Online</title>
        <meta name="description" content="CV Online M. Hasby Alghifari - Data Analyst, Programmer, Database Administrator" />
      </Head>
      
      <header className="text-center p-10">
        <Image src="/picture.jpg" alt="M. Hasby Alghifari" width={150} height={150} className="rounded-full mx-auto border-4 border-white" />
        <h1 className="text-4xl font-bold mt-4">M. Hasby Alghifari</h1>
        <p className="text-xl">Data Analyst | Programmer | Database Administrator</p>
      </header>
      
      <section className="p-6">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p>Saya adalah seorang profesional di bidang teknologi dengan pengalaman dalam analisis data, pemrograman, dan administrasi database.</p>
      </section>
      
      <section className="p-6 bg-white text-black rounded-lg shadow-lg mx-4">
        <h2 className="text-2xl font-bold">Skills</h2>
        <ul className="list-disc pl-6">
          <li className="flex items-center gap-2"><FaChartBar /> Data Analysis</li>
          <li className="flex items-center gap-2"><FaCode /> Programming</li>
          <li className="flex items-center gap-2"><FaDatabase /> Database Administration</li>
        </ul>
      </section>
      
      <section className="p-6">
        <h2 className="text-2xl font-bold">Services</h2>
        <ul className="list-disc pl-6">
          <li>Analisis Data & Visualisasi</li>
          <li>Pengembangan Perangkat Lunak</li>
          <li>Manajemen Database</li>
        </ul>
      </section>
      
      <section className="p-6 bg-white text-black rounded-lg shadow-lg mx-4">
        <h2 className="text-2xl font-bold">Portfolios</h2>
        <p>Coming soon...</p>
      </section>
      
      <section className="p-6">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="flex items-center gap-2"><FaEnvelope /> Email: hasby@example.com</p>
      </section>
      
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2025 M. Hasby Alghifari</p>
      </footer>
    </div>
  );
}
