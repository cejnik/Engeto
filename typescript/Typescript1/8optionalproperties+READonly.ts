// Optional properties
// Readonly modifier
type Website = {
  readonly title: string;
  url: string;
  pages?: number;
  author: string;
};

const firstWebsite: Website = {
  title: "Engeto",
  url: "www.engeto.cz",
  author: "Engeto tým",
};

// firstWebsite.title = 'Nový název stránek';  // chyba
