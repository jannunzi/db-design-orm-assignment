package com.example.springtemplate.social.repositories;

import com.example.springtemplate.social.models.BlogReview;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BlogReviewRepository
    extends CrudRepository<BlogReview, Integer> {
    @Query(value = "SELECT * FROM blog_reviews WHERE user_id=:uid", nativeQuery = true)
    public List<BlogReview> findBlogReviewForUser(@Param("uid") Integer userId);

    @Query(value = "SELECT * FROM blog_reviews WHERE blog_id=:bid", nativeQuery = true)
    public List<BlogReview> findBlogReviewForBlog(@Param("bid") Integer blogId);
}
