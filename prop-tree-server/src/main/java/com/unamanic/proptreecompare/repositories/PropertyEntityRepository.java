package com.unamanic.proptreecompare.repositories;

import com.unamanic.proptreecompare.model.PropertyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public interface PropertyEntityRepository extends JpaRepository<PropertyEntity, Long> {



    @Query("select p from PropertyEntity p where p.file.id = :fileId and p.file.tag = :sourceTag and p.propertyName not in " +
            "(select np.propertyName from PropertyEntity np where np.file.relPath = p.file.relPath and np.file.tag = :destTag) " +
            "order by p.propertyName")
    List<PropertyEntity> findAddedInByFileIdAndTags(@Param("fileId") Long fileId, @Param("sourceTag") String sourceTag, @Param("destTag") String destTag);

    @Query("select p from PropertyEntity p where p.file.relPath in " +
            "(select f.relPath from FileEntity f where f.id = :fileId) " +
            "and p.file.tag = :destTag and p.propertyName not in " +
            "(select np.propertyName from PropertyEntity np where np.file.relPath = p.file.relPath and np.file.tag = :sourceTag) " +
            "order by p.propertyName")
    List<PropertyEntity> findRemovedInByFileIdAndTags(@Param("fileId") Long fileId, @Param("sourceTag") String sourceTag, @Param("destTag") String destTag);

    @Query("select p from PropertyEntity p, PropertyEntity np " +
            "where p.propertyName = np.propertyName " +
            "and p.file.id = :fileId and p.file.tag = :sourceTag " +
            "and np.file.relPath = p.file.relPath and np.file.tag = :destTag " +
            "and p.propertyValue <> np.propertyValue " +
            "order by p.propertyName")
    List<PropertyEntity> findChangedByFileIdAndTags(@Param("fileId") Long fileId, @Param("sourceTag") String sourceTag, @Param("destTag") String destTag);
}
