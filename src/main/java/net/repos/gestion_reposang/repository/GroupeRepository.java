package net.repos.gestion_reposang.repository;
import net.repos.gestion_reposang.entities.Collaborateur;
import net.repos.gestion_reposang.entities.Groupe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GroupeRepository extends JpaRepository<Groupe, Long>{
  List<Groupe> findAll();
  List<Collaborateur> findByTerminalAndFonction(String terminal, String fonction);
}
