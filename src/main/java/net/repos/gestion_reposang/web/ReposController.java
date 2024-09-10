package net.repos.gestion_reposang.web;

import ch.qos.logback.core.model.Model;
import net.repos.gestion_reposang.entities.Collaborateur;
import net.repos.gestion_reposang.entities.Repos;
import net.repos.gestion_reposang.services.ReposService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Repos")
@CrossOrigin(origins = "http://localhost:4200")
public class ReposController {
    @Autowired
    private ReposService reposService;

    @GetMapping("/groupes/all")
    public ResponseEntity<List<Repos>> getAllGroups() {
        List<Repos> repos = reposService.getAllRepos();
        return ResponseEntity.ok(repos);
    }

    @PostMapping("/create")
    public Repos createRepos(@RequestBody Repos repos) {
        return reposService.save(repos);
        //return "redirect:/repos";
    }

    @DeleteMapping("/delete/{collaborateurs}")
    public ResponseEntity<?> deleteRepos(@PathVariable Long collaborateurs) {
        reposService.deleteRepos(collaborateurs);
        return ResponseEntity.ok().build();
       // return "redirect:/repos";
    }
}
