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



    List<PropertyEntity> findByFileNameAndTag(String filename, String tag);

    @Query("select p from PropertyEntity p where p.fileName = :fileName and p.tag = :sourceTag and p.propertyName not in " +
            "(select np.propertyName from PropertyEntity np where np.fileName = :fileName and np.tag = :destTag) " +
            "order by p.propertyName")
    List<PropertyEntity> findNotInByFileNameAndTags(@Param("fileName") String fileName, @Param("sourceTag") String sourceTag, @Param("destTag") String destTag);

    @Query("select p from PropertyEntity p, PropertyEntity np " +
            "where p.propertyName = np.propertyName " +
            "and p.fileName = :fileName and p.tag = :sourceTag " +
            "and np.fileName = :fileName and np.tag = :destTag " +
            "and p.propertyValue <> np.propertyValue " +
            "order by p.propertyName")
    List<PropertyEntity> findChangedByFileNameAndTags(@Param("fileName") String fileName, @Param("sourceTag") String sourceTag, @Param("destTag") String destTag);
}
