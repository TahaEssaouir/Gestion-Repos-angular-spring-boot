package net.repos.gestion_reposang;

import net.repos.gestion_reposang.entities.Collaborateur;
import net.repos.gestion_reposang.repository.CollaborateurRepository;
import net.repos.gestion_reposang.repository.GroupeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.UUID;

@SpringBootApplication
public class GestionReposAngApplication {

    public static void main(String[] args) {
        SpringApplication.run(GestionReposAngApplication.class, args);

    }


    @Bean
    CommandLineRunner commandLineRunner(CollaborateurRepository collaborateurRepository) {
        return args -> {
            collaborateurRepository.save(Collaborateur.builder().nom("Essaouir").prenom("Taha").matricule("B443424").terminal("DTP").fonction("Technician").statut("Titulaire")
                    .build());

        };


    }



}