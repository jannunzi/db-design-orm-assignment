package com.example.springtemplate.examples.m2mwork.m2m;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProjectAssignmentRepository
        extends CrudRepository<ProjectAssignment, Integer> {
    @Query(value = "select * from project_assignments pa, employees e where pa.employee_id = e.id and pa.project_id = :pid", nativeQuery = true)
    public List<ProjectAssignment> findEmployeesForProject(@Param("pid") Integer pid);
    
    @Query(value = "select * from project_assignments pa, projects p where pa.project_id = p.id and pa.employee_id = :eid", nativeQuery = true)
    public List<ProjectAssignment> findProjectsForEmployee(@Param("eid") Integer eid);
}
