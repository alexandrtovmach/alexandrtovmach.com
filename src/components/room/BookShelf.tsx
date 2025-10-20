
import { useState } from 'react';
import Book from "@/components/Book";
import chunk from "lodash/chunk.js";
import books from "@/data/books.json";

// rules
// max books per shelf: 15

// Colors
// light wood: #8c5c25
// dark wood: #3e0000
const categories = [
  "Fiction",
  "Non-Fiction",
  "Fantasy",
  "Mystery",
  "Biography",
  "Self-Help",
  "History",
  "Philosophy",
  "Psychology",
  "History",
  "Philosophy",
  "Psychology",
];

const shelfChunkSize = Math.floor(books.length / categories.length);
const chunks = chunk(books, shelfChunkSize)

const BookShelf: React.FC = () => {
  const [isChairActive, setIsChairActive] = useState(false);
  return (
    <section className="absolute h-[90vh] w-[40vw] -left-[0vw] bottom-0 grid grid-cols-1 lg:grid-cols-2 gap-3 p-4 bg-[#8c5c25]">
      {chunks.map((chunk, i) => (
        <div className="bg-[#3e0000] p-0.5 flex justify-between">
          <div aria-label="left-side-shelf" className="flex gap-0.5">
            {/* {chunk.map((book) => (
              <Book key={book.id} data={book} />
            ))} */}
          </div>
          {/* <div aria-label="right-side-shelf" className="flex gap-0.5">
            {Array.from("123").map((_char, idx) => (
              <Book className="mt-8" title={"R" + idx} author="" coverUrl="" link="" />
            ))}
          </div> */}
        </div>
      ))}
    </section>
  );
};

export default BookShelf;
