package com.example.springtemplate.social.daos;

import com.example.springtemplate.social.models.BlogReview;
import com.example.springtemplate.social.repositories.BlogReviewRepository;
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

    @GetMapping("/api/reviews/{id}")
    public BlogReview findBlogReviewById(
            @PathVariable("id") Integer id) {
        return blogReviewRepository.findById(id).get();
    }
    
    @PutMapping("/api/reviews/{id}")
    public BlogReview updateBlogReview(
            @PathVariable("id") Integer id,
            @RequestBody BlogReview blogReviewUpdates) {
        BlogReview blogReview = this.findBlogReviewById(id);
        blogReview.setReview(blogReviewUpdates.getReview());
        return blogReviewRepository.save(blogReview);
    }
    
    @DeleteMapping("/api/reviews/{id}")
    public void deleteBlogReview(
            @PathVariable("id") Integer id) {
        blogReviewRepository.deleteById(id);
    }
}