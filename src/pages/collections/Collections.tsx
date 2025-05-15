
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Sliders, X, ChevronDown, Search, Heart } from "lucide-react"
import { categories, colors, lehengas, priceRanges, sortOptions } from "../../data/collection"


export default function CollectionPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")
  const [selectedSort, setSelectedSort] = useState("featured")
  const [filteredLehengas, setFilteredLehengas] = useState(lehengas)
  const [searchQuery, setSearchQuery] = useState("")
  const [showQuickView, setShowQuickView] = useState<number | null>(null)
  const [wishlist, setWishlist] = useState<number[]>([])

  // Apply filters
  useEffect(() => {
    let result = [...lehengas]

    // Filter by search query
    if (searchQuery) {
      result = result.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((item) => item.category === selectedCategory)
    }

    // Filter by colors
    if (selectedColors.length > 0) {
      result = result.filter((item) => selectedColors.includes(item.color))
    }

    // Filter by price range
    if (selectedPriceRange !== "all") {
      const range = priceRanges.find((r) => r.id === selectedPriceRange)
      if (range) {
        result = result.filter((item) => item.price >= range.min! && item.price <= range.max!)
      }
    }

    // Apply sorting
    switch (selectedSort) {
      case "newest":
        // For demo purposes, we'll just reverse the array to simulate "newest"
        result = [...result].reverse()
        break
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case "discount":
        result = [...result].sort((a, b) => b.discount - a.discount)
        break
      default:
        // Featured - we'll prioritize bestsellers
        result = [...result].sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0))
    }

    setFilteredLehengas(result)
  }, [selectedCategory, selectedColors, selectedPriceRange, selectedSort, searchQuery])

  const toggleColor = (colorId: string) => {
    setSelectedColors((prev) => (prev.includes(colorId) ? prev.filter((c) => c !== colorId) : [...prev, colorId]))
  }

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]))
  }

  const resetFilters = () => {
    setSelectedCategory("all")
    setSelectedColors([])
    setSelectedPriceRange("all")
    setSearchQuery("")
  }

  return (
    <main className="min-h-screen bg-white">

      {/* Collection Header */}
      <section className="pt-24 pb-8  px-6 md:px-12 bg-gradient-to-r from-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-pink-600">Collection</span>
            </h1>
           
          </motion.div>
        </div>
      </section>

      {/* Collection Content */}
      <section className="py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="w-full md:w-auto flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search size={20} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search lehengas..."
                className="bg-transparent border-none focus:outline-none text-gray-700 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-gray-500 hover:text-gray-700">
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full md:hidden"
              >
                <Sliders size={16} />
                Filters
              </button>

              <div className="relative w-full md:w-auto">
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="appearance-none bg-gray-100 rounded-full px-4 py-2 pr-8 focus:outline-none text-gray-700 w-full"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Filters Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block w-64 flex-shrink-0"
            >
              <div className="sticky top-24 space-y-8">
                {/* Category Filter */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? "bg-pink-100 text-pink-700 font-medium"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Price Range</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.id}
                        onClick={() => setSelectedPriceRange(range.id)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedPriceRange === range.id
                            ? "bg-pink-100 text-pink-700 font-medium"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {range.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Colors</h3>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => toggleColor(color.id)}
                        className={`w-8 h-8 rounded-full ${color.class} flex items-center justify-center ${
                          selectedColors.includes(color.id) ? "ring-2 ring-offset-2 ring-gray-800" : ""
                        }`}
                        title={color.name}
                      >
                        {selectedColors.includes(color.id) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reset Filters */}
                <button
                  onClick={resetFilters}
                  className="w-full px-4 py-2 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </motion.div>

            {/* Mobile Filters Sidebar */}
            <AnimatePresence>
              {mobileFiltersOpen && (
                <motion.div
                  initial={{ opacity: 0, x: -300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-50 lg:hidden"
                >
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50"
                    onClick={() => setMobileFiltersOpen(false)}
                  />
                  <div className="absolute top-0 left-0 bottom-0 w-80 bg-white shadow-xl p-6 overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                      <button onClick={() => setMobileFiltersOpen(false)}>
                        <X size={24} className="text-gray-500" />
                      </button>
                    </div>

                    <div className="space-y-8">
                      {/* Category Filter */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
                        <div className="space-y-2">
                          {categories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => {
                                setSelectedCategory(category.id)
                                setMobileFiltersOpen(false)
                              }}
                              className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                                selectedCategory === category.id
                                  ? "bg-pink-100 text-pink-700 font-medium"
                                  : "text-gray-700 hover:bg-gray-100"
                              }`}
                            >
                              {category.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Price Filter */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Price Range</h3>
                        <div className="space-y-2">
                          {priceRanges.map((range) => (
                            <button
                              key={range.id}
                              onClick={() => {
                                setSelectedPriceRange(range.id)
                                setMobileFiltersOpen(false)
                              }}
                              className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                                selectedPriceRange === range.id
                                  ? "bg-pink-100 text-pink-700 font-medium"
                                  : "text-gray-700 hover:bg-gray-100"
                              }`}
                            >
                              {range.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Color Filter */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Colors</h3>
                        <div className="flex flex-wrap gap-3">
                          {colors.map((color) => (
                            <button
                              key={color.id}
                              onClick={() => toggleColor(color.id)}
                              className={`w-10 h-10 rounded-full ${color.class} flex items-center justify-center ${
                                selectedColors.includes(color.id) ? "ring-2 ring-offset-2 ring-gray-800" : ""
                              }`}
                              title={color.name}
                            >
                              {selectedColors.includes(color.id) && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-white"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Reset Filters */}
                      <button
                        onClick={() => {
                          resetFilters()
                          setMobileFiltersOpen(false)
                        }}
                        className="w-full px-4 py-3 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 transition-colors"
                      >
                        Reset Filters
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Active Filters */}
              {(selectedCategory !== "all" ||
                selectedColors.length > 0 ||
                selectedPriceRange !== "all" ||
                searchQuery) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6 flex flex-wrap items-center gap-2"
                >
                  <span className="text-gray-700">Active Filters:</span>

                  {selectedCategory !== "all" && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-pink-100 text-pink-800">
                      {categories.find((c) => c.id === selectedCategory)?.name}
                      <button
                        onClick={() => setSelectedCategory("all")}
                        className="ml-1 text-pink-800 hover:text-pink-900"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  )}

                  {selectedColors.map((colorId) => (
                    <span
                      key={colorId}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-pink-100 text-pink-800"
                    >
                      {colors.find((c) => c.id === colorId)?.name}
                      <button onClick={() => toggleColor(colorId)} className="ml-1 text-pink-800 hover:text-pink-900">
                        <X size={14} />
                      </button>
                    </span>
                  ))}

                  {selectedPriceRange !== "all" && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-pink-100 text-pink-800">
                      {priceRanges.find((r) => r.id === selectedPriceRange)?.name}
                      <button
                        onClick={() => setSelectedPriceRange("all")}
                        className="ml-1 text-pink-800 hover:text-pink-900"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  )}

                  {searchQuery && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-pink-100 text-pink-800">
                      Search: {searchQuery}
                      <button onClick={() => setSearchQuery("")} className="ml-1 text-pink-800 hover:text-pink-900">
                        <X size={14} />
                      </button>
                    </span>
                  )}

                  <button onClick={resetFilters} className="text-sm text-pink-600 hover:text-pink-800 ml-2">
                    Clear All
                  </button>
                </motion.div>
              )}

              {/* Results Count */}
              <div className="mb-6 text-gray-600">Showing {filteredLehengas.length} results</div>

              {/* Products */}
              {filteredLehengas.length > 0 ? (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  {filteredLehengas.map((lehenga) => (
                    <motion.div
                      key={lehenga.id}
                      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <img
                        //   src={lehenga.image || "/placeholder.svg"}
                        src="https://i.pinimg.com/736x/fe/58/65/fe5865e063dffa093e4d8edab718452a.jpg"
                          alt={lehenga.name}
                          width={450}
                          height={600}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          {lehenga.isNew && (
                            <span className="px-2 py-1 bg-pink-600 text-white text-xs font-medium rounded">NEW</span>
                          )}
                          {lehenga.isBestseller && (
                            <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded">
                              BESTSELLER
                            </span>
                          )}
                          {lehenga.discount > 0 && (
                            <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded">
                              {lehenga.discount}% OFF
                            </span>
                          )}
                        </div>

                        {/* Quick actions */}
                        <div className="absolute top-4 right-4">
                          <button
                            onClick={() => toggleWishlist(lehenga.id)}
                            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                          >
                            <Heart
                              size={20}
                              className={
                                wishlist.includes(lehenga.id) ? "fill-pink-600 text-pink-600" : "text-gray-700"
                              }
                            />
                          </button>
                        </div>

                        {/* Overlay with actions */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <button
                              onClick={() => setShowQuickView(lehenga.id)}
                              className="px-6 py-2 bg-white text-gray-800 rounded-full font-medium hover:bg-pink-50 transition-colors"
                            >
                              Quick View
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800 text-lg mb-1">{lehenga.name}</h3>
                        <div className="flex items-center gap-2">
                          {lehenga.discount > 0 ? (
                            <>
                              <span className="text-pink-600 font-bold">
                                ₹{Math.round(lehenga.price * (1 - lehenga.discount / 100)).toLocaleString()}
                              </span>
                              <span className="text-gray-500 line-through text-sm">
                                ₹{lehenga.price.toLocaleString()}
                              </span>
                            </>
                          ) : (
                            <span className="text-pink-600 font-bold">₹{lehenga.price.toLocaleString()}</span>
                          )}
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-sm text-gray-600">Color:</span>
                          <span
                            className={`w-4 h-4 rounded-full ${colors.find((c) => c.id === lehenga.color)?.class}`}
                          ></span>
                          <span className="text-sm text-gray-600 capitalize">{lehenga.color}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">😔</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No lehengas found</h3>
                  <p className="text-gray-600 mb-6">We couldn't find any lehengas matching your current filters.</p>
                  <button
                    onClick={resetFilters}
                    className="px-6 py-2 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {filteredLehengas.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex items-center space-x-1">
                    <button className="px-4 py-2 border border-gray-300 rounded-l-lg text-gray-700 hover:bg-gray-100 transition-colors">
                      Previous
                    </button>
                    <button className="px-4 py-2 border border-gray-300 bg-pink-600 text-white">1</button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                      2
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                      3
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-r-lg text-gray-700 hover:bg-gray-100 transition-colors">
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <AnimatePresence>
        {showQuickView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowQuickView(null)}></div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
            >
              <button
                onClick={() => setShowQuickView(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
              >
                <X size={20} className="text-gray-700" />
              </button>

              {/* Product Image */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto">
                <img
                  src={lehengas.find((l) => l.id === showQuickView)?.image || ""}
                  alt={lehengas.find((l) => l.id === showQuickView)?.name || ""}
                  width={450}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {lehengas.find((l) => l.id === showQuickView)?.name}
                </h2>

                <div className="flex items-center gap-3 mb-4">
                  {lehengas.find((l) => l.id === showQuickView)?.discount ? (
                    <>
                      <span className="text-2xl text-pink-600 font-bold">
                        ₹
                        {Math.round(
                          (lehengas.find((l) => l.id === showQuickView)?.price || 0) *
                            (1 - (lehengas.find((l) => l.id === showQuickView)?.discount || 0) / 100),
                        ).toLocaleString()}
                      </span>
                      <span className="text-gray-500 line-through">
                        ₹{lehengas.find((l) => l.id === showQuickView)?.price?.toLocaleString()}
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl text-pink-600 font-bold">
                      ₹{lehengas.find((l) => l.id === showQuickView)?.price?.toLocaleString()}
                    </span>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-gray-600">
                    Exquisite {lehengas.find((l) => l.id === showQuickView)?.name.toLowerCase()} crafted with premium
                    fabrics and intricate embroidery. Perfect for your special occasion.
                  </p>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Color</h3>
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-6 h-6 rounded-full ${
                          colors.find((c) => c.id === lehengas.find((l) => l.id === showQuickView)?.color)?.class
                        }`}
                      ></span>
                      <span className="text-gray-700 capitalize">
                        {lehengas.find((l) => l.id === showQuickView)?.color}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Size</h3>
                    <div className="flex flex-wrap gap-2">
                      {["XS", "S", "M", "L", "XL"].map((size) => (
                        <button
                          key={size}
                          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-pink-600 hover:text-pink-600 transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full px-6 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition-colors">
                    Add to Cart
                  </button>
                  <button
                    onClick={() => toggleWishlist(showQuickView)}
                    className="w-full px-6 py-3 border border-pink-600 text-pink-600 rounded-full font-medium hover:bg-pink-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Heart
                      size={18}
                      className={wishlist.includes(showQuickView) ? "fill-pink-600 text-pink-600" : "text-pink-600"}
                    />
                    {wishlist.includes(showQuickView) ? "Remove from Wishlist" : "Add to Wishlist"}
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2">Product Details</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Premium quality fabric</li>
                    <li>Intricate hand embroidery</li>
                    <li>Comes with matching accessories</li>
                    <li>Free alterations available</li>
                    <li>Delivery within 7-10 business days</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}
