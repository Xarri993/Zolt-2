import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegramPlane, FaTiktok } from 'react-icons/fa';
import { BiBot } from 'react-icons/bi';
import { HiCode } from 'react-icons/hi';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full relative"
      >
        <div className="text-center mb-8">
          <motion.div 
            className="mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Zolt Team
            </h1>
            <div className="text-xs text-purple-400 italic">Crafting Digital Excellence Since 2023</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-black/30 p-4 rounded-lg backdrop-blur-sm mb-8 border border-red-500/20 relative"
          >
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            
            <div className="flex items-center justify-center gap-3 mb-3">
              <BiBot className="text-2xl text-red-400" />
              <HiCode className="text-2xl text-purple-400" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Specializing in professional Telegram bot development and creating innovative, modern websites that make a lasting impression.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          <motion.a
            href="https://t.me/xarri_coder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-gradient-to-r from-red-600 to-red-400 rounded-lg hover:from-red-700 hover:to-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div>
              <span className="text-lg font-medium">Telegram</span>
              <p className="text-xs text-red-200 mt-1">Professional Bot Development</p>
            </div>
            <FaTelegramPlane className="text-2xl" />
          </motion.a>

          <motion.a
            href="https://www.tiktok.com/@zolt_team"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-600 to-purple-400 rounded-lg hover:from-pink-700 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div>
              <span className="text-lg font-medium">TikTok</span>
              <p className="text-xs text-pink-200 mt-1">Development Content & Tips</p>
            </div>
            <FaTiktok className="text-2xl" />
          </motion.a>
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-500 text-sm">
            <span className="text-red-400">©</span> 2025 Zolt Team
          </p>
          <p className="text-xs text-purple-400 mt-2">Turning Ideas Into Digital Reality</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;