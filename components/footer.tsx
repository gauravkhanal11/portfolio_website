export function Footer() {
  return (
    <footer className="bg-card mt-0">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-white font-bold tabular-nums text-5xl">gK</div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Core Skills </h4>
            <ul className="space-y-2 text-gray-400">
              <li>Product Consulting </li>
              <li>UI/UX Design</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div id="contact-footer" className="text-left">
            {" "}
            {/* Added id="contact-footer" */}
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>gauravkhanal26@gmail.com</li>
              <li>+91 9591129444 </li>
              <li>Ottawa, ON K1N 5Y4, Canada</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"></div>
      </div>
    </footer>
  )
}
