package com.unamanic.proptreecompare.controllers;

import com.unamanic.proptreecompare.model.PropertyEntity;
import com.unamanic.proptreecompare.repositories.FileEntityRepository;
import com.unamanic.proptreecompare.repositories.PropertyEntityRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PropertyController {
    private final PropertyEntityRepository propertyEntityRepository;

    public PropertyController(PropertyEntityRepository propertyEntityRepository) {
        this.propertyEntityRepository = propertyEntityRepository;
    }

    @GetMapping("/file/{id}")
    public List<PropertyEntity> findByFile(@PathVariable Long id) {
        return propertyEntityRepository.findAllByFileId(id);
    }

    @GetMapping("/changed/{fileId}/{sourceTag}/{destTag}")
    public List<PropertyEntity> findChanged(@PathVariable Long fileId, @PathVariable String sourceTag, @PathVariable String destTag) {
        return propertyEntityRepository.findChangedByFileIdAndTags(fileId, sourceTag, destTag);
    }
    @GetMapping("/added/{fileId}/{sourceTag}/{destTag}")
    public List<PropertyEntity> findAdded(@PathVariable Long fileId, @PathVariable String sourceTag, @PathVariable String destTag) {
        return propertyEntityRepository.findAddedInByFileIdAndTags(fileId, sourceTag, destTag);
    }
    @GetMapping("/removed/{fileId}/{sourceTag}/{destTag}")
    public List<PropertyEntity> findRemoved(@PathVariable Long fileId, @PathVariable String sourceTag, @PathVariable String destTag) {
        return propertyEntityRepository.findRemovedInByFileIdAndTags(fileId, sourceTag, destTag);
    }


}
