package com.unamanic.proptreecompare.repositories;

import com.unamanic.proptreecompare.model.FileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FileEntityRepository extends JpaRepository<FileEntity, Long> {
    @Query("select distinct f.fileName from FileEntity f where f.tag = :tag order by f.fileName")
    List<String> findDistinctFileNameByTag(@Param("tag") String tag);

    @Query("select distinct f.tag from FileEntity f order by f.tag")
    List<String> findDistinctTags();

    @Query("select f from FileEntity f where f.tag = :tag order by f.fileName")
    List<FileEntity> findByTag(@Param("tag")String tag);
}
