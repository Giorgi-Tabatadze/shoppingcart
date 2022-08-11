import duneImg from "./img/dune.jpg";
import hobbitsImg from "./img/hobbits.jpg";
import norwegianWoodImg from "./img/norwegianWood.jpg";
import silmarilionImg from "./img/silmarilion.jpg";

const booksToSell = [];

const BookGenerator = (
  img,
  title,
  author,
  category,
  publisher,
  publishDate,
  pagesAmount,
  isbn,
  language,
  format,
  synopsis,
  price,
) => {
  return {
    img,
    title,
    author,
    category,
    publisher,
    publishDate,
    pagesAmount,
    isbn,
    language,
    format,
    synopsis,
    price,
  };
};

const pushBook = (book) => {
  // eslint-disable-next-line no-param-reassign
  book.id = booksToSell.length;
  booksToSell.push(book);
};

const dune = BookGenerator(
  duneImg,
  "Dune",
  "Frank Herbert",
  ["Fiction", "Science Fiction"],
  "HODDER & STOUGHTON",
  "2021-09-03",
  "592",
  "9781529347852",
  "English",
  "PB",
  `Before The Matrix, before Star Wars, before Ender's Game and Neuromancer, there was Dune, one of the greatest science fiction novels ever written. Melange, or 'spice', is the most valuable - and rarest - element in the universe. And it can only be found on a single planet: the inhospitable desert world Arrakis. Whoever controls Arrakis controls the spice. And whoever controls the spice controls the universe. When stewardship of Arrakis is transferred to his house, Paul Atreides must travel to the planet's dangerous surface to ensure the future of his family and his people. But as malevolent forces explode into conflict around him, Paul is thrust into a great destiny beyond his understanding. And in this game of power, only those who can conquer their fear will survive.`,
  "36.00",
);

const hobbits = BookGenerator(
  hobbitsImg,
  "The Hobbits of Tolkien: An Illustrated Exploration of Tolkien's Hobbits, and the Sources that Inspired his Work from Myth, Literature and History",
  "David Day",
  ["Fiction", "Fantasy"],
  "Octopus Publishing Group",
  "2019-10-03",
  "192",
  "9780753733783",
  "English",
  "HB",
  `An entire race was born when J.R.R. Tolkien scrawled on a leaf, 'In a hole in the ground there lived a hobbit.' From the invention of that single word (hobbit) Tolkien became the explorer and chronicler of the character, their race and their significant role in his fantastical world, Middle-earth. Here in his latest book, Tolkien expert David Day unpicks the myriad of riddles, puns and mystical meanings in Tolkien's works; The Hobbit and The Lord of the Rings. This work is unofficial and is not authorized by the Tolkien Estate or HarperCollins Publishers.`,
  "39.50",
);

const norwegianWood = BookGenerator(
  norwegianWoodImg,
  "Norwegian Wood",
  "Haruki Murakami",
  ["Fiction", "Modern & contemporary fiction", "Japanese Authors"],
  "Vintage Publishing",
  "2011-02-10",
  "400",
  "9780099554561",
  "English",
  "PB",
  `When he hears her favourite Beatles song, Toru Watanabe recalls his first love Naoko, the girlfriend of his best friend Kizuki. Immediately he is transported back almost twenty years to his student days in Tokyo, adrift in a world of uneasy friendships, casual sex, passion, loss and desire - to a time when an impetuous young woman called Midori marches into his life and he has to choose between the future and the past.`,
  "32.00",
);

const silmarilion = BookGenerator(
  silmarilionImg,
  "The Silmarillion",
  "J. R. R. Tolkien",
  ["Fiction", "Fantasy"],
  "HarperCollins Publishers",
  "2013-08-01",
  "480",
  "9780007523221",
  "English",
  "PB",
  `A new B-format edition of this novel, designed to take fans of The Hobbit and The Lord of the Rings deeper into the myths and legends of Middle-earth The Silmarillion is an account of the Elder Days, of the First Age of Tolkien's world. It is the ancient drama to which the characters in The Lord of the Rings look back, and in whose events some of them such as Elrond and Galadriel took part. The tales of The Silmarillion are set in an age when Morgoth, the first Dark Lord, dwelt in Middle-Earth, and the High Elves made war upon him for the recovery of the Silmarils, the jewels containing the pure light of Valinor. Included in the book are several shorter works. The Ainulindale is a myth of the Creation and in the Valaquenta the nature and powers of each of the gods is described. The Akallabeth recounts the downfall of the great island kingdom of Numenor at the end of the Second Age and Of the Rings of Power tells of the great events at the end of the Third Age, as narrated in The Lord of the Rings. This pivotal work features the revised, corrected text and includes, by way of an introduction, a fascinating letter written by Tolkien in 1951 in which he gives a full explanation of how he conceived the early Ages of Middle-earth.`,
  "54.50",
);

pushBook(dune);
pushBook(hobbits);
pushBook(norwegianWood);
pushBook(silmarilion);

export default booksToSell;
