package net.repos.gestion_reposang.entities;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;
@Entity
@NoArgsConstructor @AllArgsConstructor @Getter @Setter  @ToString @Builder
public class Collaborateur {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long collaborateurs;

    private String matricule;

    private String nom;

    private String prenom;

    private String terminal;

    private String fonction;

    private String statut;

}