package net.repos.gestion_reposang.services;
import lombok.AllArgsConstructor;
import net.repos.gestion_reposang.entities.Collaborateur;
import net.repos.gestion_reposang.entities.Groupe;
import net.repos.gestion_reposang.entities.Repos;
import net.repos.gestion_reposang.exception.ResourceNotFoundException;
import net.repos.gestion_reposang.repository.CollaborateurRepository;
import net.repos.gestion_reposang.repository.GroupeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class GroupeService {

    @Autowired
    private CollaborateurRepository collaborateurRepository;

    @Autowired
    private GroupeRepository groupeRepository;


    public List<Groupe> getAllGroupes() {
        return groupeRepository.findAll();
    }

    public Groupe createGroupes(Groupe groupe) {
        return groupeRepository.save(groupe);
    }

    public void deleteGroupes(Long collaborateurs) {
        Groupe groupe1 = groupeRepository.findById(collaborateurs)
                .orElseThrow(() -> new ResourceNotFoundException("Repos not found",collaborateurs.toString()) );
        groupeRepository.delete(groupe1);
    }

    public List<Collaborateur> afficherCollaborateurs(String terminal, String fonction) {
        return collaborateurRepository.findByTerminalAndFonction(terminal, fonction);
    }
}
