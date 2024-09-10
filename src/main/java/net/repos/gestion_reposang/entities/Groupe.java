package net.repos.gestion_reposang.entities;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@NoArgsConstructor @AllArgsConstructor @Getter @Setter @ToString @Builder
public class Groupe  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long collaborateurs;

    private String terminal;
    private String fonction;
    // private String codeGroupe;

    @ElementCollection
    private List<Long> membres;

    public Groupe(String terminal, String fonction, List<Long> membres) {
        this.terminal = terminal;
        this.fonction = fonction;
        this.membres = membres;
    }

    public Long getCollaborateurs() {
        return collaborateurs;
    }

    public void setCollaborateurs(Long collaborateurs) {
        this.collaborateurs = collaborateurs;
    }

    public String getTerminal() {
        return terminal;
    }

    public void setTerminal(String terminal) {
        this.terminal = terminal;
    }

    public String getFonction() {
        return fonction;
    }

    public void setFonction(String fonction) {
        this.fonction = fonction;
    }

    public List<Long> getMembres() {
        return membres;
    }

    public void setMembres(List<Long> membres) {
        this.membres = membres;
    }
}
