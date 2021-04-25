package com.example.springtemplate.daos;

import com.example.springtemplate.models.Article;
import com.example.springtemplate.repositories.ArticleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ArticleOrmDao {
    @Autowired
    ArticleRepository articleRepository;

    @PostMapping("/api/articles")
    public Article createUser(@RequestBody Article article) {
        return articleRepository.save(article);
    }
    
    @GetMapping("/api/articles")
    public List<Article> findAllArticles() {
        return articleRepository.findAllArticles();
    }
    
    @GetMapping("/api/articles/{articleId}")
    public Article findArticleById(
            @PathVariable("articleId") Integer id) {
        return articleRepository.findArticleById(id);
    }
    
    @PutMapping("/api/articles/{articleId}")
    public Article updateArticle(
            @PathVariable("articleId") Integer id,
            @RequestBody Article articleUpdates) {
        Article article = articleRepository.findArticleById(id);
        article.setTitle(articleUpdates.getTitle());
        article.setContent(articleUpdates.getContent());
        article.setBibliography(articleUpdates.getBibliography());
        article.setAuthor(articleUpdates.getAuthor());
        article.setEditor(articleUpdates.getEditor());
        article.setJournal(articleUpdates.getJournal());
        return articleRepository.save(article);
    }
    
    @DeleteMapping("/api/articles/{articleId}")
    public void deleteArticle(
            @PathVariable("articleId") Integer id) {
        articleRepository.deleteById(id);
    }
}
