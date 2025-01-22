"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const publishedBooks = [
  {
    title: "Advanced Calculus: A Comprehensive Guide",
    author: "Deepak SP",
    year: 2022,
    cover: "https://source.unsplash.com/random/200x300/?book,mathematics",
  },
  {
    title: "Linear Algebra and Its Applications in Data Science",
    author: "Deepak SP",
    year: 2021,
    cover: "https://source.unsplash.com/random/200x300/?book,algebra",
  },
]

const recommendedBooks = [
  {
    title: "Gödel, Escher, Bach: An Eternal Golden Braid",
    author: "Douglas Hofstadter",
    year: 1979,
    cover: "https://source.unsplash.com/random/200x300/?book,logic",
  },
  {
    title: "The Princeton Companion to Mathematics",
    author: "Timothy Gowers",
    year: 2008,
    cover: "https://source.unsplash.com/random/200x300/?book,mathematics",
  },
  {
    title: "Fermat's Enigma",
    author: "Simon Singh",
    year: 1997,
    cover: "https://source.unsplash.com/random/200x300/?book,enigma",
  },
  {
    title: "The Man Who Knew Infinity",
    author: "Robert Kanigel",
    year: 1991,
    cover: "https://source.unsplash.com/random/200x300/?book,infinity",
  },
]

export default function Books() {
  return (
    <section id="books" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Books</h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Published Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedBooks.map((book, index) => (
              <BookCard key={index} book={book} index={index} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Recommended Reading</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recommendedBooks.map((book, index) => (
              <BookCard key={index} book={book} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BookCard({ book, index }) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <motion.div
      className="bg-purple-900 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-4 relative w-40 h-60">
        {!imageError ? (
          <Image
            src={book.cover || "/placeholder.svg"}
            alt={`Cover of ${book.title}`}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-purple-800 rounded-md">
            <span className="text-white text-center p-2">Cover image not available</span>
          </div>
        )}
      </div>
      <h4 className="text-xl font-semibold mb-2 text-center">{book.title}</h4>
      <p className="text-purple-300 mb-1">{book.author}</p>
      <p className="text-sm text-purple-400">{book.year}</p>
    </motion.div>
  )
}

