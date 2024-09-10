package net.repos.gestion_reposang.services;

import lombok.AllArgsConstructor;
import net.repos.gestion_reposang.entities.Collaborateur;
import net.repos.gestion_reposang.exception.ResourceNotFoundException;
import net.repos.gestion_reposang.repository.CollaborateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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


    public Collaborateur updateCollaborateur(Long collaborateurs, Collaborateur collaborateurDetails) {
        Collaborateur collaborateur = collaborateurRepository.findById(collaborateurs)
                .orElseThrow(() -> new ResourceNotFoundException("Collaborateur not found",collaborateurs.toString()) );
        collaborateur.setNom(collaborateurDetails.getNom());
        collaborateur.setPrenom(collaborateurDetails.getPrenom());
        collaborateur.setTerminal(collaborateurDetails.getTerminal());
        collaborateur.setFonction(collaborateurDetails.getFonction());
        collaborateur.setStatut(collaborateurDetails.getStatut());
        collaborateur.setMatricule(collaborateurDetails.getMatricule());
        return collaborateurRepository.save(collaborateur);
    }

    public void deleteCollaborateur(Long collaborateurs) {
        Collaborateur collaborateur = collaborateurRepository.findById(collaborateurs)
                .orElseThrow(() -> new ResourceNotFoundException("Collaborateur not found",collaborateurs.toString()) );
        collaborateurRepository.delete(collaborateur);
    }


}