package net.repos.gestion_reposang.services;

import lombok.AllArgsConstructor;
import net.repos.gestion_reposang.entities.Collaborateur;
import net.repos.gestion_reposang.entities.Repos;
import net.repos.gestion_reposang.exception.ResourceNotFoundException;
import net.repos.gestion_reposang.repository.ReposRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ReposService {
    @Autowired
    private ReposRepository reposRepository;

    public List<Collaborateur> afficherCollaborateurs(String terminal, String fonction) {
        return reposRepository.findByTerminalAndFonction(terminal, fonction);
    }

    public List<Repos> getAllRepos() {
        return reposRepository.findAll();
    }


    public Repos save(Repos repos) {
        return reposRepository.save(repos);
    }

    public void deleteRepos(Long collaborateurs) {
        Repos repo = reposRepository.findById(collaborateurs)
                .orElseThrow(() -> new ResourceNotFoundException("Repos not found",collaborateurs.toString()) );
        reposRepository.delete(repo);
    }


}