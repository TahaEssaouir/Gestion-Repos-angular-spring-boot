package net.repos.gestion_reposang.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
    private String matricule;

    private String nom;

    private String prenom;

    private String terminal;

    private String fonction;

    private String statut;

    public ResourceNotFoundException(String collaborateurNotFound, String string) {
    }

    public String getMatricule() {
        return matricule;
    }

    public String getNom() {
        return nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public String getTerminal() {
        return terminal;
    }

    public String getFonction() {
        return fonction;
    }

    public String getStatut() {
        return statut;
    }

    public ResourceNotFoundException(String message, String matricule, String nom, String prenom, String terminal, String fonction, String statut) {
        super(String.format("%s not found with %s : '%s'", message, nom, prenom, terminal, fonction));
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.terminal = terminal;
        this.fonction = fonction;
        this.statut = statut;
    }
}
