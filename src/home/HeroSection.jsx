import React from 'react'
const HeroSection = () => {
    return (
        <section className="text-center py-20 px-4 bg-white">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Kungizni ilhom bilan rejalashtiring!
            </h1>
            <p className="max-w-2xl mx-auto text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
                <span className="font-semibold text-gray-900">MyPlanner</span> bu ish, o'qish va shaxsiy hayotingizdagi
                rejlarni qulay va estetik tarzda tashkil qilish imkonini beruvchi interaktiv
                rejalashtiruvchi. Rejalar, ranglar, emoji, dark mode, statistika va ilhomlantiruvchi
                tabriklar - barchasi siz uchun!
            </p>
            <a href="/rejalash" className="inline-block bg-purple-500/80 hover:bg-purple-700/80 text-white text-lg font-medium py-3 px-6 rounded-xl transition">
                Rejalashni boshlang
            </a>
        </section>
    )
}
export default HeroSection