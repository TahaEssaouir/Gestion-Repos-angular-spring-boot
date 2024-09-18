package net.repos.gestion_reposang.web;
import net.repos.gestion_reposang.entities.Collaborateur;
import net.repos.gestion_reposang.services.CollaborateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/Collaborateurs")
@CrossOrigin(origins = "http://localhost:4200")
public class CollaborateurController {

    @Autowired
    private CollaborateurService collaborateurService;
    @PostMapping("/create")
    public Collaborateur createCollaborateur(@RequestBody Collaborateur collaborateur) {
        return collaborateurService.createCollaborateur(collaborateur);
    }

    @GetMapping("/api/collaborateurs/all")
    public ResponseEntity<List<Collaborateur>> getAllCollaborateurs() {
        List<Collaborateur> collaborateurs = collaborateurService.getAllCollaborateurs();
        return ResponseEntity.ok(collaborateurs);
    }


    @GetMapping("/search")
    public ResponseEntity<List<Collaborateur>> searchCollaborateurs(@RequestParam String matricule) {
        List<Collaborateur> collaborateurs = collaborateurService.searchCollaborateurs(matricule);
        return ResponseEntity.ok(collaborateurs);
    }

    @GetMapping("/get")
    public ResponseEntity<List<Collaborateur>> getCollaborateursById(@RequestParam Long collaborateurs) {
        List<Collaborateur> collaborateur = collaborateurService.getCollaborateursById(collaborateurs);
        return ResponseEntity.ok(collaborateur);
    }

    @PutMapping("/update/{collaborateurs}")
    public Collaborateur updateCollaborateur(@RequestParam String matricule,@RequestParam String nom,@RequestParam String prenom,
                                             @RequestParam String terminal,@RequestParam String fonction,@RequestParam String statut,@PathVariable Long collaborateurs) {
        return collaborateurService.updateCollaborateur(matricule,nom,prenom,terminal,fonction,statut,collaborateurs);
    }

    @DeleteMapping("/delete/{collaborateurs}")
    public ResponseEntity<?> deleteCollaborateur(@PathVariable Long collaborateurs) {
        collaborateurService.deleteCollaborateur(collaborateurs);
        return ResponseEntity.ok().build();
    }
}
