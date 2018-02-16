package com.unamanic.proptreecompare.controllers;

import com.unamanic.proptreecompare.model.FileEntity;
import com.unamanic.proptreecompare.repositories.FileEntityRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;

import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(TagController.class)
public class TagControllerTest {

    @MockBean
    private FileEntityRepository fileEntityRepository;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testInit() throws Exception {
        assertTrue(true);
    }

    @Test
    public void findFileNamesForTagTest() throws Exception {

        when(this.fileEntityRepository.findDistinctTags()).thenReturn(Arrays.asList("one", "two"));

        this.mockMvc.perform(get("/api/tags")
                .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        verify(this.fileEntityRepository, atLeastOnce()).findDistinctTags();
    }

    @Test
    public void findFilesForTagTest() throws Exception {
        when(this.fileEntityRepository.findByTag("tag_name")).thenReturn(Arrays.asList(
                FileEntity.builder()
                        .id(1l)
                        .fileName("one")
                        .tag("tag_name")
                        .relPath("path/path/one")
                        .build(),
                FileEntity.builder()
                        .id(2l)
                        .fileName("two")
                        .tag("tag_name")
                        .relPath("path/path/two")
                        .build()
        ));

        this.mockMvc.perform(get("/api/tags/tag_name/files")
                .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        verify(this.fileEntityRepository, atLeastOnce()).findByTag("tag_name");
    }

}