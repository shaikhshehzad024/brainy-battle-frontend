export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

export const questions: Record<string, Question[]> = {
  general: [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: 2,
      category: "general"
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
      category: "general"
    },
    {
      id: 3,
      question: "What is the largest mammal in the world?",
      options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
      correctAnswer: 1,
      category: "general"
    },
    {
      id: 4,
      question: "In which year did the Titanic sink?",
      options: ["1910", "1911", "1912", "1913"],
      correctAnswer: 2,
      category: "general"
    },
    {
      id: 5,
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correctAnswer: 2,
      category: "general"
    },
    {
      id: 6,
      question: "Which country has the most natural lakes?",
      options: ["Russia", "Canada", "Finland", "Sweden"],
      correctAnswer: 1,
      category: "general"
    },
    {
      id: 7,
      question: "What is the smallest country in the world?",
      options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
      correctAnswer: 2,
      category: "general"
    },
    {
      id: 8,
      question: "Which instrument has 88 keys?",
      options: ["Organ", "Piano", "Harpsichord", "Accordion"],
      correctAnswer: 1,
      category: "general"
    },
    {
      id: 9,
      question: "What is the hardest natural substance on Earth?",
      options: ["Platinum", "Iron", "Diamond", "Quartz"],
      correctAnswer: 2,
      category: "general"
    },
    {
      id: 10,
      question: "Which ocean is the largest?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correctAnswer: 3,
      category: "general"
    }
  ],
  science: [
    {
      id: 11,
      question: "What is the speed of light in vacuum?",
      options: ["299,792,458 m/s", "300,000,000 m/s", "186,000 miles/s", "All of the above"],
      correctAnswer: 0,
      category: "science"
    },
    {
      id: 12,
      question: "Which element has the atomic number 1?",
      options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
      correctAnswer: 1,
      category: "science"
    },
    {
      id: 13,
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
      correctAnswer: 2,
      category: "science"
    },
    {
      id: 14,
      question: "Which scientist developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
      correctAnswer: 1,
      category: "science"
    },
    {
      id: 15,
      question: "What gas do plants absorb from the atmosphere during photosynthesis?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswer: 2,
      category: "science"
    },
    {
      id: 16,
      question: "What is the pH of pure water?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 1,
      category: "science"
    },
    {
      id: 17,
      question: "Which planet has the most moons?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      correctAnswer: 1,
      category: "science"
    },
    {
      id: 18,
      question: "What is the unit of electrical resistance?",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      correctAnswer: 2,
      category: "science"
    },
    {
      id: 19,
      question: "Which blood type is known as the universal donor?",
      options: ["A+", "B+", "AB+", "O-"],
      correctAnswer: 3,
      category: "science"
    },
    {
      id: 20,
      question: "What is the most abundant gas in Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correctAnswer: 2,
      category: "science"
    }
  ],
  sports: [
    {
      id: 21,
      question: "How many players are on a basketball team on the court at one time?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 1,
      category: "sports"
    },
    {
      id: 22,
      question: "In which sport would you perform a slam dunk?",
      options: ["Volleyball", "Tennis", "Basketball", "Baseball"],
      correctAnswer: 2,
      category: "sports"
    },
    {
      id: 23,
      question: "How often are the Summer Olympic Games held?",
      options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
      correctAnswer: 2,
      category: "sports"
    },
    {
      id: 24,
      question: "In golf, what is the term for one stroke under par?",
      options: ["Eagle", "Birdie", "Bogey", "Albatross"],
      correctAnswer: 1,
      category: "sports"
    },
    {
      id: 25,
      question: "Which country has won the most FIFA World Cups?",
      options: ["Germany", "Argentina", "Italy", "Brazil"],
      correctAnswer: 3,
      category: "sports"
    },
    {
      id: 26,
      question: "In tennis, what is the term for a score of 40-40?",
      options: ["Match point", "Set point", "Deuce", "Love"],
      correctAnswer: 2,
      category: "sports"
    },
    {
      id: 27,
      question: "How many rings are on the Olympic flag?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 1,
      category: "sports"
    },
    {
      id: 28,
      question: "In which sport do teams compete for the Stanley Cup?",
      options: ["Basketball", "Baseball", "Football", "Ice Hockey"],
      correctAnswer: 3,
      category: "sports"
    },
    {
      id: 29,
      question: "What is the maximum score possible in ten-pin bowling?",
      options: ["250", "280", "300", "350"],
      correctAnswer: 2,
      category: "sports"
    },
    {
      id: 30,
      question: "In which sport would you find a pommel horse?",
      options: ["Track and Field", "Gymnastics", "Swimming", "Wrestling"],
      correctAnswer: 1,
      category: "sports"
    }
  ],
  history: [
    {
      id: 31,
      question: "Which ancient wonder of the world was located in Alexandria?",
      options: ["Hanging Gardens", "Colossus of Rhodes", "Lighthouse of Alexandria", "Temple of Artemis"],
      correctAnswer: 2,
      category: "history"
    },
    {
      id: 32,
      question: "In which year did World War II end?",
      options: ["1944", "1945", "1946", "1947"],
      correctAnswer: 1,
      category: "history"
    },
    {
      id: 33,
      question: "Who was the first person to walk on the moon?",
      options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
      correctAnswer: 1,
      category: "history"
    },
    {
      id: 34,
      question: "Which empire was ruled by Julius Caesar?",
      options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Persian Empire"],
      correctAnswer: 1,
      category: "history"
    },
    {
      id: 35,
      question: "In which year did the Berlin Wall fall?",
      options: ["1987", "1988", "1989", "1990"],
      correctAnswer: 2,
      category: "history"
    },
    {
      id: 36,
      question: "Who painted the ceiling of the Sistine Chapel?",
      options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
      correctAnswer: 2,
      category: "history"
    },
    {
      id: 37,
      question: "Which country gifted the Statue of Liberty to the United States?",
      options: ["Britain", "Spain", "France", "Italy"],
      correctAnswer: 2,
      category: "history"
    },
    {
      id: 38,
      question: "What was the name of the ship on which Charles Darwin made his famous voyage?",
      options: ["HMS Victory", "HMS Beagle", "HMS Bounty", "HMS Challenger"],
      correctAnswer: 1,
      category: "history"
    },
    {
      id: 39,
      question: "Which pharaoh built the Great Pyramid of Giza?",
      options: ["Tutankhamun", "Ramesses II", "Khufu", "Cleopatra"],
      correctAnswer: 2,
      category: "history"
    },
    {
      id: 40,
      question: "In which city was John F. Kennedy assassinated?",
      options: ["Houston", "Austin", "Dallas", "San Antonio"],
      correctAnswer: 2,
      category: "history"
    }
  ]
};