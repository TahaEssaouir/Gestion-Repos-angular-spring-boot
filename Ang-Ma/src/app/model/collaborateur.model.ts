export interface Collaborateur {
  collaborateurs:number;
  matricule: string;
  nom: string;  // Corrected from 'non' to 'nom'
  prenom: string;
  terminal: string;  // Corrected from 'terminale' to 'terminal'
  fonction: string;
  statut: string;
}



export interface Repo{
  collaborateurs:number;
  dateDebut:string;
  dateFin:string;
  terminal:string;
  fonction:string;
  typeRepos:string;
}
