const getZodiacInfo = (duedate: string) => {
  const date = new Date(duedate);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const zodiacInfo = {
      sign: '',
      emoji: '',
      description: ''
  };

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      zodiacInfo.sign = "Aries";
      zodiacInfo.emoji = " ♈️";
      zodiacInfo.description = "A natural-born leader with boundless energy and confidence. Aries children are adventurous, enthusiastic, and always ready to take on new challenges. Their dynamic personality and determination make them stand out from an early age.";
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      zodiacInfo.sign = "Taurus";
      zodiacInfo.emoji = " ♉️";
      zodiacInfo.description = "A peaceful soul who finds joy in life's simple pleasures. Taurus children are patient, reliable, and deeply connected to nature. They love comfort, routine, and have a natural appreciation for beauty and harmony in their surroundings.";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      zodiacInfo.sign = "Gemini";
      zodiacInfo.emoji = " ♊️";
      zodiacInfo.description = "Curious and sociable, with a mind that's always buzzing with ideas. Gemini children are excellent communicators, quick learners, and natural multitaskers. Their adaptable nature and wit make them delightful companions who bring energy to any situation.";
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      zodiacInfo.sign = "Cancer";
      zodiacInfo.emoji = " ♋️";
      zodiacInfo.description = "Sensitive and nurturing, with an incredibly strong emotional intelligence. Cancer children are deeply connected to their family, protective of loved ones, and naturally empathetic. Their intuitive nature and caring personality create strong, lasting bonds.";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      zodiacInfo.sign = "Leo";
      zodiacInfo.emoji = " ♌️";
      zodiacInfo.description = "Cheerful and charismatic, born to shine bright in any crowd. Leo children are natural performers with generous hearts and creative spirits. Their warm personality, natural leadership abilities, and unwavering confidence make them stand out wherever they go.";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      zodiacInfo.sign = "Virgo";
      zodiacInfo.emoji = " ♍️";
      zodiacInfo.description = "Gentle and organized, with an incredible eye for detail and perfection. Virgo children are practical problem-solvers with analytical minds. Their helpful nature, combined with their intelligence and dedication, makes them reliable and accomplished in whatever they pursue.";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      zodiacInfo.sign = "Libra";
      zodiacInfo.emoji = " ♎️";
      zodiacInfo.description = "Charming and peaceful, with a natural ability to create harmony in any situation. Libra children are diplomatic, fair-minded, and naturally artistic. Their social grace, combined with their strong sense of justice and beauty, makes them beloved by all who know them.";
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      zodiacInfo.sign = "Scorpio";
      zodiacInfo.emoji = " ♏️";
      zodiacInfo.description = "Determined and perceptive, with an incredible depth of emotion and understanding. Scorpio children are passionate, resourceful, and naturally mysterious. Their loyalty, intensity, and ability to see beyond the surface make them powerful and transformative personalities.";
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      zodiacInfo.sign = "Sagittarius";
      zodiacInfo.emoji = " ♐️";
      zodiacInfo.description = "Adventurous and optimistic, with an infectious love for life and learning. Sagittarius children are natural philosophers with a great sense of humor. Their honest nature, combined with their enthusiasm and love for exploration, makes them inspiring and enlightening companions.";
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      zodiacInfo.sign = "Capricorn";
      zodiacInfo.emoji = " ♑️";
      zodiacInfo.description = "Patient and determined, with a natural sense of responsibility and ambition. Capricorn children are wise beyond their years, with excellent self-control and a strong work ethic. Their practical nature and quiet determination help them achieve whatever goals they set.";
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      zodiacInfo.sign = "Aquarius";
      zodiacInfo.emoji = " ♒️";
      zodiacInfo.description = "Unique and independent, with a brilliant and innovative mind. Aquarius children are forward-thinking humanitarians with original ideas. Their intellectual nature, combined with their strong ideals and vision for the future, makes them natural pioneers and reformers.";
  } else {
      zodiacInfo.sign = "Pisces";
      zodiacInfo.emoji = " ♓️";
      zodiacInfo.description = "Dreamy and intuitive, with a gentle spirit and boundless imagination. Pisces children are artistic, compassionate, and deeply connected to their emotions. Their creative nature and natural empathy make them sensitive and understanding friends who can always see the magic in life.";
  }

  return zodiacInfo;
}

export default getZodiacInfo