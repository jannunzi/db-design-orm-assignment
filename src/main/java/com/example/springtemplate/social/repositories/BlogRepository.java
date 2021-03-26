package com.example.springtemplate.social.repositories;

import com.example.springtemplate.social.models.Blog;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BlogRepository
        extends CrudRepository<Blog, Integer> {
    @Query(value = "SELECT * FROM blogs WHERE user=:uid", nativeQuery = true)
    public List<Blog> findBlogsForUser(@Param("uid") Integer uid);
}
