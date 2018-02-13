package com.unamanic.proptreecompare.controllers;

import com.unamanic.proptreecompare.model.FileEntity;
import com.unamanic.proptreecompare.repositories.FileEntityRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TagController {

    private final FileEntityRepository fileEntityRepository;

    public TagController(FileEntityRepository fileEntityRepository) {
        this.fileEntityRepository = fileEntityRepository;
    }

    @GetMapping("/tags")
    public List<String> findFileNamesForTag() {
        return fileEntityRepository.findDistinctTags();
    }

    @GetMapping("/tags/{tag}/files")
    public List<FileEntity> findFilesForTag(@PathVariable String tag) {
        return fileEntityRepository.findByTag(tag);
    }
}
