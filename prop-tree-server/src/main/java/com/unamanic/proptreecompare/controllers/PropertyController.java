package com.unamanic.proptreecompare.controllers;

import com.unamanic.proptreecompare.model.PropertyEntity;
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

    @GetMapping("/tags")
    public List<String> findFileNamesForTag() {
        return propertyEntityRepository.findDistinctTags();
    }

    @GetMapping("/fileNames/{tag}")
    public List<String> findFileNamesForTag(@PathVariable String tag) {
        return propertyEntityRepository.findDistinctFileNameByTag(tag);
    }

    @GetMapping("/id/{id}")
    public PropertyEntity findOne(@PathVariable Long id) {
        return propertyEntityRepository.findOne(id);
    }

    @GetMapping("/changed/{fileName}/{sourceTag}/{destTag}")
    public List<PropertyEntity> findChanged(@PathVariable String fileName, @PathVariable String sourceTag, @PathVariable String destTag) {
        return propertyEntityRepository.findChangedByFileNameAndTags(fileName, sourceTag, destTag);
    }
    @GetMapping("/added/{fileName}/{sourceTag}/{destTag}")
    public List<PropertyEntity> findAdded(@PathVariable String fileName, @PathVariable String sourceTag, @PathVariable String destTag) {
        return propertyEntityRepository.findNotInByFileNameAndTags(fileName, sourceTag, destTag);
    }
    @GetMapping("/removed/{fileName}/{sourceTag}/{destTag}")
    public List<PropertyEntity> findRemoved(@PathVariable String fileName, @PathVariable String sourceTag, @PathVariable String destTag) {
        return propertyEntityRepository.findNotInByFileNameAndTags(fileName, destTag, sourceTag);
    }


}
