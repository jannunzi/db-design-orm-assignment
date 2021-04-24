package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Editor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EditorRepository
        extends CrudRepository<Editor, Integer> {
    @Query(value = "SELECT * FROM editors",
            nativeQuery = true)
    public List<Editor> findAllEditors();
    @Query(value = "SELECT * FROM editors WHERE id=:editorId",
            nativeQuery = true)
    public Editor findEditorById(@Param("editorId") Integer id);
}
