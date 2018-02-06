package com.unamanic.proptreecompare.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Builder(toBuilder = true)
@AllArgsConstructor(access = AccessLevel.PACKAGE)
@NoArgsConstructor(access = AccessLevel.PACKAGE)
@Setter
@Getter
public class PropertyEntity {
    @Id
    @GeneratedValue
    private Long id;

    @Access(AccessType.PROPERTY)
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private FileEntity file;
    private String propertyName;
    @Column(length = 100000)
    private  String propertyValue;
}
