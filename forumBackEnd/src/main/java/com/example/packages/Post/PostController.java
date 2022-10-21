package com.example.packages.Post;


import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="api/v1/posts")
public class PostController {
    private final PostService postService ;
    boolean containsForgivenWords = false;
    private ArrayList<String> forbiddenWords = new ArrayList<String>();

    public PostController(PostService postService) {
        this.postService = postService;
        forbiddenWords.addAll(List.of("Mierda", "Culo","Pedo","Asesinato"));
    }
    @GetMapping
    public List<Post> getPostsWithDifferentTheads() {
        /*TODO @manuelpgu modificar */
        ArrayList<String> theads = new ArrayList<String>();
        List<Post> postsWithDifferentTheads = new ArrayList<Post>();
        List<Post> posts = postService.getPosts();

        posts.forEach(post -> {
            if (!theads.contains(post.getThread())){
                postsWithDifferentTheads.add(post);
                theads.add(post.getThread());
            }
        });

        return postsWithDifferentTheads;
        //return postService.getPosts();
    }

    @PostMapping
    public void registerNewPost(@RequestBody Post post) {
        containsForgivenWords = false;
          forbiddenWords.forEach(
                  s -> {
                      if(post.getPostBody().toLowerCase(Locale.ROOT).contains(s.toLowerCase())){
                          containsForgivenWords = true;
                      }
                  }
            );

        if(!containsForgivenWords){
            postService.addNewPost(post);
        }
    }

    @GetMapping(path="{thread}")
    public List<Post> getPostByTheadName(@PathVariable("thread") String thread) {
        return postService.findByThread(thread);
    }

}
