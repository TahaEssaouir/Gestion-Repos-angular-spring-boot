package net.repos.gestion_reposang.repository;

import net.repos.gestion_reposang.entities.Collaborateur;
import net.repos.gestion_reposang.entities.Repos;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReposRepository extends JpaRepository<Repos, Long> {

    List<Repos> findAll();

    List<Collaborateur> findByTerminalAndFonction(String terminal, String fonction);
}