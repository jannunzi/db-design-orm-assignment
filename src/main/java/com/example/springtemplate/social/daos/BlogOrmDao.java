package com.example.springtemplate.social.daos;

import com.example.springtemplate.social.models.Blog;
import com.example.springtemplate.social.repositories.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BlogOrmDao {
    @Autowired
    BlogRepository blogRepository;

    @PostMapping("/api/blogs")
    public Blog createBlog(@RequestBody Blog blog) {
        return blogRepository.save(blog);
    }

    @PostMapping("/api/users/{uid}/blogs")
    public Blog createBlogForUser(
            @PathVariable("uid") Integer uid,
            @RequestBody Blog blog) {
        blog.setUser(uid);
        return blogRepository.save(blog);
    }

    @GetMapping("/api/blogs")
    public List<Blog> findAllBlogs() {
        return (List<Blog>) blogRepository.findAll();
    }

    @GetMapping("/api/users/{uid}/blogs")
    public List<Blog> findBlogsForUser(
            @PathVariable("uid") Integer uid) {
        return blogRepository.findBlogsForUser(uid);
    }

    @GetMapping("/api/blogs/{blogId}")
    public Blog findBlogById(
            @PathVariable("blogId") Integer id) {
        return blogRepository.findById(id).get();
    }
    
    @PutMapping("/api/blogs/{blogId}")
    public Blog updateBlog(
            @PathVariable("blogId") Integer id,
            @RequestBody Blog blogUpdates) {
        Blog blog = this.findBlogById(id);
        blog.setName(blogUpdates.getName());
        blog.setTopic(blogUpdates.getTopic());
        blog.setUser(blogUpdates.getUser());
        return blogRepository.save(blog);
    }
    
    @DeleteMapping("/api/blogs/{blogId}")
    public void deleteBlog(
            @PathVariable("blogId") Integer id) {
        blogRepository.deleteById(id);
    }
}