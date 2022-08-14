import duneImg from "./img/dune.jpg";
import hobbitsImg from "./img/hobbits.jpg";
import norwegianWoodImg from "./img/norwegianWood.jpg";
import silmarilionImg from "./img/silmarilion.jpg";
import mentalHealthImg from "./img/mentalhealth.jpg";
import jonathanLivingstonImg from "./img/jonathanlivingston.jpg";
import brazilImg from "./img/brazil.jpg";
import q84Img from "./img/q84.jpg";
import handmadesTaleImg from "./img/handmaids.jpg";
import aliceImg from "./img/alice.jpg";

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

const mentalHealth = BookGenerator(
  mentalHealthImg,
  "Mental Health at Work",
  "James Routledge",
  [
    "Non-Fiction",
    "Assertiveness",
    "motivation & self-esteem",
    "Language",
    "Body and Spirit",
  ],
  "Penguin Books Ltd",
  "2022-05-01",
  "160",
  "9780241486825",
  "English",
  "PB",
  `It has never been more essential to support our mental health at work. With one in four people experiencing poor mental health right now, we need to start talking about it. Penguin Business Expert James Routledge has worked with CEOs, HR directors, managers and people at all levels on successful mental-health strategies. In this book, he shares his stories, learnings and guidance. Learn how to: - Talk comfortably about mental health - Create a more open and inclusive community in your workplace - Implement unique changes that are authentic to you and your business Filled with honest and relatable stories, 'conversation starters' and exclusive case studies from a diverse range of businesses and their people, Mental Health at Work will support anyone with their mental health in the workplace journey.  `,
  "22.40 ",
);

const jonathanLivingston = BookGenerator(
  jonathanLivingstonImg,
  "Jonathan Livingston Seagull: A Story",
  "Richard Bach",
  ["Fiction", "Modern & contemporary fiction"],
  "HarperCollins Publishers",
  "2011-12-10",
  "144",
  "9780006490340",
  "English",
  "PB",
  `The complete edition of a timeless classic, includes the recently rediscovered Part Four and 'Last Words' by Richard Bach.Jonathan Livingston Seagull, the most celebrated inspirational fable of our time, tells the story of a bird determined to be more than ordinary. 'Most gulls don't bother to learn more than the simplest facts of flight - how to get from shore to food and back again,' writes author Richard Bach in this allegory about a unique bird named Jonathan Livingston Seagull. 'For most gulls it is not flying that matters, but eating. For this gull, though, it was not eating that mattered, but flight.' Flight is indeed the metaphor that makes this story soar. This bestselling modern classic is a fable about seeking a higher purpose in life, even if your flock, tribe or neighbourhood finds your ambition threatening (at one point our beloved gull is even banished from his flock). By not compromising his higher vision, Jonathan learns the meaning of love and kindness and gets the ultimate payoff - transcendence. The dreamy illustrations by Russell Munson provide just the right illustrations for this spirituality classic that has inspired thousands of readers to follow their own path in life and so fulfill their true potential.  `,
  "29.20 ",
);

const brazil = BookGenerator(
  brazilImg,
  "Brazil",
  "John Updike",
  ["Fiction", "Modern & contemporary fiction"],
  "Penguin Books Ltd",
  "2009-02-23",
  "272",
  "9780141188942",
  "English",
  "PB",
  `Tristao Raposo, a nineteen-year old black child of the Rio slums, spies Isabel Leme, an eighteen-year-old upper-class white girl, across the hot sands of Copacabana Neach, and presents her with a ring. Their flight into marriage takes them from urban banality to the farthest reaches of Brazil's wild west....`,
  "29.20 ",
);

const q84 = BookGenerator(
  q84Img,
  "1Q84: Books 1, 2 and 3",
  "Haruki Murakami",
  ["Fiction", "Modern & contemporary fiction", "Japanese Authors"],
  "Vintage Publishing",
  "2012-08-02",
  "1328",
  "9780099578079",
  "English",
  "PB",
  `The year is 1Q84. This is the real world, there is no doubt about that. But in this world, there are two moons in the sky. In this world, the fates of two people, Tengo and Aomame, are closely intertwined. They are each, in their own way, doing something very dangerous. And in this world, there seems no way to save them both. Something extraordinary is starting.`,
  "31.60 ",
);

const handmadesTale = BookGenerator(
  handmadesTaleImg,
  "The Handmaid's Tale",
  "Margaret Atwood",
  ["Fiction", "Modern & contemporary fiction", "Oprah's Book Club"],
  "Vintage Publishing",
  "2018-04-17",
  "320",
  "9781784874872",
  "English",
  "PB",
  `The Republic of Gilead offers Offred only one function: to breed. If she deviates, she will, like dissenters, be hanged at the wall or sent out to die slowly of radiation sickness. But even a repressive state cannot obliterate desire - neither Offred's nor that of the two men on which her future hangs. Brilliantly conceived and executed, this powerful evocation of twenty-first century America gives full rein to Margaret Atwood's devastating irony, wit and astute perception.`,
  "23.60 ",
);

const alice = BookGenerator(
  aliceImg,
  "Alice's Adventures in Wonderland and Through the Looking Glass:  The Penguin English Library",
  "Lewis Carroll",
  ["Fiction", "Classics"],
  "Penguin Books Ltd",
  "2012-08-30",
  "256",
  "9780141199689",
  "English",
  "PB",
  `The Penguin English Library Edition of Alice's Adventures in Wonderland and Through the Looking Glass by Lewis Carroll '"Curiouser and curiouser!" cried Alice (she was so surprised, that for the moment she quite forgot how to speak good English). "Now I'm opening out like the largest telescope that ever was! Goodbye, feet!"' 'I had sent my heroine straight down a rabbit-hole ... without the least idea what was to happen afterwards,' wrote Lewis Carroll, describing how Alice was conjured up one 'golden afternoon' in 1862 to entertain his child-friend Alice Liddell. His dream worlds of nonsensical Wonderland and the back-to-front Looking Glass kingdom depict order turned upside-down: a baby turns into a pig, time is abandoned at a disorderly tea-party and a chaotic game of chess makes a seven-year-old girl a Queen. But amongst the anarchic humour and sparkling word play, puzzles and riddles, are poignant moments of nostalgia for lost childhood. The Penguin English Library - 100 editions of the best fiction in English, from the eighteenth century and the very first novels to the beginning of the First World War.`,
  "26.00 ",
);

pushBook(dune);
pushBook(hobbits);
pushBook(norwegianWood);
pushBook(silmarilion);
pushBook(mentalHealth);
pushBook(jonathanLivingston);
pushBook(brazil);
pushBook(q84);
pushBook(handmadesTale);
pushBook(alice);

export default booksToSell;
