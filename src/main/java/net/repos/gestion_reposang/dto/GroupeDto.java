/*package net.repos.gestion_reposang.dto;
import lombok.*;
//import org.springframework.context.annotation.Bean;
//import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Component;
import java.util.List;

@NoArgsConstructor @AllArgsConstructor @Getter @Setter @ToString @Builder @Component
public  class GroupeDto {



   @NotBlank(message = "Terminal ne peut pas être vide")
    private String terminal;

    @NotBlank(message = "Fonction ne peut pas être vide")
    private String fonction;

    @NotEmpty(message = "Le groupe A ne peut pas être vide")
    private List<Long> groupeA;

    @NotEmpty(message = "Le groupe B ne peut pas être vide")
    private List<Long> groupeB;

    @NotEmpty(message = "Le groupe C ne peut pas être vide")
    private List<Long> groupeC;

    // Getters et Setters
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

    public List<Long> getGroupeA() {
        return groupeA;
    }

    public void setGroupeA(List<Long> groupeA) {
        this.groupeA = groupeA;
    }

    public List<Long> getGroupeB() {
        return groupeB;
    }

    public void setGroupeB(List<Long> groupeB) {
        this.groupeB = groupeB;
    }

    public List<Long> getGroupeC() {
        return groupeC;
    }

    public void setGroupeC(List<Long> groupeC) {
        this.groupeC = groupeC;
    }

}
*/