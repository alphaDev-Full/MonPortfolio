//Interface pour les types de competences
export interface TypeCopetence {
  name: string;
  competences: { nom: string; niveau: number }[];
}

//Interface pour afficher un projet

export interface Projet {
  titre: string;
  date: string;
  gitHubLink: string;
  description: string[];
}

//Interface pour afficher une education
export interface Education {
  titre: string;
  lieux: string;
  description: string[];
}

//Interface pour un message

export interface message {
  nom: string;
  prenom: string;
  mail: string;
  message: string;
}
