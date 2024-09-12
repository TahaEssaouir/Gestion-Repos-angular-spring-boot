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
//
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
    public ResponseEntity<List<Collaborateur>> getCollaborateursById(@RequestParam String matricule) {
        List<Collaborateur> collaborateurs = collaborateurService.getCollaborateursById(matricule);
        return ResponseEntity.ok(collaborateurs);
    }

    @PutMapping("/update/{collaborateurs}")
    public Collaborateur updateCollaborateur(@PathVariable Long collaborateurs, @RequestBody Collaborateur collaborateurDetails) {
        return collaborateurService.updateCollaborateur(collaborateurs, collaborateurDetails);
    }

    @DeleteMapping("/delete/{collaborateurs}")
    public ResponseEntity<?> deleteCollaborateur(@PathVariable Long collaborateurs) {
        collaborateurService.deleteCollaborateur(collaborateurs);
        return ResponseEntity.ok().build();
    }


}
