package com.unamanic.proptreecompare.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Builder(toBuilder = true)
@AllArgsConstructor(access = AccessLevel.PACKAGE)
@NoArgsConstructor(access = AccessLevel.PACKAGE)
@Setter
@Getter
public class FileEntity {
    @Id
    @GeneratedValue
    private Long id;

    private String fileName;
    private String tag;

}
