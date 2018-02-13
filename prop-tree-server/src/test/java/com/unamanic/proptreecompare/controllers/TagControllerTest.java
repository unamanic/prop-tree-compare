package com.unamanic.proptreecompare.controllers;

import com.unamanic.proptreecompare.repositories.FileEntityRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.lang.reflect.Array;
import java.util.Arrays;

import static org.junit.Assert.*;
import static org.mockito.Matchers.eq;
import static org.mockito.Matchers.refEq;
import static org.mockito.Mockito.*;
import static org.mockito.MockitoAnnotations.initMocks;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@WebAppConfiguration
@RunWith(SpringJUnit4ClassRunner.class)
public class TagControllerTest {

    @Mock
    private FileEntityRepository fileEntityRepository;
    @Autowired
    private WebApplicationContext wac;
    private MockMvc mockMvc;

    @Before
    public void setUp() {
        initMocks(this);
        this.mockMvc = MockMvcBuilders
                .webAppContextSetup(wac)
                .build();
    }

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

//        verify(this.fileEntityRepository, atLeastOnce()).findDistinctTags();
    }

    @Test
    public void findFilesForTagTest() throws Exception {
    }

}