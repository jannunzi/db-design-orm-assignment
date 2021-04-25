package com.example.springtemplate.daos;

import com.example.springtemplate.models.Author;
import com.example.springtemplate.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AuthorOrmDao {
    @Autowired
    AuthorRepository authorRepository;

    @PostMapping("/api/authors")
    public Author createAuthor(@RequestBody Author author) {
        return authorRepository.save(author);
    }
    
    @GetMapping("/api/authors")
    public List<Author> findAllAuthors() {
        return authorRepository.findAllAuthors();
    }
    
    @GetMapping("/api/authors/{authorId}")
    public Author findAuthorById(
            @PathVariable("authorId") Integer id) {
        return authorRepository.findAuthorById(id);
    }
    
    @PutMapping("/api/authors/{authorId}")
    public Author updateAuthor(
            @PathVariable("authorId") Integer id,
            @RequestBody Author authorUpdates) {
        Author author = authorRepository.findAuthorById(id);
        author.setTopic(authorUpdates.getTopic());
        author.setUserId(authorUpdates.getUserId());
        return authorRepository.save(author);
    }
    
    @DeleteMapping("/api/authors/{authorId}")
    public void deleteAuthor(
            @PathVariable("authorId") Integer id) {
        authorRepository.deleteById(id);
    }
}
