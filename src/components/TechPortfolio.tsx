"use client";
import React, { useState, useEffect } from 'react';
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
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const typingWords = [
    'Digital Vision',
    'Business Growth',
    'Tech Solutions',
    'Innovation',
    'Success Story',
    'Digital Future'
  ];

  const services = [
    {
      icon: Globe,
      title: 'Web App Development',
      description: 'Custom business websites and dashboards',
      features: ['Custom business websites', 'E-commerce platforms', 'Progressive Web Apps (PWA)', 'API integrations'],
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      lightBg: 'bg-blue-500',
      borderColor: 'border-blue-200'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Android app development with modern frameworks',
      features: ['Android apps (Java/Kotlin/Flutter)', 'UI/UX design & prototyping', 'App store deployment', 'Backend services'],
      bgColor: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700',
      lightBg: 'bg-purple-500',
      borderColor: 'border-purple-200'
    },
    {
      icon: Server,
      title: 'Server Administration',
      description: 'Professional server setup and management',
      features: ['Linux & Windows server setup', 'Cloud management (AWS, Azure)', 'Security hardening', 'Backup & disaster recovery'],
      bgColor: 'bg-emerald-600',
      hoverColor: 'hover:bg-emerald-700',
      lightBg: 'bg-emerald-500',
      borderColor: 'border-emerald-200'
    },
    {
      icon: Cloud,
      title: 'Web Hosting & Domain',
      description: 'Complete hosting solutions for your business',
      features: ['Shared, VPS, dedicated hosting', 'Domain registration', 'SSL configuration', 'Business email hosting'],
      bgColor: 'bg-orange-600',
      hoverColor: 'hover:bg-orange-700',
      lightBg: 'bg-orange-500',
      borderColor: 'border-orange-200'
    },
    {
      icon: Shield,
      title: 'IT Support & Cybersecurity',
      description: 'Comprehensive security and support services',
      features: ['Firewall & intrusion detection', 'Malware removal', 'Remote monitoring', 'IT consultation'],
      bgColor: 'bg-indigo-600',
      hoverColor: 'hover:bg-indigo-700',
      lightBg: 'bg-indigo-500',
      borderColor: 'border-indigo-200'
    },
    {
      icon: TrendingUp,
      title: 'Additional Services',
      description: 'Strategic tech solutions for growth',
      features: ['SEO & analytics integration', 'Maintenance & support plans', 'DevOps automation', 'Startup consultancy'],
      bgColor: 'bg-rose-600',
      hoverColor: 'hover:bg-rose-700',
      lightBg: 'bg-rose-500',
      borderColor: 'border-rose-200'
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

  // Typing effect
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = typingWords[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed, typingWords]);

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

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
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
      ? 'bg-slate-900' 
      : 'bg-gray-50'
    }`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
            isDarkMode ? 'bg-blue-500' : 'bg-blue-300'
          }`}
          style={{
            left: mousePosition.x * 0.02 + '%',
            top: mousePosition.y * 0.02 + '%',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div 
          className={`absolute w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
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
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                <Code className="text-white w-4 h-4 md:w-6 md:h-6" />
              </div>
              <span className={`font-bold text-lg md:text-xl transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>TechNest</span>
            </div>
            
            <nav className="hidden md:flex space-x-6 items-center">
              {['hero', 'services', 'about', 'testimonials', 'contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium capitalize transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item 
                      ? 'text-blue-600' 
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
              
              {/* Desktop Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`ml-4 p-2 rounded-full border transition-all duration-300 hover:scale-110 transform ${
                  isDarkMode 
                    ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white' 
                    : 'bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-700'
                }`}
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                {isDarkMode ? 
                  <Sun className="w-5 h-5 transition-transform duration-500 rotate-0 hover:rotate-180" /> : 
                  <Moon className="w-5 h-5 transition-transform duration-500 rotate-0 hover:rotate-12" />
                }
              </button>
            </nav>
            
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-3 rounded-full border transition-all duration-300 hover:scale-110 transform ${
                  isDarkMode 
                    ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white' 
                    : 'bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-700'
                }`}
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                {isDarkMode ? 
                  <Sun className="w-5 h-5" /> : 
                  <Moon className="w-5 h-5" />
                }
              </button>
              
              {/* Mobile Menu Toggle */}
              <button
                className={`p-2 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
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
                  className={`block w-full text-left text-lg capitalize transition-colors hover:scale-105 transform py-2 ${
                    isDarkMode 
                      ? 'text-white/70 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item === 'hero' ? 'Home' : item}
                </button>
              ))}
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
            <div className={`inline-flex items-center space-x-2 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 transition-all duration-500 ${
              isDarkMode 
                ? 'bg-white/10 border border-white/20' 
                : 'bg-white/50 border border-blue-200/50 shadow-lg'
            }`}>
              <Zap className="text-yellow-500 w-4 h-4 md:w-5 md:h-5 animate-pulse" />
              <span className={`text-xs md:text-sm font-medium transition-colors ${
                isDarkMode ? 'text-white/90' : 'text-gray-700'
              }`}>Professional Tech Solutions</span>
              <Sparkles className="text-blue-500 w-3 h-3 md:w-4 md:h-4 animate-spin" />
            </div>
            
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Transform Your 
              <span className="text-blue-600 block mt-2">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            
            <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 transition-colors ${
              isDarkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              We deliver cutting-edge web applications, mobile solutions, and enterprise-grade infrastructure 
              to propel your business into the digital future.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 px-4 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button 
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 border ${
                isDarkMode 
                  ? 'border-white/30 hover:border-white/60 text-white hover:bg-white/10' 
                  : 'border-gray-300 hover:border-gray-500 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Get Free Consultation
            </button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto px-4 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 transition-all duration-300 group-hover:scale-110 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.number}
                </div>
                <div className={`text-xs sm:text-sm transition-colors ${
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
      <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto transition-colors ${
              isDarkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              Comprehensive technology solutions tailored to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group transform hover:scale-105 transition-all duration-500"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className={`backdrop-blur-sm rounded-2xl p-6 md:p-8 border transition-all duration-300 h-full ${
                  isDarkMode 
                    ? 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10' 
                    : `bg-white/70 ${service.borderColor} hover:shadow-xl hover:bg-white/90`
                }`}>
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl ${isDarkMode ? service.bgColor : service.lightBg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <service.icon className="text-white w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  
                  <h3 className={`text-lg md:text-xl font-bold mb-4 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className={`mb-6 text-sm md:text-base transition-colors ${
                    isDarkMode ? 'text-white/60' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 group/item">
                        <CheckCircle className="text-green-500 w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className={`text-xs md:text-sm transition-colors ${
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
      <section id="about" className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        isDarkMode ? 'bg-black/20' : 'bg-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Why Choose <span className="text-blue-600">TechNest</span>
              </h2>
              
              <p className={`text-base md:text-lg mb-6 md:mb-8 leading-relaxed transition-colors ${
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
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <item.icon className="text-white w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className={`font-semibold text-base md:text-lg mb-2 transition-colors ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm md:text-base transition-colors ${
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
              <div className={`backdrop-blur-sm rounded-2xl p-6 md:p-8 border transition-all duration-500 transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-blue-600/20 border-white/10' 
                  : 'bg-white/70 border-blue-200 shadow-xl'
              }`}>
                <div className="grid grid-cols-2 gap-6 md:gap-8 text-center">
                  {[
                    { icon: Code, number: '50+', label: 'Technologies', color: 'text-blue-500' },
                    { icon: Server, number: '99.9%', label: 'Uptime', color: 'text-purple-500' },
                    { icon: Shield, number: '24/7', label: 'Security', color: 'text-green-500' },
                    { icon: TrendingUp, number: '100%', label: 'Satisfaction', color: 'text-orange-500' }
                  ].map((item, index) => (
                    <div key={index} className="space-y-4 group">
                      <item.icon className={`w-10 h-10 md:w-12 md:h-12 mx-auto ${item.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`} />
                      <h3 className={`text-xl md:text-2xl font-bold transition-colors ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.number}
                      </h3>
                      <p className={`text-xs md:text-sm transition-colors ${
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
      <section id="testimonials" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl transition-colors ${
              isDarkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              Real feedback from businesses we&apos;ve helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`backdrop-blur-sm rounded-2xl p-6 md:p-8 border transition-all duration-500 transform hover:scale-105 hover:-rotate-1 ${
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
                      className="text-yellow-500 w-4 h-4 md:w-5 md:h-5 fill-current transform hover:scale-125 transition-transform" 
                      style={{
                        animationDelay: `${i * 100}ms`
                      }}
                    />
                  ))}
                </div>
                
                <p className={`text-sm md:text-lg leading-relaxed mb-6 transition-colors ${
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
                  <div className={`text-xs md:text-sm transition-colors ${
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
      <section id="contact" className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        isDarkMode ? 'bg-black/20' : 'bg-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to <span className="text-blue-600">Get Started</span>?
            </h2>
            <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto transition-colors ${
              isDarkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              Let&apos;s discuss your project and transform your ideas into powerful digital solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className={`backdrop-blur-sm rounded-2xl p-6 md:p-8 border transition-all duration-500 ${
              isDarkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/70 border-gray-200/50 shadow-xl'
            }`}>
              <h3 className={`text-xl md:text-2xl font-bold mb-6 transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Send us a message
              </h3>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const email = formData.get('email');
                const subject = formData.get('subject');
                const message = formData.get('message');
                
                const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                const mailtoLink = `mailto:henrymacsam01@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
                
                window.location.href = mailtoLink;
              }} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className={`w-full border rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-white/10 border-white/20 text-white placeholder-white/60' 
                        : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className={`w-full border rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-white/10 border-white/20 text-white placeholder-white/60' 
                        : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className={`w-full border rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-white/10 border-white/20 text-white placeholder-white/60' 
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Tell us about your project..."
                  required
                  className={`w-full border rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    isDarkMode 
                      ? 'bg-white/10 border-white/20 text-white placeholder-white/60' 
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className={`text-xl md:text-2xl font-bold mb-6 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Get in touch
                </h3>
                <p className={`mb-8 text-sm md:text-base transition-colors ${
                  isDarkMode ? 'text-white/70' : 'text-gray-600'
                }`}>
                  Ready to take your business to the next level? Contact us today for a free consultation 
                  and let&apos;s discuss how we can help you achieve your goals.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, title: 'Email Us', info: 'contact@technest.com' },
                  { icon: Phone, title: 'Call Us', info: '+254 112 034613' },
                  { icon: MapPin, title: 'Visit Us', info: 'Juja, Kiambu' }
                ].map((contact, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 group transform hover:translate-x-2 transition-all duration-300"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <contact.icon className="text-white w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <div className={`font-semibold text-sm md:text-base transition-colors ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {contact.title}
                      </div>
                      <div className={`text-xs md:text-sm transition-colors ${
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
                    ? 'bg-blue-600/20 border-white/10' 
                    : 'bg-blue-50 border-blue-200 shadow-lg'
                }`}>
                  <h4 className={`font-semibold mb-2 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Free Consultation
                  </h4>
                  <p className={`text-xs md:text-sm mb-4 transition-colors ${
                    isDarkMode ? 'text-white/70' : 'text-gray-600'
                  }`}>
                    Book a 30-minute strategy session to discuss your project requirements and get expert advice.
                  </p>
                  <a 
                    href="tel:+254112034613"
                    className={`inline-block px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      isDarkMode 
                        ? 'bg-white/10 hover:bg-white/20 text-white' 
                        : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                    }`}
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-t transition-all duration-500 ${
        isDarkMode ? 'border-white/10' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 group">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Code className="text-white w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className={`font-bold text-base md:text-lg transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                TechNest
              </span>
            </div>
            
            <div className={`text-center md:text-left text-xs md:text-sm transition-colors ${
              isDarkMode ? 'text-white/60' : 'text-gray-500'
            }`}>
              © 2025 TechNest Solutions. All rights reserved.
            </div>
            
            <div className="flex space-x-4 md:space-x-6">
              {['Privacy', 'Terms', 'Support'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className={`text-xs md:text-sm transition-all duration-300 hover:scale-105 ${
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
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TechPortfolio;