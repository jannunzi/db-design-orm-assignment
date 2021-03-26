package com.example.springtemplate.daos;

import com.example.springtemplate.models.BlogReview;
import com.example.springtemplate.repositories.BlogReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BlogReviewOrmDao {
    @Autowired
    BlogReviewRepository blogReviewRepository;

    @PostMapping("/api/review")
    public BlogReview createBlogReview(@RequestBody BlogReview blogReview) {
        return blogReviewRepository.save(blogReview);
    }

    @PostMapping("/api/users/{uid}/blogs/{bid}/review")
    public BlogReview createBlogReview(
            @PathVariable("uid") Integer uid,
            @PathVariable("bid") Integer bid,
            @RequestBody BlogReview blog) {
        blog.setUserId(uid);
        blog.setBlogId(bid);
        return blogReviewRepository.save(blog);
    }

    @GetMapping("/api/reviews")
    public List<BlogReview> findAllBlogReviews() {
        return (List<BlogReview>) blogReviewRepository.findAll();
    }

    @GetMapping("/api/users/{uid}/reviews")
    public List<BlogReview> findBlogsForUser(
            @PathVariable("uid") Integer uid) {
        return blogReviewRepository.findBlogReviewForUser(uid);
    }

    @GetMapping("/api/blogs/{blogId}")
    public BlogReview findBlogById(
            @PathVariable("blogId") Integer id) {
        return blogReviewRepository.findById(id).get();
    }
    
    @PutMapping("/api/blogs/{blogId}")
    public BlogReview updateBlogReview(
            @PathVariable("blogId") Integer id,
            @RequestBody BlogReview blogReviewUpdates) {
        BlogReview blogReview = this.findBlogById(id);
        return blogReviewRepository.save(blogReview);
    }
    
    @DeleteMapping("/api/blogs/{blogId}")
    public void deleteBlogReview(
            @PathVariable("blogId") Integer id) {
        blogReviewRepository.deleteById(id);
    }
}