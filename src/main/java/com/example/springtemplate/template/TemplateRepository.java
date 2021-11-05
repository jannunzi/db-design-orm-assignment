package com.example.springtemplate.template;

import com.example.springtemplate.template.Template;
import org.springframework.data.repository.CrudRepository;

public interface TemplateRepository
        extends CrudRepository<Template, Integer> {
}
