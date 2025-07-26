import React from 'react'
const Section = () => {
    return (
        <div className="bg-white text-black p-8 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Nima Uchun Bu Vositasini Foydalanish?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="flex items-center">
                    <span className=" text-purple-600 text-2xl mr-3">★</span>
                    <p className="text-lg">Osonlik bilan tartibli bo'ling</p>
                </div>
                <div className="flex items-center">
                    <span className=" text-purple-600 text-2xl mr-3">★</span>
                    <p className="text-lg">Muhim vazifalarni hech qachon unutmang</p>
                </div>
                <div className="flex items-center">
                    <span className=" text-purple-600 text-2xl mr-3">★</span>
                    <p className="text-lg">Kundalik mahsuldorlikni oshiring</p>
                </div>
                <div className="flex items-center">
                    <span className=" text-purple-600 text-2xl mr-3">★</span>
                    <p className="text-lg">Taraqqiyotni samarali kuzatib boring</p>
                </div>
                <div className="flex items-center">
                    <span className=" text-purple-600 text-2xl mr-3">★</span>
                    <p className="text-lg">Har qanday qurilmadan kirish</p>
                </div>
                <div></div>
            </div>
        </div>
    )
}
export default Section