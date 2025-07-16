"use client"; // Mark as Client Component for useEffect

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(section => observer.observe(section));

    // Handle logo fade-in
    const logo = document.querySelector('.logo');
    setTimeout(() => logo.classList.add('visible'), 100);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-black text-white">
      <head>
        <title>NexGen AI</title>
        <meta name="description" content="NexGen AI - Your Trusted AI Transformation Partners, offering AI automation services globally from South Africa." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Poppins:wght@600&display=swap" rel="stylesheet" />
      </head>
      <header className="header p-4 flex justify-between items-center fixed w-full z-10 bg-black bg-opacity-90 backdrop-blur-md">
        <div className="logo flex items-center space-x-2 opacity-0 translate-x-[-20px] transition-opacity duration-600 ease-in-out transition-transform duration-600 ease-in-out">
          <img src="https://via.placeholder.com/150?text=NexGen+AI+Logo" alt="NexGen AI Logo" className="h-12" />
          <h1 className="text-xl text-[#00C4FF]">NexGen AI</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-white hover:text-[#00C4FF]">Home</a></li>
            <li><a href="#about" className="text-white hover:text-[#00C4FF]">About Us</a></li>
            <li><a href="#services" className="text-white hover:text-[#00C4FF]">Services</a></li>
            <li><a href="#contact" className="text-white hover:text-[#00C4FF]">Contact Us</a></li>
            <li><a href="#what-is-ai" className="text-white hover:text-[#00C4FF]">What is AI Automation</a></li>
          </ul>
        </nav>
      </header>
      <div className="globe-bg" style={{ background: `url('https://via.placeholder.com/300?text=Custom+Dark+Globe') no-repeat center center`, backgroundSize: 'cover', opacity: 0.2, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
      <section id="home" className="p-6 text-center fade-in max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">NexGen AI</h1>
        <img src="https://via.placeholder.com/300?text=Robot+with+AI+Info" alt="Robot with AI info" className="robot-img" />
        <p className="text-lg leading-relaxed">
          Founded in the vibrant tech hub of South Africa, NexGen AI has emerged as a global leader in AI automation, dedicated to transforming businesses with innovative solutions. Our journey began with a simple vision: to make AI accessible and actionable for companies of all sizes. With a team of seasoned experts, we craft tailored automation strategies that drive efficiency, reduce costs, and unlock new opportunities. Based in Cape Town, we proudly serve clients across continents, understanding that not every business grasps the full potential of AI. That’s why we’re committed to walking you through every step—whether you’re a startup exploring AI or a corporation scaling operations. Our client-centric approach ensures you’re not just adopting technology, but achieving tangible results.
        </p>
        <h2 className="text-3xl mt-6">We don’t just sell AI, we sell results</h2>
        <div className="mt-4 space-y-2">
          <p>‘Increased efficiency by 40% for 15+ clients’ - TechCorp</p>
          <p>‘Reduced costs by 25% with seamless integration’ -, InnoVision</p>
          <p>‘Transformed our workflow an dincresed productivity in just 3 months’ , GlobalSys</p>
        </div>
      </section>
      <div className="w-full py-4 bg-black text-center fade-in">
        <p className="text-[#00C4FF] text-sm">Collaborators: TechCorp, InnoVision, GlobalSys , pierre venatta jewelers, idmaco marketing agency</p>
      </div>
      <section id="about" className="p-6 fade-in max-w-4xl mx-auto">
        <h2 className="text-3xl text-[#00C4FF]">About Us</h2>
        <img src="https://via.placeholder.com/300?text=Robot+with+AI+Info" alt="Robot with AI info" className="robot-img" />
        <p className="mt-4">NexGen AI, headquartered in South Africa, is a pioneering AI automation agency committed to transforming businesses globally. Founded by a team of AI experts, we blend local innovation with international expertise to deliver tailored solutions. Our mission is to demystify AI, ensuring every client—regardless of technical background—can harness its power to achieve measurable outcomes.</p>
      </section>
      <section id="services" className="p-6 fade-in max-w-4xl mx-auto">
        <h2 className="text-3xl text-[#00C4FF]">Services</h2>
        <img src="https://via.placeholder.com/300?text=Robot+with+AI+Info" alt="Robot with AI info" className="robot-img" />
        <p className="mt-4">We offer a range of AI automation services, including:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Process Optimization: Streamline operations with intelligent workflows.</li>
          <li>Custom AI Solutions: Bespoke AI tools designed for your business needs.</li>
          <li>Consulting: Expert guidance to integrate AI into your strategy.</li>
        </ul>
      </section>
      <section id="contact" className="p-6 fade-in max-w-4xl mx-auto">
        <h2 className="text-3xl text-[#00C4FF]">Contact NexGen AI</h2>
        {/* Placeholder for ContactForm - to be implemented as a separate component */}
      </section>
      <section id="what-is-ai" className="p-6 fade-in max-w-4xl mx-auto">
        <h2 className="text-3xl text-[#00C4FF]">What is AI Automation and How Will it Benifit your Business?</h2>
        <img src="https://via.placeholder.com/300?text=Robot+with+AI+Info" alt="Robot with AI info" className="robot-img" />
        <p className="mt-4">AI automation involves using artificial intelligence to automate repetitive tasks, enhance decision-making, and optimize business processes. At NexGen AI, we leverage machine learning, natural language processing, and robotic process automation to deliver efficiency gains, cost reductions, and innovation. Whether it’s automating customer support or analyzing data, AI automation is the future of business scalability.</p>
      </section>
      <style jsx>{`
        .fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
        .logo.visible { opacity: 1; transform: translateX(0); }
        .robot-img { max-width: 300px; height: auto; margin: 1rem auto; }
        .globe-bg { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; background: url('https://via.placeholder.com/300?text=Custom+Dark+Globe') no-repeat center center; background-size: cover; opacity: 0.2; }
      `}</style>
    </div>
  );
}
