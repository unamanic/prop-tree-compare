package com.unamanic.proptreecompare.controllers;

import com.unamanic.proptreecompare.model.FileEntity;
import com.unamanic.proptreecompare.model.PropertyEntity;
import com.unamanic.proptreecompare.repositories.PropertyEntityRepository;
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
@WebMvcTest(PropertyController.class)
public class PropertyControllerTest {

	@MockBean
	private PropertyEntityRepository propertyEntityRepository;

	@Autowired
	private MockMvc mockMvc;

	@Test
	public void testInit() throws Exception {
		assertTrue(true);
	}

	@Test
	public void findByFileTest() throws Exception{
		when(this.propertyEntityRepository.findAllByFileId(1l)).thenReturn(Arrays.asList(
				PropertyEntity.builder()
						.id(1l)
						.file(FileEntity.builder()
								.id(1l)
								.fileName("one")
								.tag("tag_name")
								.relPath("path/path/one")
								.build())
						.propertyName("propName1")
						.propertyValue("value")
						.build(),
				PropertyEntity.builder()
						.id(2l)
						.file(FileEntity.builder()
								.id(1l)
								.fileName("one")
								.tag("tag_name")
								.relPath("path/path/one")
								.build())
						.propertyName("propName2")
						.propertyValue("value2")
						.build()
		));

		this.mockMvc.perform(get("/api/file/1")
				.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().isOk());

		verify(this.propertyEntityRepository, atLeastOnce()).findAllByFileId(1l);
	}

	@Test
	public void findChangedTest() throws Exception{
		when(this.propertyEntityRepository.findChangedByFileIdAndTags(1l, "tag1", "tag2")).thenReturn(Arrays.asList(
				PropertyEntity.builder()
						.id(1l)
						.file(FileEntity.builder()
								.id(1l)
								.fileName("one")
								.tag("tag_name")
								.relPath("path/path/one")
								.build())
						.propertyName("propName1")
						.propertyValue("value")
						.build(),
				PropertyEntity.builder()
						.id(2l)
						.file(FileEntity.builder()
								.id(1l)
								.fileName("one")
								.tag("tag_name")
								.relPath("path/path/one")
								.build())
						.propertyName("propName2")
						.propertyValue("value2")
						.build()
		));

		this.mockMvc.perform(get("/api/changed/1/tag1/tag2")
				.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().isOk());

		verify(this.propertyEntityRepository, atLeastOnce()).findChangedByFileIdAndTags(1l, "tag1", "tag2");
	}

	@Test
	public void findAddedTest() throws Exception {
		when(this.propertyEntityRepository.findAddedInByFileIdAndTags(1l, "tag1", "tag2")).thenReturn(Arrays.asList(
				PropertyEntity.builder()
						.id(1l)
						.file(FileEntity.builder()
								.id(1l)
								.fileName("one")
								.tag("tag_name")
								.relPath("path/path/one")
								.build())
						.propertyName("propName1")
						.propertyValue("value")
						.build(),
				PropertyEntity.builder()
						.id(2l)
						.file(FileEntity.builder()
								.id(1l)
								.fileName("one")
								.tag("tag_name")
								.relPath("path/path/one")
								.build())
						.propertyName("propName2")
						.propertyValue("value2")
						.build()
		));

		this.mockMvc.perform(get("/api/added/1/tag1/tag2")
				.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().isOk());

		verify(this.propertyEntityRepository, atLeastOnce()).findAddedInByFileIdAndTags(1l, "tag1", "tag2");
	}

	@Test
	public void findRemovedTest() throws Exception {
		when(this.propertyEntityRepository.findRemovedInByFileIdAndTags(1l, "tag1", "tag2")).thenReturn(Arrays.asList(
				PropertyEntity.builder()
						.id(1l)
						.file(FileEntity.builder()
								.id(1l)
								.fileName("one")
								.tag("tag_name")
								.relPath("path/path/one")
								.build())
						.propertyName("propName1")
						.propertyValue("value")
						.build(),
				PropertyEntity.builder()
						.id(2l)
						.file(FileEntity.builder()
								.id(1l)
								.fileName("one")
								.tag("tag_name")
								.relPath("path/path/one")
								.build())
						.propertyName("propName2")
						.propertyValue("value2")
						.build()
		));

		this.mockMvc.perform(get("/api/removed/1/tag1/tag2")
				.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().isOk());

		verify(this.propertyEntityRepository, atLeastOnce()).findRemovedInByFileIdAndTags(1l, "tag1", "tag2");
	}
}