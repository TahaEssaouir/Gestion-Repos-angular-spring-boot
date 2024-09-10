package net.repos.gestion_reposang.services;

import lombok.AllArgsConstructor;
import net.repos.gestion_reposang.dto.GroupeDto;
import net.repos.gestion_reposang.entities.Collaborateur;
import net.repos.gestion_reposang.entities.Groupe;
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
//groupeDTO
    private GroupeDto groupeDto;

    public List<Groupe> getAllGroupes() {
        return groupeRepository.findAll();
    }

    public void creerGroupes(GroupeDto groupeDto) {
        //créer les groupes A, B et C
        Groupe groupeA = new Groupe(groupeDto.getTerminal(), groupeDto.getFonction(), groupeDto.getGroupeA());
        Groupe groupeB = new Groupe(groupeDto.getTerminal(), groupeDto.getFonction(), groupeDto.getGroupeB());
        Groupe groupeC = new Groupe(groupeDto.getTerminal(), groupeDto.getFonction(), groupeDto.getGroupeC());
        groupeRepository.save(groupeA);
        groupeRepository.save(groupeB);
        groupeRepository.save(groupeC);
    }

    public List<Collaborateur> afficherCollaborateurs(String terminal, String fonction) {
        return collaborateurRepository.findByTerminalAndFonction(terminal, fonction);
    }
}
