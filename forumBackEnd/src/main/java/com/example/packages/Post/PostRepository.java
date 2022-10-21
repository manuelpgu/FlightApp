package com.example.packages.Post;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
   //
    List<Post> findByUserName(String username);

    List<Post> findByThread(String thread);
}
