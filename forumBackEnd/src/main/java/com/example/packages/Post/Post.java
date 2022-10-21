package com.example.packages.Post;

import javax.persistence.*;

@Entity
@Table(name="Post")
public class Post {
    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO
    )
    private Long id;

    private String userName;

    private String thread;

    private String title;


    private String postBody;

    private String imageLink;

    public Post() {
    }

    public Post(String userName, String thread, String postBody, String imageLink) {
        this.userName = userName;
        this.thread = thread;
        this.postBody = postBody;
        this.imageLink = imageLink;
    }

    public Post(String userName, String thread, String title, String postBody, String imageLink) {
        this.userName = userName;
        this.thread = thread;
        this.title = title;
        this.postBody = postBody;
        this.imageLink = imageLink;
    }

    public Post(Long id, String userName, String thread, String postBody, String imageLink) {
        this.id = id;
        this.userName = userName;
        this.thread = thread;
        this.postBody = postBody;
        this.imageLink = imageLink;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getThread() {
        return thread;
    }

    public void setThread(String thread) {
        this.thread = thread;
    }

    public String getPostBody() {
        return postBody;
    }

    public void setPostBody(String postBody) {
        this.postBody = postBody;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", thread='" + thread + '\'' +
                ", postBody='" + postBody + '\'' +
                ", imageLink='" + imageLink + '\'' +
                '}';
    }



}
