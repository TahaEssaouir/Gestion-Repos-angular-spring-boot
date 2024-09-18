package net.repos.gestion_reposang.services;
import lombok.AllArgsConstructor;
import net.repos.gestion_reposang.entities.Collaborateur;
import net.repos.gestion_reposang.exception.ResourceNotFoundException;
import net.repos.gestion_reposang.repository.CollaborateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Service
@AllArgsConstructor
public class CollaborateurService {

    @Autowired
    private CollaborateurRepository collaborateurRepository;

    public Collaborateur createCollaborateur(Collaborateur collaborateur) {
        return collaborateurRepository.save(collaborateur);
    }

    public List<Collaborateur> getAllCollaborateurs() {
        return collaborateurRepository.findAll();
    }

    public List<Collaborateur> searchCollaborateurs(String matricule) {
        return collaborateurRepository.findByMatriculeContaining(matricule);
    }

    public List<Collaborateur> getCollaborateursById(Long collaborateurs) {
        return collaborateurRepository.findByCollaborateurs(collaborateurs);
    }


    public Collaborateur updateCollaborateur(@RequestParam String matricule,@RequestParam String nom,@RequestParam String prenom,
                                            @RequestParam String terminal,@RequestParam String fonction,@RequestParam String statut,@PathVariable Long collaborateurs) {
        Collaborateur collaborateur = collaborateurRepository.findById(collaborateurs).get();
        collaborateur.setMatricule(matricule);
        collaborateur.setNom(nom);
        collaborateur.setPrenom(prenom);
        collaborateur.setTerminal(terminal);
        collaborateur.setFonction(fonction);
        collaborateur.setStatut(statut);
        return collaborateurRepository.save(collaborateur);
    }

/*
    public Collaborateur updateCollaborateur(@PathVariable Long collaborateurs,@RequestParam Collaborateur collaborateurDetails) {
        Collaborateur collaborateur = collaborateurRepository.findById(collaborateurs)
                .orElseThrow(() -> new ResourceNotFoundException("Collaborateur not found", collaborateurs.toString()));

        System.out.println("Received details: " + collaborateurDetails);

        collaborateur.setNom(collaborateurDetails.getNom());
        collaborateur.setPrenom(collaborateurDetails.getPrenom());
        collaborateur.setTerminal(collaborateurDetails.getTerminal());
        collaborateur.setFonction(collaborateurDetails.getFonction());
        collaborateur.setStatut(collaborateurDetails.getStatut());
        collaborateur.setMatricule(collaborateurDetails.getMatricule());

        return collaborateurRepository.save(collaborateur);
    } */

    public void deleteCollaborateur(Long collaborateurs) {
        Collaborateur collaborateur = collaborateurRepository.findById(collaborateurs)
                .orElseThrow(() -> new ResourceNotFoundException("Collaborateur not found",collaborateurs.toString()) );
        collaborateurRepository.delete(collaborateur);
    }
}