package com.unamanic.proptreecompare.propertymanager;

import com.unamanic.proptreecompare.model.FileEntity;
import com.unamanic.proptreecompare.model.PropertyEntity;
import com.unamanic.proptreecompare.repositories.FileEntityRepository;
import com.unamanic.proptreecompare.repositories.PropertyEntityRepository;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.Properties;

@Component
public class PropertyIngestorImpl implements PropertyIngestor {

    private final PropertyEntityRepository propertyEntityRepository;
    private final FileEntityRepository fileEntityRepository;

    public PropertyIngestorImpl(PropertyEntityRepository propertyEntityRepository, FileEntityRepository fileEntityRepository) {
        this.propertyEntityRepository = propertyEntityRepository;
        this.fileEntityRepository = fileEntityRepository;
    }

    public void ingest(String tag, String startingPath){
        System.out.println("In Ingestor - Tag:" + tag + " Path: " + startingPath );
        ingestorWorker(tag, startingPath);
    }

    private void ingestorWorker(String tag, String startingPath) {
        File path = new File(startingPath);
        Arrays.stream(path.listFiles()).forEach(f -> {
            if(f.isDirectory()){
                ingestorWorker(tag, f.getPath());
            } else if (f.getName().endsWith(".properties")){
                ingestFile(tag, f);
            }
        });
    }

    private void ingestFile(final String tag, File f) {
        Properties props = new Properties();
        try {
            props.load(new FileInputStream(f));

            fileEntityRepository.save(FileEntity.builder()
                    .fileName(f.getName())
                    .tag(tag)
                    .build());

            props.stringPropertyNames().stream().forEach(pName -> {
                this.propertyEntityRepository.save(PropertyEntity.builder()
                        .fileName(f.getName())
                        .tag(tag)
                        .propertyName(pName)
                        .propertyValue(props.getProperty(pName))
                        .build());
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
