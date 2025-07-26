import React from 'react'
const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t mt-10 flex flex-col 375px:flex-row 425px:flex-row p-4">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="font-semibold mb-2">Asboblar</h4>
          <ul className="space-y-1">
            <li><a href="#">Rejalar</a></li>
            <li><a href="#">Ko'rinish</a></li>
            <li><a href="#">Statistika</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Tez havolalar</h4>
          <ul className="space-y-1">
            <li><a href="#">Aloqa</a></li>
            <li><a href="#">Qo'llanma</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Huquqiy</h4>
          <ul className="space-y-1">
            <li><a href="#">Maxfiylik siyosati</a></li>
            <li><a href="#">Foydalanish shartlari</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © 2025 MyPlanner. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  )
}
export default Footer