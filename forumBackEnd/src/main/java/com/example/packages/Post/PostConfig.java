package com.example.packages.Post;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;


@Configuration
public class PostConfig {
    @Bean
    CommandLineRunner commandLineRunner(PostRepository repository) {
        return args -> {
            Post post1 = new Post("pepe","doubt","enfado maximo","trial post","link");

            Post post2 = new Post("juanfran","suggestion","muy contento", "post 2","link2");

            Post post3 = new Post("manuel","clarification","me baño en el rio","link3");

            repository.saveAll(List.of(post1, post2, post3));
        };
    }
}
