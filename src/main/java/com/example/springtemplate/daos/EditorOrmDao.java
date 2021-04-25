package com.example.springtemplate.daos;

import com.example.springtemplate.models.Editor;
import com.example.springtemplate.repositories.EditorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class EditorOrmDao {
    @Autowired
    EditorRepository editorRepository;

    @PostMapping("/api/editors")
    public Editor createEditor(@RequestBody Editor editor) {
        return editorRepository.save(editor);
    }
    
    @GetMapping("/api/editors")
    public List<Editor> findAllEditors() {
        return editorRepository.findAllEditors();
    }
    
    @GetMapping("/api/editors/{editorId}")
    public Editor findEditorById(
            @PathVariable("editorId") Integer id) {
        return editorRepository.findEditorById(id);
    }
    
    @PutMapping("/api/editors/{editorId}")
    public Editor updateEditor(
            @PathVariable("editorId") Integer id,
            @RequestBody Editor editorUpdates) {
        Editor editor = editorRepository.findEditorById(id);
        editor.setRole(editorUpdates.getRole());
        editor.setUserId(editorUpdates.getUserId());
        return editorRepository.save(editor);
    }
    
    @DeleteMapping("/api/editors/{editorId}")
    public void deleteEditor(
            @PathVariable("editorId") Integer id) {
        editorRepository.deleteById(id);
    }
}
