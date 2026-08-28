const news = [
  {
    url: "https://www.nationalgeographic.com/",
    urlToImage:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16",
    description:
      "Pets can have a positive influence on our everyday lives and emotional wellbeing.",
  },
  {
    url: "https://www.bbc.com/",
    urlToImage:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    description:
      "Spending time with animals can help people feel happier and less stressed.",
  },
  {
    url: "https://www.nature.com/",
    urlToImage:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
    description:
      "Interacting with pets can create strong emotional connections between people and animals.",
  },
  {
    url: "https://www.sciencedaily.com/",
    urlToImage:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    description:
      "Researchers continue to study the relationship between humans and their pets.",
  },
  {
    url: "https://www.petmd.com/",
    urlToImage:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    description:
      "Regular interaction with pets can become an important part of a healthy lifestyle.",
  },
  {
    url: "https://www.akc.org/",
    urlToImage:
      "https://images.unsplash.com/photo-1552053831-71594a27632d",
    description:
      "Playing and communicating with animals helps strengthen the bond between pets and their owners.",
  },
  {
    url: "https://www.aspca.org/",
    urlToImage:
      "https://images.unsplash.com/photo-1560743641-3914f2c45636",
    description:
      "Responsible pet ownership includes spending time with animals and understanding their needs.",
  },
  {
    url: "https://www.purina.com/",
    urlToImage:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    description:
      "Cats and dogs can become important companions and members of the family.",
  },
];

export const NewsApi = async (query, page = 1) => {
  const pageSize = 4;

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    articles: news.slice(start, end),
    totalResults: news.length,
  };
};