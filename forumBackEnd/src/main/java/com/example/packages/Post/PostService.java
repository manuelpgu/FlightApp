package com.example.packages.Post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    private final PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getPosts(){

        return  postRepository.findAll();
    }

    public void  addNewPost(Post post){
        postRepository.save(post);
    }

    public List<Post> getPostsByUsername(String username){
        return  postRepository.findByUserName(username);
    }

    public List<Post> findByThread(String thread){

        return  postRepository.findByThread(thread);
    }
    public void savePosts(List<Post> posts){
        postRepository.saveAll(posts);

    }
}
