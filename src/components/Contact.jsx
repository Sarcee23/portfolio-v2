import React from 'react'
import { SiGmail } from 'react-icons/si';
import SocialLinks from './SocialLinks';
const Contact = () => (
  <section id="contact" className="relative py-32 px-6">
    <div className="max-w-2xl mx-auto z-10 relative">
      <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Let's Connect
      </h2>

      <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-purple-500/20">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input 
              type="text"
              className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input 
              type="email"
              className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea 
              rows="5"
              className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
          >
            Send Message
            <SiGmail className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-purple-500/20">
          <SocialLinks />
        </div>
      </div>
    </div>
  </section>
);

export default Contact
