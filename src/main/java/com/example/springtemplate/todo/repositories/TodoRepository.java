package com.example.springtemplate.todo.repositories;

import com.example.springtemplate.todo.models.Todo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TodoRepository extends CrudRepository<Todo, Integer> {
    @Query("SELECT todo FROM Todo todo")
    public List<Todo> findAllTodos();
    @Query("SELECT todo FROM Todo todo WHERE todo.id=:id")
    public Todo findTodoById(@Param("id") Integer id);
}
