"use client";
import React, { useState, useEffect } from 'react';
import './TechPortfolio';
import { 
  Globe, 
  Smartphone, 
  Server, 
  Cloud, 
  Shield, 
  TrendingUp, 
  Menu, 
  X, 
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Star,
  Code,
  Database,
  Settings,
  Zap,
  Sun,
  Moon,
  Sparkles
} from 'lucide-react';

const TechPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      icon: Globe,
      title: 'Web App Development',
      description: 'Custom business websites and dashboards',
      features: ['Custom business websites', 'E-commerce platforms', 'Progressive Web Apps (PWA)', 'API integrations'],
      color: 'from-blue-500 to-cyan-500',
      lightColor: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Android app development with modern frameworks',
      features: ['Android apps (Java/Kotlin/Flutter)', 'UI/UX design & prototyping', 'App store deployment', 'Backend services'],
      color: 'from-purple-500 to-pink-500',
      lightColor: 'from-purple-400 to-pink-400'
    },
    {
      icon: Server,
      title: 'Server Administration',
      description: 'Professional server setup and management',
      features: ['Linux & Windows server setup', 'Cloud management (AWS, Azure)', 'Security hardening', 'Backup & disaster recovery'],
      color: 'from-green-500 to-teal-500',
      lightColor: 'from-green-400 to-teal-400'
    },
    {
      icon: Cloud,
      title: 'Web Hosting & Domain',
      description: 'Complete hosting solutions for your business',
      features: ['Shared, VPS, dedicated hosting', 'Domain registration', 'SSL configuration', 'Business email hosting'],
      color: 'from-orange-500 to-red-500',
      lightColor: 'from-orange-400 to-red-400'
    },
    {
      icon: Shield,
      title: 'IT Support & Cybersecurity',
      description: 'Comprehensive security and support services',
      features: ['Firewall & intrusion detection', 'Malware removal', 'Remote monitoring', 'IT consultation'],
      color: 'from-indigo-500 to-purple-500',
      lightColor: 'from-indigo-400 to-purple-400'
    },
    {
      icon: TrendingUp,
      title: 'Additional Services',
      description: 'Strategic tech solutions for growth',
      features: ['SEO & analytics integration', 'Maintenance & support plans', 'DevOps automation', 'Startup consultancy'],
      color: 'from-pink-500 to-rose-500',
      lightColor: 'from-pink-400 to-rose-400'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' },
    { number: '5+', label: 'Years Experience' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc',
      text: 'Exceptional service! They delivered our e-commerce platform ahead of schedule with outstanding quality.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Digital Ventures',
      text: 'Their server administration saved us thousands in downtime. Highly professional team.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      company: 'Growth Marketing',
      text: 'The mobile app they developed exceeded our expectations. Great communication throughout.',
      rating: 5
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'services', 'about', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    interface MousePosition {
      x: number;
      y: number;
    }

    const handleMouseMove = (e: React.MouseEvent | MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode 
      ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
      : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
            isDarkMode ? 'bg-blue-500' : 'bg-blue-300'
          }`}
          style={{
            left: mousePosition.x * 0.02 + '%',
            top: mousePosition.y * 0.02 + '%',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div 
          className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
            isDarkMode ? 'bg-purple-500' : 'bg-purple-300'
          }`}
          style={{
            right: mousePosition.x * 0.01 + '%',
            bottom: mousePosition.y * 0.01 + '%',
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        />
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full backdrop-blur-md border-b z-50 transition-all duration-500 ${
        isDarkMode 
          ? 'bg-black/20 border-white/10' 
          : 'bg-white/70 border-gray-200/50 shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`flex items-center space-x-2 transform transition-all duration-500 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                <Code className="text-white w-6 h-6" />
              </div>
              <span className={`font-bold text-xl transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>TechPro</span>
            </div>
            
            <nav className="hidden md:flex space-x-6 items-center">
              {['hero', 'services', 'about', 'testimonials', 'contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium capitalize transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item 
                      ? 'text-blue-500 dark:text-blue-400' 
                      : isDarkMode 
                        ? 'text-white/70 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {item === 'hero' ? 'Home' : item}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`ml-4 p-2 rounded-full border transition-all duration-300 hover:scale-110 transform ${
                  isDarkMode 
                    ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white' 
                    : 'bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {isDarkMode ? 
                  <Sun className="w-5 h-5 transition-transform duration-500 rotate-0 hover:rotate-180" /> : 
                  <Moon className="w-5 h-5 transition-transform duration-500 rotate-0 hover:rotate-12" />
                }
              </button>
            </nav>
            
            <button
              className={`md:hidden transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className={`md:hidden border-t transition-all duration-300 ${
            isDarkMode 
              ? 'bg-black/90 border-white/10' 
              : 'bg-white/95 border-gray-200'
          }`}>
            <div className="px-4 py-4 space-y-4">
              {['hero', 'services', 'about', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block text-lg capitalize transition-colors hover:scale-105 transform ${
                    isDarkMode 
                      ? 'text-white/70 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item === 'hero' ? 'Home' : item}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`flex items-center space-x-2 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                {isDarkMode ? 
                  <><Sun className="w-5 h-5" /><span>Light Mode</span></> : 
                  <><Moon className="w-5 h-5" /><span>Dark Mode</span></>
                }
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`mb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className={`inline-flex items-center space-x-2 backdrop-blur-sm rounded-full px-6 py-3 mb-6 transition-all duration-500 ${
              isDarkMode 
                ? 'bg-white/10 border border-white/20' 
                : 'bg-white/50 border border-blue-200/50 shadow-lg'
            }`}>
              <Zap className="text-yellow-400 w-5 h-5 animate-pulse" />
              <span className={`text-sm font-medium transition-colors ${
                isDarkMode ? 'text-white/90' : 'text-gray-700'
              }`}>Professional Tech Solutions</span>
              <Sparkles className="text-blue-400 w-4 h-4 animate-spin" />
            </div>
            
            <h1 className={`text-5xl sm:text-7xl font-bold mb-6 leading-tight transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Transform Your 
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent block mt-2 animate-pulse">
                Digital Vision
              </span>
            </h1>
            
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors ${
              isDarkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              We deliver cutting-edge web applications, mobile solutions, and enterprise-grade infrastructure 
              to propel your business into the digital future.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 border ${
                isDarkMode 
                  ? 'border-white/30 hover:border-white/60 text-white hover:bg-white/10' 
                  : 'border-gray-300 hover:border-gray-500 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Get Free Consultation
            </button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-3xl sm:text-4xl font-bold mb-2 transition-all duration-300 group-hover:scale-110 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.number}
                </div>
                <div className={`text-sm transition-colors ${
                  isDarkMode ? 'text-white/60' : 'text-gray-500'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold mb-6 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors ${
              isDarkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              Comprehensive technology solutions tailored to accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group transform hover:scale-105 transition-all duration-500"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className={`backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 h-full ${
                  isDarkMode 
                    ? 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10' 
                    : 'bg-white/70 border-gray-200/50 hover:border-gray-300/70 hover:bg-white/90 shadow-lg hover:shadow-xl'
                }`}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${
                    isDarkMode ? service.color : service.lightColor
                  } flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <service.icon className="text-white w-8 h-8" />
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-4 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className={`mb-6 transition-colors ${
                    isDarkMode ? 'text-white/60' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 group/item">
                        <CheckCircle className="text-green-400 w-5 h-5 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className={`text-sm transition-colors ${
                          isDarkMode ? 'text-white/80' : 'text-gray-700'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        isDarkMode ? 'bg-black/20' : 'bg-gray-50/50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`text-4xl sm:text-5xl font-bold mb-8 transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Why Choose <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">TechPro</span>
              </h2>
              
                <p className={`text-lg mb-8 leading-relaxed transition-colors ${
                isDarkMode ? 'text-white/70' : 'text-gray-600'
                }`}>
                We&apos;re not just another tech company. We&apos;re your strategic partner in digital transformation, 
                combining technical expertise with business acumen to deliver solutions that drive real results.
                </p>
              
              <div className="space-y-6">
                {[
                  { icon: Database, title: 'Scalable Architecture', desc: 'Built for growth and performance' },
                  { icon: Settings, title: 'Custom Solutions', desc: 'Tailored to your unique needs' },
                  { icon: Shield, title: 'Security First', desc: 'Enterprise-grade protection' },
                  { icon: Zap, title: 'Fast Delivery', desc: 'Agile development process' }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 group transform hover:translate-x-2 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <item.icon className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`font-semibold text-lg mb-2 transition-colors ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`transition-colors ${
                        isDarkMode ? 'text-white/60' : 'text-gray-600'
                      }`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className={`backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 border-white/10' 
                  : 'bg-white/70 from-blue-100/50 to-purple-100/50 border-gray-200/50 shadow-xl'
              }`}>
                <div className="grid grid-cols-2 gap-8 text-center">
                  {[
                    { icon: Code, number: '50+', label: 'Technologies Mastered', color: 'text-blue-400' },
                    { icon: Server, number: '99.9%', label: 'Uptime Guarantee', color: 'text-purple-400' },
                    { icon: Shield, number: '24/7', label: 'Security Monitoring', color: 'text-green-400' },
                    { icon: TrendingUp, number: '100%', label: 'Client Satisfaction', color: 'text-orange-400' }
                  ].map((item, index) => (
                    <div key={index} className="space-y-4 group">
                      <item.icon className={`w-12 h-12 mx-auto ${item.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`} />
                      <h3 className={`text-2xl font-bold transition-colors ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.number}
                      </h3>
                      <p className={`transition-colors ${
                        isDarkMode ? 'text-white/60' : 'text-gray-600'
                      }`}>
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold mb-6 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              What Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className={`text-xl transition-colors ${
              isDarkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              Real feedback from businesses we&apos;ve helped transform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 transform hover:scale-105 hover:-rotate-1 ${
                  isDarkMode 
                    ? 'bg-white/5 border-white/10 hover:border-white/20' 
                    : 'bg-white/70 border-gray-200/50 hover:border-gray-300/70 shadow-lg hover:shadow-xl'
                }`}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="text-yellow-400 w-5 h-5 fill-current transform hover:scale-125 transition-transform" 
                      style={{
                        animationDelay: `${i * 100}ms`
                      }}
                    />
                  ))}
                </div>
                
                <p className={`text-lg leading-relaxed mb-6 transition-colors ${
                  isDarkMode ? 'text-white/80' : 'text-gray-700'
                }`}>
                  &quot;{testimonial.text}&quot;
                </p>
                
                <div>
                  <div className={`font-semibold transition-colors ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-sm transition-colors ${
                    isDarkMode ? 'text-white/60' : 'text-gray-500'
                  }`}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        isDarkMode ? 'bg-black/20' : 'bg-gray-50/50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold mb-6 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Get Started</span>?
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors ${
              isDarkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              Let&apos;s discuss your project and transform your ideas into powerful digital solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 ${
              isDarkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/70 border-gray-200/50 shadow-xl'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Send us a message
              </h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`w-full border rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                      isDarkMode 
                        ? 'bg-white/10 border-white/20 text-white placeholder-white/60' 
                        : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`w-full border rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                      isDarkMode 
                        ? 'bg-white/10 border-white/20 text-white placeholder-white/60' 
                        : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className={`w-full border rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    isDarkMode 
                      ? 'bg-white/10 border-white/20 text-white placeholder-white/60' 
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className={`w-full border rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${
                    isDarkMode 
                      ? 'bg-white/10 border-white/20 text-white placeholder-white/60' 
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                ></textarea>
                <button
                  onClick={() => alert('Message sent! We will get back to you soon.')}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-bold mb-6 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Get in touch
                </h3>
                <p className={`mb-8 transition-colors ${
                  isDarkMode ? 'text-white/70' : 'text-gray-600'
                }`}>
                  Ready to take your business to the next level? Contact us today for a free consultation 
                  and let&apos;s discuss how we can help you achieve your goals.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, title: 'Email Us', info: 'contact@techpro.com' },
                  { icon: Phone, title: 'Call Us', info: '+1 (555) 123-4567' },
                  { icon: MapPin, title: 'Visit Us', info: '123 Tech Street, Digital City' }
                ].map((contact, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 group transform hover:translate-x-2 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <contact.icon className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <div className={`font-semibold transition-colors ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {contact.title}
                      </div>
                      <div className={`transition-colors ${
                        isDarkMode ? 'text-white/60' : 'text-gray-600'
                      }`}>
                        {contact.info}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <div className={`rounded-xl p-6 border transition-all duration-500 transform hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 border-white/10' 
                    : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200/50 shadow-lg'
                }`}>
                  <h4 className={`font-semibold mb-2 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Free Consultation
                  </h4>
                  <p className={`text-sm mb-4 transition-colors ${
                    isDarkMode ? 'text-white/70' : 'text-gray-600'
                  }`}>
                    Book a 30-minute strategy session to discuss your project requirements and get expert advice.
                  </p>
                  <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-white/10 hover:bg-white/20 text-white' 
                      : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                  }`}>
                    Schedule Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 sm:px-6 lg:px-8 border-t transition-all duration-500 ${
        isDarkMode ? 'border-white/10' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0 group">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Code className="text-white w-5 h-5" />
              </div>
              <span className={`font-bold text-lg transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                TechPro
              </span>
            </div>
            
            <div className={`text-center md:text-left transition-colors ${
              isDarkMode ? 'text-white/60' : 'text-gray-500'
            }`}>
              © 2025 TechPro Solutions. All rights reserved.
            </div>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy', 'Terms', 'Support'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className={`text-sm transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'text-white/60 hover:text-white' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Custom animations styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.7); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TechPortfolio;